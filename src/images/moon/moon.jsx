import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import colorMap from './moon.jpg';
import normalMap from './normal.jpg';
import satelliteMap from "./satellite.jpg";

import alMapInferno from "./maps/Al_inferno.png"
import alMapUncertainty from "./maps/Al_uncertainty.png"

import caMapInferno from "./maps/Ca_inferno.png"
import caMapUncertainty from "./maps/Ca_uncertainty.png"

import crMapInferno from "./maps/Cr_inferno.png"
import crMapUncertainty from "./maps/Cr_uncertainty.png"

import feMapInferno from "./maps/Fe_inferno.png"
import feMapUncertainty from "./maps/Fe_uncertainty.png"

// import kMapInferno from "./maps/K_inferno.png"
// import kMapUncertainty from "./maps/K_uncertainty.png"

import mgMapInferno from "./maps/Mg_inferno.png"
import mgMapUncertainty from "./maps/Mg_uncertainty.png"

import mnMapInferno from "./maps/Mn_inferno.png"
import mnMapUncertainty from "./maps/Mn_uncertainty.png"

// import naMapInferno from "./maps/Na_inferno.png"
// import naMapUncertainty from "./maps/Na_uncertainty.png"

// import pMapInferno from "./maps/P_inferno.png"
// import pMapUncertainty from "./maps/P_uncertainty.png"

// import sMapInferno from "./maps/S_inferno.png"
// import sMapUncertainty from "./maps/S_uncertainty.png"

// import siMapInferno from "./maps/Si_inferno.png"
// import siMapUncertainty from "./maps/Si_uncertainty.png"

import tiMapInferno from "./maps/Ti_inferno.png"
import tiMapUncertainty from "./maps/Ti_uncertainty.png"

import solarPanelMap from "./solar_panel.jpg"

import Navbar from '../Navbar/Navbar';
import { CiCircleChevUp } from "react-icons/ci";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { landmarks } from '../../data/landmarks';
import LandmarkSidebar from '../Sidebar/Details';
import ListSidebar from '../Sidebar/Lists';
import CameraDropdown from '../Dropdowns/CameraSwitch';
import FileUploadPanel from "../FileUpload/FileUploadPanel"
import ModeDropdown from '../Dropdowns/ToggleMode';
import ChemicalCompositionSidebar from '../Sidebar/ChemicalComposition';
import CoordinateInput from '../FileUpload/CoordinateInput';
import ProcessedDataSidebar from '../Sidebar/ProcessedDataSidebar';
import InfernoScale from '../Scale/InfernoScale';
import { parseOverlays } from '../../utils/jsonConverter';
import { BACKEND_SERVER_URL } from '../../utils/constants';
import MapSwitchDropdown from '../Dropdowns/Map_Switch';
const iconPaths = {
    "sites": "red",
    "seas": "green",
    "treats": "blue",
    "craters": "#ed8ec1"
};


const ZOOM_LEVELS = {

    NORMAL: {
        rows: 12,
        cols: 12,
        threshold: 4.8  // Camera distance threshold for this zoom level
    },
    INTERMEDIATE: {
        rows: 24,
        cols: 24,
        threshold: 3.6  // Camera distance threshold for this zoom level
    },
    HIGH: {
        rows: 48,
        cols: 48,
        threshold: 3.2  // Closest camera distance possible
    }
};


const Moon = () => {



    const Legends = () => {
        return (
            <div style={{
                position: "absolute",
                left: "26px",
                top: "20px",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                padding: "15px",
                borderRadius: "8px"
            }}>
                {Object.entries(iconPaths).map(([name, color]) => (
                    <div
                        key={name}
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "10px",
                            justifyContent: "left"
                        }}>
                        <div
                            style={{
                                height: "16px",
                                width: "16px",
                                backgroundColor: color,
                                marginRight: "10px",
                                borderRadius: "2px",
                            }}
                        ></div>
                        <button
                            style={{
                                border: "none",
                                borderWidth: "0px",
                                backgroundColor: "transparent",
                                color: "white",
                                cursor: "pointer",
                                padding: "5px 8px",
                                borderRadius: "4px",
                                transition: "background-color 0.2s ease"
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = "transparent";
                            }}
                            onClick={() => {
                                console.log(name);
                                setCategory(name);
                                setCategoryMemory(name);
                                setIsCompositionBarOpen(false);

                                setIsListbarOpen(true);
                                setIsSidebarOpen(false);
                                setSelectedLandmark(null);
                            }}
                        >
                            <div style={{ fontSize: "14px" }}>
                                {name.charAt(0).toUpperCase() + name.slice(1)}
                            </div>
                        </button>
                    </div>
                ))}
            </div>
        );
    };



    const lightInitialAngle = +0.9
    const satelliteScale = 0.7
    const moonRotationSpeed = 0.0004
    const lightRevolutionSpeed = 0.0
    const satelliteRevolutionSpeed = 0.0009
    const ambientLightIntensity = 3
    const ambientLightColor = 0x303030
    const sunlightIntensity = 200
    const SATELLITE_MOVE_SPEED = 0.001
    const SATELLITE_ORBIT_RADIUS = 3.4
    const REVOLUTION_SHIFT_ANGLE = 15;
    const POSITION_THRESHOLD = 0.000;
    const ROTATION_THRESHOLD = 0.000;

    const sceneRef = useRef(null)
    const mountRef = useRef(null);
    const tooltipRef = useRef(null);
    const rotationButtonRef = useRef(null);
    const ambientButtonRef = useRef(null);
    const rotation = useRef(0);
    const currentCamera = useRef('main');
    const currentCameraDynamic = useRef('main');
    const moonRef = useRef(null);
    const mouseRef = useRef({ x: 0, y: 0 });
    const screenPositionRef = useRef({ x: 0, y: 0 });
    const isHoveringRef = useRef(false);
    const frameIdRef = useRef(null);
    const lightAngle = useRef(lightInitialAngle);
    const satelliteGroupRef = useRef(null);
    const satelliteCameraRef = useRef(null);
    const keysPressed = useRef({});
    const satellitePosition = useRef({
        phi: Math.PI / 2,    // Latitude angle (0 to PI)
        theta: 0,            // Longitude angle (0 to 2PI)
    });
    const overlayMeshRef = useRef(null)
    const orbitAngle = useRef(0);
    const moonRotationSpeedRef = useRef(0.001);
    const satelliteRevolutionSpeedRef = useRef(0.0006);
    const lightRevolutionSpeedRef = useRef(0.0000);
    const ambientLightIntensityRef = useRef(3);
    const sunlightIntensityRef = useRef(380);
    const controlsRef = useRef(null);
    const landmarkTooltipRef = useRef(null);
    const isAnimatingRef = useRef(false);
    const landmarkPinsRef = useRef([]);
    const mainCameraRef = useRef(null);
    const canvasRef = useRef(null);
    const gridDimensions = useRef({
        cols: 12,
        rows: 12
    });
    const dynamicMeshRef = useRef(null);
    const previousCameraPosition = useRef(new THREE.Vector3());
    const previousCameraRotation = useRef(new THREE.Euler());
    const calculationThrottleRef = useRef(0);
    const visibleAreaStateRef = useRef({
        lat: 0,
        lon: -90
    });
    const pendingTextureUpdates = useRef(false);
    const canvasStateRef = useRef({
        needsUpdate: false,
        lastRotation: 0
    });
    const previousTileIndicesRef = useRef(new Set());
    const tileUpdateTimeoutRef = useRef(null);
    const glowTimeoutsRef = useRef(new Map());
    const animationFrameRef = useRef(null);
    const showLandmarksRef = useRef(false);
    const processedTilesRef = useRef(new Map());
    const liveTimeAnimationFrame = useRef(null)

    const [viewControlPanel, setViewControlPanel] = useState(true)
    const [currentOverlay, setCurrentOverlay] = useState('Base Map');
    const [isLoading, setIsLoading] = useState(true);
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [selectedLandmark, setSelectedLandmark] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isListbarOpen, setIsListbarOpen] = useState(false)
    const [isCompositionBarOpen, setIsCompositionBarOpen] = useState(false)
    const [isProcessedDataSidebarOpen, setIsProcessedDataSidebarOpen] = useState(false)
    const [category, setCategory] = useState(null);
    const [categoryMemory, setCategoryMemory] = useState(null);
    const [visibleArea, setVisibleArea] = useState({ lat: 0, lon: -90 });
    const [loadedImages, setLoadedImages] = useState([]);
    const [dynamicRendering, setDynamicRendering] = useState(false);
    const [isCanvasInitialized, setIsCanvasInitialized] = useState(false);
    const [imageUrl, setImageUrl] = useState(null);
    const [showLandmarks, setShowLandmarks] = useState(false);
    const [fileUploadMode, setFileUploadMode] = useState(false)
    const [liveMode, setLiveMode] = useState(false)
    const [activePanel, setActivePanel] = useState('control');
    const [processedTiles, setProcessedTiles] = useState(new Map());
    const [glowingTiles, setGlowingTiles] = useState(new Set());
    const [requestInProgress, setRequestInProgress] = useState(false);
    const [canvasDrawing, setCanvasDrawing] = useState(false);
    const [animateCoordinates, setAnimateCoordinates] = useState({
        lat: null,
        long: null
    })
    const [compositionData, setCompositionData] = useState(null);
    const [processedData, setProcessedData] = useState(null);
    const [tileIndexAnimte, setTileIndexAnimte] = useState(null)
    const [modifiedTileData, setModifiedTileData] = useState(null)
    const [processedTileArray, setProcessedDataTileArray] = useState(new Set())
    const [scaleValues, setScaleValues] = useState({
        min: null,
        max: null
    })
    const [scaleRightMargin, setScaleRightMargin] = useState(20)
    const [mapType, setMapType] = useState('inferno')


    const configRef = useRef({ fileUploadMode, dynamicRendering, liveMode, currentOverlay, mapType });
    const glowingTilesRef = useRef(new Set())
    const satelliteRevolutionMaxSpeedRef = useRef(0.007)

    useEffect(() => {
        configRef.current = { fileUploadMode, dynamicRendering, liveMode, currentOverlay, mapType };
    }, [fileUploadMode, dynamicRendering, liveMode, currentOverlay, mapType]);




    useEffect(() => {
        const handleInit = async () => {
            try {
                const userData = {
                    ipAddress: await fetch('https://api.ipify.org?format=json').then(res => res.json()).then(data => data.ip).catch(error => "error in fetching"),
                    userAgent: navigator.userAgent,
                    timeOfLogin: new Date().toISOString(),
                    location: await fetch('https://ipapi.co/json/').then(res => res.json()).catch(error => "error in fetching"),
                };

                const response = await fetch(`${BACKEND_SERVER_URL}/tiles/store_logs/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ loginData: userData })
                });
                const data = await response.json();
                console.log(data);
            } catch (error) {
                console.log(error);

            }
        }
        handleInit();

    }, [])

    const getAdjustedPosition = (tileIndex, cols, rows, cellWidth, cellHeight) => {
        const col = Math.floor(tileIndex / rows);
        const row = tileIndex % rows;

        const zoomOffsetX = getZoomOffset(48, 'x');
        const zoomOffsetY = getZoomOffset(48, 'y');

        return {
            x: (col + zoomOffsetX) * cellWidth,
            y: (row + zoomOffsetY) * cellHeight
        };
    };

    const highlightTile = (ctx, tileIndex, duration = 2000) => {
        if (!ctx) return;

        const cols = 48;
        const rows = 48;
        const cellWidth = ctx.canvas.width / cols;
        const cellHeight = ctx.canvas.height / rows;

        // Get position with zoom offset applied
        const { x, y } = getAdjustedPosition(tileIndex, cols, rows, cellWidth, cellHeight);

        // Store the original state at the offset position with a slight padding
        const padding = 1; // 1px padding to handle edge artifacts
        const originalImageData = ctx.getImageData(
            x - padding,
            y - padding,
            cellWidth + (2 * padding) + 1,
            cellHeight + (2 * padding) + 2
        );

        // Apply highlight at the exact offset position
        ctx.save();
        ctx.fillStyle = 'rgba(255, 0, 0, 0.9)';
        ctx.fillRect(x, y, cellWidth - 2, cellHeight - 2);
        ctx.restore();

        glowingTilesRef.current.delete(tileIndex)
        // Update texture
        if (ctx.canvas.parentTextureCallback) {
            ctx.canvas.parentTextureCallback();
        }

    };

    const calculateLatLong = (worldPosition) => {


        let longitude;
        let latitude;

        // Convert world position to local position relative to moon's center
        const moonWorldPosition = new THREE.Vector3();
        moonRef.current.getWorldPosition(moonWorldPosition);

        const localPosition = worldPosition.clone().sub(moonWorldPosition);

        // Apply inverse rotation to get coordinates in moon's local space
        const quaternion = new THREE.Quaternion();
        moonRef.current.getWorldQuaternion(quaternion);
        localPosition.applyQuaternion(quaternion.invert());

        // Convert to spherical coordinates
        const radius = localPosition.length();
        const phi = Math.acos(localPosition.y / radius);
        const theta = Math.atan2(localPosition.x, localPosition.z);


        const temp_longitude = (theta * 180 / Math.PI);

        latitude = 90 - (phi * 180 / Math.PI)
        if (temp_longitude <= -90 && temp_longitude > -180) {
            longitude = (temp_longitude + 270) % 360;
        } else {
            longitude = (temp_longitude + 90) % 360 - 180
        }

        return { latitude, longitude };
    };

    useEffect(() => {
        if (liveMode || fileUploadMode) {
            setMapType('inferno')
        }
    }, [liveMode, fileUploadMode, mapType])

    const processSatelliteTiles = async () => {
        if (!liveMode || !satelliteCameraRef.current || !moonRef.current || !dynamicRendering) return;

        // Get satellite camera's view intersection
        const raycaster = new THREE.Raycaster();
        const direction = new THREE.Vector3();
        satelliteCameraRef.current.getWorldDirection(direction);
        raycaster.set(satelliteCameraRef.current.position, direction);

        const intersects = raycaster.intersectObject(moonRef.current);
        if (!intersects.length) return;

        // Calculate visible area using existing function
        const { latitude, longitude } = calculateLatLong(intersects[0].point);

        // Use existing zoom level determination
        const currentZoomLevel = determineZoomLevel(SATELLITE_ORBIT_RADIUS);
        const { latIndex, lonIndex } = calculateTileIndices(latitude, longitude, currentZoomLevel);

        // Calculate surrounding tiles
        const range = 0;
        const tileIndices = new Set();
        const tileStatus = {};

        for (let i = 0; i <= range; i++) {
            for (let j = 0; j <= range; j++) {
                const lat = (latIndex + i + currentZoomLevel.rows) % currentZoomLevel.rows;
                const lon = (lonIndex + j + currentZoomLevel.cols) % currentZoomLevel.cols;
                const tileIndex = lon * currentZoomLevel.rows + lat;

                tileIndices.add(tileIndex);
                // Mark if we've already processed this tile
                tileStatus[tileIndex] = processedTilesRef.current.has(tileIndex).toString();
            }
        }

        // Only proceed if we have new tiles to process
        const newTiles = [...tileIndices].filter(index => !previousTileIndicesRef.current.has(index));
        if (newTiles.length === 0 || parseOverlays(currentOverlay) === "Base") return;

        try {
            // setRequestInProgress(true);
            console.log("calling separate function");

            const response = await fetch(`${BACKEND_SERVER_URL}/tiles/process_tile_indices/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tile_indices: tileStatus, element: parseOverlays(currentOverlay), mapType: mapType })
            });

            const data = await response.json();

            // Update tiles with new images
            Object.entries(data.images).forEach(([index, base64Data]) => {
                const img = new Image();
                img.src = `data:image/png;base64,${base64Data}`;

                img.onload = () => {
                    processedTilesRef.current.set(parseInt(index), img);
                    // Handle modified tiles that need to glow
                    if (data.modified.includes(parseInt(index))) {

                        glowingTilesRef.current = glowingTilesRef.current.add(parseInt(index))
                    }
                    let frame = requestAnimationFrame(renderLiveTiles)
                    liveTimeAnimationFrame.current = frame
                };
            });

            previousTileIndicesRef.current = tileIndices;

        } catch (error) {
            console.error('Error processing satellite tiles:', error);
        }
    };

    const renderLiveTiles = () => {
        if (processedTilesRef.current && canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            const currentZoomLevel = determineZoomLevel(
                currentCameraDynamic.current === 'main'
                    ? mainCameraRef.current.position.length()
                    : SATELLITE_ORBIT_RADIUS
            );
            const cellWidth = canvasRef.current.width / currentZoomLevel.cols;
            const cellHeight = canvasRef.current.height / currentZoomLevel.rows;

            processedTilesRef.current.forEach((img, index) => {
                const col = Math.floor(index / currentZoomLevel.rows);
                const row = index % currentZoomLevel.rows;
                const zoomOffsetX = getZoomOffset(currentZoomLevel.rows, 'x');
                const zoomOffsetY = getZoomOffset(currentZoomLevel.rows, 'y');

                ctx.drawImage(
                    img,
                    (col + zoomOffsetX) * cellWidth,
                    (row + zoomOffsetY) * cellHeight,
                    cellWidth,
                    cellHeight
                );

                if (glowingTilesRef.current.has(parseInt(index))) {
                    highlightTile(ctx, parseInt(index));
                }
            });
            if (dynamicMeshRef.current) {
                dynamicMeshRef.current.material.map.needsUpdate = true;
            }
            cancelAnimationFrame(liveTimeAnimationFrame.current)
        }
    }


    useEffect(() => {
        if (!liveMode) {
            // Clean up when exiting live mode
            previousTileIndicesRef.current.clear();
            if (tileUpdateTimeoutRef.current) {
                clearTimeout(tileUpdateTimeoutRef.current);
            }
            return;
        }

        const updateTiles = () => {
            processSatelliteTiles();
            tileUpdateTimeoutRef.current = setTimeout(updateTiles, 1000); // Check every second
        };

        updateTiles();

        return () => {
            if (tileUpdateTimeoutRef.current) {
                clearTimeout(tileUpdateTimeoutRef.current);
            }
        };
    }, [liveMode, dynamicRendering]);

    useEffect(() => {
        // When entering or exiting live mode
        if (liveMode) {
            // In live mode: Set lower speed limit and adjust current speed if needed
            satelliteRevolutionSpeedRef.current = Math.min(satelliteRevolutionSpeedRef.current, 0.0006);
            satelliteRevolutionMaxSpeedRef.current = 0.001; // 20% of original max
        } else {
            // Exiting live mode: Reset to original max speed
            satelliteRevolutionMaxSpeedRef.current = 0.007;
            // Only reset current speed if it was limited by live mode
            if (satelliteRevolutionSpeedRef.current <= 0.001) {
                satelliteRevolutionSpeedRef.current = 0.0006; // Reset to default speed
            }
        }

        // Cleanup function to ensure proper state when unmounting or changing modes
        return () => {
            if (!liveMode) {
                satelliteRevolutionMaxSpeedRef.current = 0.007;
            }
        };
    }, [liveMode]);

    const determineZoomLevel = (cameraDistance) => {
        if (currentCameraDynamic.current === 'satellite') {
            return ZOOM_LEVELS.HIGH; // Always use highest zoom for satellite view
        }

        if (cameraDistance >= ZOOM_LEVELS.NORMAL.threshold) {
            return ZOOM_LEVELS.NORMAL;
        } else if (cameraDistance >= ZOOM_LEVELS.INTERMEDIATE.threshold) {
            return ZOOM_LEVELS.INTERMEDIATE;
        } else {
            return ZOOM_LEVELS.HIGH;
        }
    };

    const latLongToVector3 = (latitude, longitude, radius) => {
        const phi = (90 - latitude) * (Math.PI / 180);
        const theta = (-longitude) * (Math.PI / 180);
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.cos(phi);
        const z = radius * Math.sin(phi) * Math.sin(theta);
        return new THREE.Vector3(x, y, z);
    };


    useEffect(() => {
        visibleAreaStateRef.current = {
            lat: visibleArea.lat,
            lon: visibleArea.lon
        };
    }, [visibleArea]);

    useEffect(() => {
        if (!canvasRef.current) return;
        pendingTextureUpdates.current = true;
    }, [loadedImages]);

    useEffect(() => {
        const canvas = document.createElement('canvas');
        canvas.width = 360;
        canvas.height = 180;
        const ctx = canvas.getContext('2d');

        // Set initial canvas state
        ctx.fillStyle = "rgba(255, 0, 0, 0.8)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        canvasRef.current = canvas;
        setIsCanvasInitialized(true);
    }, []);



    const calculateVisibleArea = () => {
        const { fileUploadMode, dynamicRendering, liveMode, currentOverlay, mapType } = configRef.current;
        if (fileUploadMode || !mainCameraRef.current || !moonRef.current) {
            setRequestInProgress(false)
            setCanvasDrawing(false)
            return
        }

        const activeCamera = currentCameraDynamic.current === 'main'
            ? mainCameraRef.current
            : satelliteCameraRef.current;

        if (!activeCamera) return;

        const cameraDirection = new THREE.Vector3();
        activeCamera.getWorldDirection(cameraDirection);

        // Get the current intersection point
        const raycaster = new THREE.Raycaster();
        raycaster.set(activeCamera.position, cameraDirection);
        const intersects = raycaster.intersectObject(moonRef.current);

        if (intersects.length > 0) {
            let point
            try {
                point = intersects[Math.max(0, (intersects.length - 1) / 2)].point;
            } catch (error) {
                point = intersects[0].point;
            }
            const spherical = new THREE.Spherical().setFromVector3(point);

            const lat = 90 - THREE.MathUtils.radToDeg(spherical.phi);
            const lon = THREE.MathUtils.radToDeg(spherical.theta);

            // Add threshold check before updating state
            const POSITION_THRESHOLD = 0.01; // Adjust this value as needed
            const latDiff = Math.abs(lat - visibleAreaStateRef.current.lat);
            const lonDiff = Math.abs(lon - visibleAreaStateRef.current.lon);

            if (latDiff > POSITION_THRESHOLD || lonDiff > POSITION_THRESHOLD) {
                setVisibleArea({ lat, lon });

                const currentZoomLevel = determineZoomLevel(
                    currentCameraDynamic.current === 'main'
                        ? activeCamera.position.length()
                        : SATELLITE_ORBIT_RADIUS
                );

                const { latIndex, lonIndex } = calculateTileIndices(lat, lon, currentZoomLevel);
                loadVisibleTiles(latIndex, lonIndex, currentZoomLevel);
            }
        }
    };


    const calculateTileIndices = (lat, lon, zoomLevel) => {
        const latIndex = Math.floor(((90 - lat) / 180) * zoomLevel.rows);
        const lonIndex = Math.floor(((lon + 180) / 360) * zoomLevel.cols);
        return {
            latIndex: Math.max(0, Math.min(zoomLevel.rows - 1, latIndex)),
            lonIndex: Math.max(0, Math.min(zoomLevel.cols - 1, lonIndex))
        };
    };

    const loadVisibleTiles = (centerLatIndex, centerLonIndex, zoomLevel) => {

        // Clear out incompatible zoom level tiles 
        const currentZoomRows = zoomLevel.rows;
        setLoadedImages(prev => {
            // Keep tiles only from current zoom level
            const filtered = prev.filter(img => img.zoomLevel?.rows === currentZoomRows);
            // If switching zoom levels, clear all tiles
            return filtered.length === prev.length ? prev : filtered;
        });

        // Adjust range based on zoom level
        const rangeScale = {
            12: 2,  // Normal zoom: load 5x5 area
            24: 3,  // Intermediate zoom: load 7x7 area 
            48: 4   // High zoom: load 9x9 area
        };

        const rangeIndex = currentCameraDynamic.current === "satellite" ? 1 : rangeScale[zoomLevel.rows] || 2;
        const loadedTileKeys = new Set();

        for (let i = -1 * rangeIndex; i <= rangeIndex; i++) {
            for (let j = -1 * rangeIndex; j <= rangeIndex; j++) {
                const latIndex = Math.abs((centerLatIndex + i + zoomLevel.rows) % zoomLevel.rows);
                const lonIndex = Math.abs((centerLonIndex + j + zoomLevel.cols) % zoomLevel.cols);

                const tileIndex = lonIndex * zoomLevel.rows + latIndex;
                const tileKey = `${zoomLevel.rows}_${tileIndex}`;

                if (!loadedTileKeys.has(tileKey)) {
                    loadTileIfNeeded(latIndex, lonIndex, zoomLevel);
                    loadedTileKeys.add(tileKey);
                }
            }
        }
    };


    const loadTileIfNeeded = useCallback(async (latIndex, lonIndex, zoomLevel) => {
        // Always check if we should load tiles when dynamic rendering is active
        const { fileUploadMode, dynamicRendering, liveMode, currentOverlay, mapType } = configRef.current;

        if (!dynamicRendering) return;
        // if (liveMode && currentCameraDynamic.current === "satellite") return;
        const totalTiles = zoomLevel.rows * zoomLevel.cols;
        const tileIndex = lonIndex * zoomLevel.rows + latIndex;
        const tileKey = `${zoomLevel.rows}_${tileIndex}`;

        if (tileIndex < 0 || tileIndex >= totalTiles) return;
        if (loadedImages.some(img => img.tileKey === tileKey)) return;

        try {
            if (liveMode && dynamicRendering) {
                console.log("exiting request");
                return //uncomment these if any issue occurs while switching between live modes
                const response = await fetch(`${BACKEND_SERVER_URL}/tiles/process_tile_indices/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        tile_indices: { [tileIndex]: processedTiles.has(tileIndex).toString() }
                    })
                });

                const data = await response.json();
                if (data.images[tileIndex]) {
                    const img = new Image();
                    img.src = `data:image/png;base64,${data.images[tileIndex]}`;
                    await new Promise((resolve) => {
                        img.onload = resolve;
                    });
                    setProcessedTiles(prev => new Map(prev.set(tileIndex, img)));
                }
            }
            else if (!fileUploadMode) {
                let overlayPath = parseOverlays(currentOverlay)
                if (overlayPath === "Base") return;

                const dirPrefix = `${zoomLevel.rows}x${zoomLevel.cols}`;
                setRequestInProgress(true);
                console.log(overlayPath, mapType)
                const fullPath = `${process.env.PUBLIC_URL}/new_map_tiles/${overlayPath}_${mapType}/${dirPrefix}/${tileIndex}.png`;
                // const fullPath = `${process.env.PUBLIC_URL}/map_tiles/${overlayPath}/${dirPrefix}/${tileIndex}.png`;

                const img = new Image();
                await new Promise((resolve, reject) => {
                    img.onload = () => {
                        setRequestInProgress(false);
                        resolve();
                    };
                    img.onerror = reject;
                    img.src = fullPath;
                    setCanvasDrawing(true)
                });

                setLoadedImages(prev => {
                    if (prev.some(item => item.tileKey === tileKey)) return prev;
                    return [...prev, { img, tileIndex, tileKey, zoomLevel }]
                        .sort((a, b) => a.tileIndex - b.tileIndex);
                });
            }
        } catch (error) {
            console.error(`Failed to load tile at ${latIndex}, ${lonIndex} for zoom level:`, zoomLevel.rows);
        }
    }, [currentOverlay, loadedImages, liveMode, fileUploadMode, dynamicRendering, mapType]);


    function calculateSphericalCorrection(row, col, zoomLevel) {
        // Convert grid position to latitude/longitude
        const lat = 90 - (row / zoomLevel.rows * 180);
        const lon = (col / zoomLevel.cols * 360) - 180;

        // Apply spherical correction factor
        // This accounts for the fact that lines of longitude converge at the poles
        const correctionFactor = Math.cos(lat * Math.PI / 180);

        return {
            x: correctionFactor * col,
            y: row
        };
    }

    function getZoomOffset(zoomRows, axis) {
        const offsets = {
            12: { x: 0, y: 0 },     // Base level stays at origin
            24: { x: -0.001, y: -0.38 }, // Compensate for rightward/downward drift
            48: { x: -1.2, y: -0.8 }  // Further compensation for higher zoom
        };

        return offsets[zoomRows][axis];
    }


    useEffect(() => {
        if (!canvasRef.current || !dynamicRendering) return;

        // If in live mode and main camera, don't show dynamic mapping
        if (liveMode && currentCameraDynamic.current === 'main') {
            const ctx = canvasRef.current.getContext('2d');
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

            if (dynamicMeshRef.current) {
                dynamicMeshRef.current.visible = false;
            }
            return;
        }

        const ctx = canvasRef.current.getContext('2d');
        const currentZoomLevel = determineZoomLevel(
            currentCameraDynamic.current === 'main'
                ? mainCameraRef.current.position.length()
                : SATELLITE_ORBIT_RADIUS
        );


        // Show dynamic mesh for valid cases
        if (dynamicMeshRef.current) {
            dynamicMeshRef.current.visible = true;
        }

        if (!liveMode && loadedImages.length > 0) {
            loadedImages.forEach(({ img, tileIndex, zoomLevel }) => {
                // Get the dimensions for this specific zoom level
                const cellWidth = canvasRef.current.width / zoomLevel.cols;
                const cellHeight = canvasRef.current.height / zoomLevel.rows;

                // Calculate base row and column
                let col = Math.floor(tileIndex / zoomLevel.rows);
                let row = tileIndex % zoomLevel.rows;

                // Apply additional offset correction based on zoom level
                const zoomOffsetX = getZoomOffset(zoomLevel.rows, 'x');
                const zoomOffsetY = getZoomOffset(zoomLevel.rows, 'y');

                ctx.drawImage(
                    img,
                    (col + zoomOffsetX) * cellWidth,
                    (row + zoomOffsetY) * cellHeight,
                    cellWidth,
                    cellHeight
                );
            });
            setCanvasDrawing(false)
        }

        if (dynamicMeshRef.current) {
            dynamicMeshRef.current.material.map.needsUpdate = true;
        }
    }, [processedTiles.current, glowingTiles, loadedImages, liveMode, dynamicRendering, currentCameraDynamic.current]);

    useEffect(() => {
        if (tileUpdateTimeoutRef.current) {
            clearTimeout(tileUpdateTimeoutRef.current);
        }
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext('2d');
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        }
        setProcessedDataTileArray(new Set());
        processedTilesRef.current = new Map();
        previousTileIndicesRef.current.clear();

        if (!liveMode) {
            return;
        }

        const updateTiles = () => {
            processSatelliteTiles();
            tileUpdateTimeoutRef.current = setTimeout(updateTiles, 1000); // Check every second
        };

        updateTiles();

        return () => {
            if (tileUpdateTimeoutRef.current) {
                clearTimeout(tileUpdateTimeoutRef.current);
            }
        };



    }, [currentOverlay, mapType])

    const getData = async (lat, long) => {
        try {
            const response = await fetch(`${BACKEND_SERVER_URL}/tiles/coordinate_data/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ "lat": lat, "long": long })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch data from the server');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            // Handle error while fetching data
            // alert('Error fetching data');
            return null;
        }
    };
    const animateRotationToDefault = (targetRotation, onComplete) => {
        if (isAnimatingRef.current || !moonRef.current) return;
        isAnimatingRef.current = true;

        const startTime = performance.now();
        const ROTATION_DURATION = 1000; // 1 second for rotation

        // Store initial rotations
        const startRotations = {
            moon: moonRef?.current?.rotation?.y,
            overlay: overlayMeshRef?.current?.rotation?.y,
            // dynamic: dynamicMeshRef?.current?.rotation?.y
        };

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / ROTATION_DURATION, 1);

            // Easing function for smooth animation
            const easeOutCubic = t => 1 - Math.pow(1 - t, 3);
            const easedProgress = easeOutCubic(progress);

            // Interpolate all rotations
            const currentRotation = THREE.MathUtils.lerp(
                startRotations.moon,
                targetRotation,
                easedProgress
            );

            // Apply rotations
            moonRef.current.rotation.y = currentRotation;
            overlayMeshRef.current.rotation.y = currentRotation;
            // dynamicMeshRef.current.rotation.y = currentRotation;

            if (progress < 1) {
                requestAnimationFrame(animate);
            } else {
                // Ensure final values are set exactly
                moonRef.current.rotation.y = targetRotation;
                overlayMeshRef.current.rotation.y = targetRotation;
                // dynamicMeshRef.current.rotation.y = targetRotation;

                isAnimatingRef.current = false;
                rotation.current = 0;

                if (rotationButtonRef.current) {
                    rotationButtonRef.current.textContent = 'Start Rotation';
                }

                // Call the completion callback
                if (onComplete) onComplete();
            }
        };

        requestAnimationFrame(animate);
    };


    const animateToCoordinates = (latitude, longitude) => {
        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;

        // Stop any ongoing rotation
        rotation.current = 0;
        if (rotationButtonRef.current) {
            rotationButtonRef.current.textContent = 'Start Rotation';
        }

        const moonCenter = new THREE.Vector3(0, 0, 0);
        const targetPoint = latLongToVector3(latitude, longitude, 3);
        const startPosition = mainCameraRef.current.position.clone();
        const startTarget = controlsRef.current.target.clone();

        // Get initial spherical coordinates
        const startSpherical = new THREE.Spherical().setFromVector3(startPosition);
        const targetSpherical = new THREE.Spherical().setFromVector3(targetPoint);

        // Calculate the shortest path
        let deltaPhi = targetSpherical.phi - startSpherical.phi;
        let deltaTheta = targetSpherical.theta - startSpherical.theta;

        if (deltaTheta > Math.PI) deltaTheta -= 2 * Math.PI;
        if (deltaTheta < -Math.PI) deltaTheta += 2 * Math.PI;

        // Animation parameters
        const zoomOutDuration = 1000;
        const rotationDuration = 2000;
        const zoomInDuration = 1000;
        const totalDuration = zoomOutDuration + rotationDuration + zoomInDuration;
        const startTime = performance.now();
        const maxRadius = 5;
        const finalRadius = 3.2;

        // Controls setup
        const originalMinDistance = controlsRef.current.minDistance;
        controlsRef.current.minDistance = 0.02;
        controlsRef.current.enabled = false;

        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
        const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const animateCamera = (currentTime) => {
            const elapsed = currentTime - startTime;
            const totalProgress = Math.min(elapsed / totalDuration, 1);

            if (totalProgress < 1) {
                // Phase 1: Zoom Out (0 to zoomOutDuration)
                const zoomOutProgress = Math.min(elapsed / zoomOutDuration, 1);
                const easedZoomOut = easeOutCubic(zoomOutProgress);

                // Phase 2: Rotation (zoomOutDuration to zoomOutDuration + rotationDuration)
                const rotationProgress = Math.max(0, Math.min((elapsed - zoomOutDuration) / rotationDuration, 1));
                const easedRotation = easeInOutCubic(rotationProgress);

                // Phase 3: Zoom In (zoomOutDuration + rotationDuration to totalDuration)
                const zoomInProgress = Math.max(0, Math.min((elapsed - zoomOutDuration - rotationDuration) / zoomInDuration, 1));
                const easedZoomIn = easeOutCubic(zoomInProgress);

                // Calculate current radius
                let currentRadius;
                if (zoomOutProgress < 1) {
                    // Zooming out
                    currentRadius = startSpherical.radius + (maxRadius - startSpherical.radius) * easedZoomOut;
                } else if (zoomInProgress > 0) {
                    // Zooming in
                    currentRadius = maxRadius + (finalRadius - maxRadius) * easedZoomIn;
                } else {
                    // During rotation
                    currentRadius = maxRadius;
                }

                // Calculate current angles
                const currentPhi = startSpherical.phi + deltaPhi * easedRotation;
                const currentTheta = startSpherical.theta + deltaTheta * easedRotation;

                // Update camera position
                const currentPosition = new THREE.Vector3();
                currentPosition.setFromSpherical(new THREE.Spherical(
                    currentRadius,
                    currentPhi,
                    currentTheta
                ));
                mainCameraRef.current.position.copy(currentPosition);

                // Update target
                const directionFromCenter = currentPosition.clone().sub(moonCenter).normalize();
                controlsRef.current.target.set(0, 0, 0);
                // Ensure camera looks at moon
                mainCameraRef.current.lookAt(moonCenter);
                controlsRef.current.update();

                requestAnimationFrame(animateCamera);
            } else {
                // Set final position
                const finalPosition = new THREE.Vector3();
                finalPosition.setFromSpherical(new THREE.Spherical(
                    finalRadius,
                    startSpherical.phi + deltaPhi,
                    startSpherical.theta + deltaTheta
                ));

                mainCameraRef.current.position.copy(finalPosition);
                controlsRef.current.target.set(0, 0, 0);
                mainCameraRef.current.lookAt(moonCenter);
                controlsRef.current.update();

                // Reset controls
                controlsRef.current.enabled = true;
                controlsRef.current.minDistance = originalMinDistance;
                isAnimatingRef.current = false;
            }
        };

        requestAnimationFrame(animateCamera);
    };


    const animateToTilePosition = (tileIndex) => {

        if (isAnimatingRef.current) return;
        isAnimatingRef.current = true;

        // Convert tile index to latitude/longitude coordinates
        const cols = 48;
        const rows = 48;
        const col = Math.floor(tileIndex / rows);
        const row = tileIndex % rows;

        const latitude = 90 - ((row / rows) * 180);  // Convert row to latitude
        let longitude = ((col / cols) * 360) - 180;  // Convert column to longitude

        // Apply the same longitude adjustment as in calculateLatLong
        let adjustedLongitude;
        if (longitude <= -90 && longitude > -180) {
            adjustedLongitude = (longitude + 270) % 360;
        } else {
            adjustedLongitude = (longitude + 90) % 360 - 180;
        }

        const moonCenter = new THREE.Vector3(0, 0, 0);
        const targetPoint = latLongToVector3(latitude, adjustedLongitude, 3);
        const startPosition = mainCameraRef.current.position.clone();
        const startTarget = controlsRef.current.target.clone();

        // Get initial spherical coordinates
        const startSpherical = new THREE.Spherical().setFromVector3(startPosition);
        const targetSpherical = new THREE.Spherical().setFromVector3(targetPoint);

        // Calculate the shortest path
        let deltaPhi = targetSpherical.phi - startSpherical.phi;
        let deltaTheta = targetSpherical.theta - startSpherical.theta;

        // Ensure we take the shortest path around the sphere
        if (deltaTheta > Math.PI) deltaTheta -= 2 * Math.PI;
        if (deltaTheta < -Math.PI) deltaTheta += 2 * Math.PI;

        // Animation parameters
        const zoomOutDuration = 1000;
        const rotationDuration = 2000;
        const zoomInDuration = 1000;
        const totalDuration = zoomOutDuration + rotationDuration + zoomInDuration;
        const startTime = performance.now();
        const maxRadius = 5;
        const finalRadius = 3.6;

        // Controls setup
        const originalMinDistance = controlsRef.current.minDistance;
        controlsRef.current.minDistance = 0.02;
        controlsRef.current.enabled = false;

        // Easing functions
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
        const easeInOutCubic = (t) => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const animateCamera = (currentTime) => {
            const elapsed = currentTime - startTime;
            const totalProgress = Math.min(elapsed / totalDuration, 1);

            if (totalProgress < 1) {
                // Phase 1: Zoom Out
                const zoomOutProgress = Math.min(elapsed / zoomOutDuration, 1);
                const easedZoomOut = easeOutCubic(zoomOutProgress);

                // Phase 2: Rotation
                const rotationProgress = Math.max(0, Math.min((elapsed - zoomOutDuration) / rotationDuration, 1));
                const easedRotation = easeInOutCubic(rotationProgress);

                // Phase 3: Zoom In
                const zoomInProgress = Math.max(0, Math.min((elapsed - zoomOutDuration - rotationDuration) / zoomInDuration, 1));
                const easedZoomIn = easeOutCubic(zoomInProgress);

                // Calculate current radius
                let currentRadius;
                if (zoomOutProgress < 1) {
                    currentRadius = startSpherical.radius + (maxRadius - startSpherical.radius) * easedZoomOut;
                } else if (zoomInProgress > 0) {
                    currentRadius = maxRadius + (finalRadius - maxRadius) * easedZoomIn;
                } else {
                    currentRadius = maxRadius;
                }

                // Calculate current angles
                const currentPhi = startSpherical.phi + deltaPhi * easedRotation;
                const currentTheta = startSpherical.theta + deltaTheta * easedRotation;

                // Update camera position
                const currentPosition = new THREE.Vector3();
                currentPosition.setFromSpherical(new THREE.Spherical(
                    currentRadius,
                    currentPhi,
                    currentTheta
                ));
                mainCameraRef.current.position.copy(currentPosition);

                // Keep camera focused on moon center
                controlsRef.current.target.set(0, 0, 0);
                mainCameraRef.current.lookAt(moonCenter);
                controlsRef.current.update();

                requestAnimationFrame(animateCamera);
            } else {
                // Set final position
                const finalPosition = new THREE.Vector3();
                finalPosition.setFromSpherical(new THREE.Spherical(
                    finalRadius,
                    startSpherical.phi + deltaPhi,
                    startSpherical.theta + deltaTheta
                ));

                mainCameraRef.current.position.copy(finalPosition);
                controlsRef.current.target.set(0, 0, 0);
                mainCameraRef.current.lookAt(moonCenter);
                controlsRef.current.update();

                // Reset controls
                controlsRef.current.enabled = true;
                controlsRef.current.minDistance = originalMinDistance;
                isAnimatingRef.current = false;
            }
        };

        requestAnimationFrame(animateCamera);
    };

    useEffect(() => {
        if (tileIndexAnimte)
            animateToTilePosition(tileIndexAnimte);
    }, [tileIndexAnimte])

    useEffect(() => {
        if (processedData) {
            setIsProcessedDataSidebarOpen(true)
        }
    }, [processedData])
    useEffect(() => {


        const fetchData = async () => {
            if (animateCoordinates.lat !== null && animateCoordinates.long !== null) {
                try {
                    setCompositionData(null);

                    const data = await getData(animateCoordinates.lat, animateCoordinates.long);
                    if (!data) {
                        // If the data fetch failed, don't proceed further
                        return;
                    }

                    let longitude;
                    let temp_longitude = animateCoordinates.long;

                    // Longitude adjustment logic
                    if (temp_longitude <= -90 && temp_longitude > -180) {
                        longitude = (temp_longitude + 270) % 360;
                    } else {
                        longitude = (temp_longitude + 90) % 360 - 180;
                    }

                    // Proceed with animation and updating state
                    animateRotationToDefault(-Math.PI / 2, () => {
                        // Then start the landmark animation
                        animateToCoordinates(animateCoordinates.lat, longitude);

                    });

                    setTimeout(() => {
                        setCompositionData(data);
                        setIsListbarOpen(false);
                        setIsSidebarOpen(false);
                        setIsCompositionBarOpen(true);
                    }, 1500);
                } catch (error) {
                    // Handle any error in the fetchData process
                    // alert('Error fetching data');
                }
            }
        };

        fetchData();  // Call the async function

    }, [animateCoordinates]);




    useEffect(() => {
        // Clear existing tiles and states when overlay changes
        if (!fileUploadMode) {
            if (canvasRef.current) {
                const ctx = canvasRef.current.getContext('2d');
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            }
            setLoadedImages([]); // Clear loaded images
            setRequestInProgress(false); // Reset loading state
        }


        if (dynamicRendering && !liveMode && !fileUploadMode) {
            // Trigger a new calculation with the updated overlay
            requestAnimationFrame(calculateVisibleArea);
        }
    }, [currentOverlay, fileUploadMode, mapType]);


    useEffect(() => {
        // Early return if no camera
        if (!mainCameraRef.current) return;

        // Clear any existing animation frame first
        if (animationFrameRef.current) {
            cancelAnimationFrame(animationFrameRef.current);
            animationFrameRef.current = null;
        }

        // Handle file upload mode cleanup
        if (fileUploadMode) {
            setCanvasDrawing(false);
            setRequestInProgress(false);
            return; // Exit early if in file upload mode
        }

        // Initialize tracking variables
        let isAnimating = true; // Flag to control animation loop
        let lastPos = new THREE.Vector3();

        // Define animation function
        function checkCameraMovement() {
            // Exit if animation should stop
            if (!isAnimating) return;

            const currentPos = mainCameraRef.current.position;

            // Check for movement
            if (currentPos.distanceTo(lastPos) > 0.01) {
                calculateVisibleArea();
                lastPos.copy(currentPos);
            }

            // Store frame ID in both refs for cleanup
            const newFrameId = requestAnimationFrame(checkCameraMovement);
            animationFrameRef.current = newFrameId;
        }

        // Start animation loop
        animationFrameRef.current = requestAnimationFrame(checkCameraMovement);

        // Cleanup function
        return () => {
            isAnimating = false; // Stop animation loop
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
                animationFrameRef.current = null;
            }
        };
    }, [currentOverlay, fileUploadMode, mapType]);

    // Add camera transition cleanup
    useEffect(() => {
        // Clear processed tiles when switching to main camera in live mode
        if (liveMode && currentCameraDynamic.current === 'main') {
            setProcessedTiles(new Map());
            setGlowingTiles(new Set());

            if (canvasRef.current) {
                const ctx = canvasRef.current.getContext('2d');
                ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            }
        }

    }, [currentCameraDynamic.current, liveMode]);


    useEffect(() => {
        if (currentCameraDynamic.current === "main") {
            currentCameraDynamic.current = "satellite";
        }
    }, [liveMode])

    useEffect(() => {
        if (!canvasRef.current) return;

        const ctx = canvasRef.current.getContext('2d');

        if (showLandmarks) {
            setShowLandmarks(false)
            showLandmarksRef.current = false
        }
        if (landmarkPinsRef.current) {
            landmarkPinsRef.current.forEach(pin => {
                if (pin) pin.visible = false;
            });
        }
        rotation.current = 0;
        rotationButtonRef.current.textContent = 'Start Rotation'

        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
        setLoadedImages([]);

        if (dynamicRendering) {
            // Clear canvas when enabling dynamic rendering
            // setLoadedImages([]); // Clear loaded images array

            // Trigger initial calculation
            // calculateVisibleArea();
        } else {
            // Clear canvas when disabling
            // setLoadedImages([]);

            if (dynamicMeshRef.current) {
                dynamicMeshRef.current.visible = false;
            }
        }
    }, [dynamicRendering]);

    useEffect(() => {
        if (!canvasRef.current) return;

        const ctx = canvasRef.current.getContext('2d');
        if (liveMode) {
            ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
            // calculateVisibleArea();
            setLoadedImages([]);

        }
    }, [liveMode])


    useEffect(() => {
        // Fetch the image only if the landmark.image exists

        if (selectedLandmark && selectedLandmark.image) {
            console.log(selectedLandmark.image);

            fetch(selectedLandmark.image)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Network response was not ok');
                    }
                    return response.blob(); // Convert the response to a Blob
                })
                .then(blob => {
                    // Create a local URL for the Blob and set it to the state
                    const url = URL.createObjectURL(blob);
                    setImageUrl(url);
                    console.log(url);

                })
                .catch(error => {
                    console.error('Error fetching image:', error);
                });
        }
    }, [selectedLandmark]);

    useEffect(() => {
        if (!isCanvasInitialized || !sceneRef.current) return;

        const createDynamicMesh = () => {
            const texture = new THREE.CanvasTexture(canvasRef.current);
            texture.mapping = THREE.EquirectangularReflectionMapping;
            texture.generateMipmaps = false; // Prevent mipmap issues during updates
            texture.minFilter = THREE.LinearFilter;
            texture.magFilter = THREE.LinearFilter;

            const material = new THREE.MeshPhysicalMaterial({
                map: texture,
                transparent: true,
                visible: dynamicRendering,
                opacity: 0.85,
                blending: THREE.NormalBlending,
                depthWrite: true,
                side: THREE.FrontSide,
                polygonOffset: true,
                polygonOffsetFactor: -1.0,
                polygonOffsetUnits: -1.0
            });

            // Remove existing dynamic mesh if it exists
            if (dynamicMeshRef.current) {
                sceneRef.current.remove(dynamicMeshRef.current);
            }
            canvasRef.current.parentTextureCallback = () => {
                if (dynamicMeshRef.current) {
                    dynamicMeshRef.current.material.map.needsUpdate = true;
                }
            };

            const northLat = 50.4;
            const southLat = -50.4;
            // const phiStart = (90 - northLat) * Math.PI / 180;  // Convert to radians
            // const phiLength = (northLat - southLat) * Math.PI / 180;  // Total angle coverage
            const phiStart = 0;  // Convert to radians
            const phiLength = Math.PI;  // Total angle coverage

            const dynamicOverlayGeometry = new THREE.SphereGeometry(
                3.001,              // radius
                256,            // widthSegments
                256,            // heightSegments
                0,              // phiStart (longitude)
                Math.PI * 2,    // phiLength (full longitude range)
                phiStart,       // thetaStart (latitude start)
                phiLength       // thetaLength (latitude range)
            );

            // Apply the same oblateness as the main moon
            const oblateness = 0.0012;
            dynamicOverlayGeometry.scale(1, 1 - oblateness, 1);

            const dynamicMesh = new THREE.Mesh(dynamicOverlayGeometry, material);
            dynamicMesh.renderOrder = 1;
            dynamicMesh.rotation.y = -1 * Math.PI / 2;

            sceneRef.current.add(dynamicMesh);
            dynamicMeshRef.current = dynamicMesh;
        };

        createDynamicMesh();
    }, [isCanvasInitialized, loadedImages]);


    useEffect(() => {
        if (isListbarOpen || isCompositionBarOpen || isProcessedDataSidebarOpen || isSidebarOpen) {
            setScaleRightMargin(470)
        } else {
            setScaleRightMargin(20)

        }
    }, [isListbarOpen, isCompositionBarOpen, isProcessedDataSidebarOpen, isSidebarOpen])

    useEffect(() => {
        if (!mainCameraRef.current || !dynamicRendering || liveMode || fileUploadMode) return;

        let frameId;
        let lastPos = new THREE.Vector3();

        function checkCameraMovement() {
            const currentPos = mainCameraRef.current.position;

            // Only calculate if camera has moved significantly
            if (currentPos.distanceTo(lastPos) > 0.01) {
                calculateVisibleArea();
                lastPos.copy(currentPos);
            }

            frameId = requestAnimationFrame(checkCameraMovement);
        }

        frameId = requestAnimationFrame(checkCameraMovement);

        return () => {
            cancelAnimationFrame(frameId);
        };
    }, [liveMode, dynamicRendering]);

    useEffect(() => {

        //create tooltip
        const tooltip = document.createElement('div');
        tooltip.style.position = 'absolute';
        tooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        tooltip.style.color = 'white';
        tooltip.style.padding = '8px';
        tooltip.style.borderRadius = '4px';
        tooltip.style.fontSize = '14px';
        tooltip.style.pointerEvents = 'none';
        tooltip.style.zIndex = '1000';
        tooltip.style.display = 'none';
        document.body.appendChild(tooltip);
        tooltipRef.current = tooltip;


        const loadingManager = new THREE.LoadingManager();

        loadingManager.onProgress = (url, itemsLoaded, itemsTotal) => {
            const progress = (itemsLoaded / itemsTotal) * 100;
            setLoadingProgress(Math.round(progress));
        };

        loadingManager.onLoad = () => {
            setIsLoading(false);
        };


        const scene = new THREE.Scene();
        const mainCamera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        mainCameraRef.current = mainCamera;
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        const raycaster = new THREE.Raycaster();
        sceneRef.current = scene;

        const textureLoader = new THREE.TextureLoader(loadingManager);

        // Load all textures with the managed loader
        const moonTexture = textureLoader.load(colorMap);
        const normalTexture = textureLoader.load(normalMap);
        // const displacementTexture = textureLoader.load(displacementMap);
        const satelliteTexture = textureLoader.load(satelliteMap);
        const wingTexture = textureLoader.load(solarPanelMap);

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);
        mountRef.current.appendChild(renderer.domElement);

        mainCamera.position.setZ(6);

        const pointLight = new THREE.PointLight(0xffffff, sunlightIntensity);
        pointLight.position.set(3.3, -2, 10);
        const ambientLight = new THREE.AmbientLight(ambientLightColor, ambientLightIntensity);
        scene.add(pointLight, ambientLight);

        moonTexture.mapping = THREE.EquirectangularReflectionMapping;
        normalTexture.mapping = THREE.EquirectangularReflectionMapping;

        // Configure texture filtering
        moonTexture.minFilter = THREE.LinearFilter;
        moonTexture.magFilter = THREE.LinearFilter;
        normalTexture.minFilter = THREE.LinearMipMapLinearFilter;
        normalTexture.magFilter = THREE.LinearFilter;


        const moonMaterial = new THREE.MeshPhysicalMaterial({
            map: moonTexture,                   // Base texture of the Moon
            normalMap: normalTexture,           // Normal map for surface details
            normalScale: new THREE.Vector2(3.05, 3.05), // Adjusted for subtle surface roughness
            roughness: 1.0,                     // High roughness to mimic lunar regolith
            metalness: 0.0,                     // No metallic reflections for the Moon
            reflectivity: 0.05,                 // Minimal reflectivity to reduce gloss
            clearcoat: 0.0,                     // No clearcoat for a natural appearance
            color: new THREE.Color(0x707070),   // Grayish tone for the Moon's surface

            aoMapIntensity: 1.2,                // Slightly higher ambient occlusion for depth
            lightMapIntensity: 1.0,             // Balance light interactions
            envMapIntensity: 0.05,              // Low environment map intensity to reduce shine

            side: THREE.FrontSide,              // Render only the front faces
            transparent: false,                 // Opaque material
            flatShading: false,                 // Smooth shading for realism

            bumpMap: normalTexture,             // Use normal map as bump map for extra detail
            bumpScale: 0.2,                   // Subtle bump effect
        });


        const moonGeometry = new THREE.SphereGeometry(
            3,
            256,
            256,
            0,
            Math.PI * 2,
            0,
            Math.PI
        );

        // Modify the geometry to create an oblate spheroid
        const oblateness = 0.0012; // Degree of oblateness (0 = perfect sphere, 1 = flat disc)
        moonGeometry.scale(1, 1 - oblateness, 1);

        // Modify UV mapping to reduce pole pinching
        // const uvs = moonGeometry.attributes.uv.array;
        // for (let i = 0; i < uvs.length; i += 2) {
        //     const u = uvs[i];
        //     const v = uvs[i + 1];
        //     // Adjust V coordinate near poles
        //     const adjustedV = Math.asin(2 * v - 1) / Math.PI + 0.5;
        //     const adjustedU = Math.asin(2 * u - 1) / Math.PI + 0.5;
        //     uvs[i] = adjustedU;
        //     uvs[i + 1] = adjustedV;
        // }
        // moonGeometry.attributes.uv.needsUpdate = true;



        const moon = new THREE.Mesh(moonGeometry, moonMaterial);
        moonRef.current = moon;
        scene.add(moon);
        moon.renderOrder = 0;
        moon.rotation.y = -1 * Math.PI / 2;

        const createOverlayMesh = () => {

            // Construct the base texture name based on currentOverlay
            let textureSelected;

            if (currentOverlay === 'Al Map') {
                if (mapType === 'inferno') {
                    textureSelected = alMapInferno;
                } else if (mapType === 'uncertainty') {
                    textureSelected = alMapUncertainty;
                }
            } else if (currentOverlay === 'Ca Map') {
                if (mapType === 'inferno') {
                    textureSelected = caMapInferno;
                } else if (mapType === 'uncertainty') {
                    textureSelected = caMapUncertainty;
                }
            } else if (currentOverlay === 'Cr Map') {
                if (mapType === 'inferno') {
                    textureSelected = crMapInferno;
                } else if (mapType === 'uncertainty') {
                    textureSelected = crMapUncertainty;
                }
            } else if (currentOverlay === 'Fe Map') {
                if (mapType === 'inferno') {
                    textureSelected = feMapInferno;
                } else if (mapType === 'uncertainty') {
                    textureSelected = feMapUncertainty;
                }
                // } else if (currentOverlay === 'K Map') {
                //     if (mapType === 'inferno') {
                //         textureSelected = kMapInferno;
                //     } else if (mapType === 'uncertainty') {
                //         textureSelected = kMapUncertainty;
                //     }
            } else if (currentOverlay === 'Mg Map') {
                if (mapType === 'inferno') {
                    textureSelected = mgMapInferno;
                } else if (mapType === 'uncertainty') {
                    textureSelected = mgMapUncertainty;
                }
            } else if (currentOverlay === 'Mn Map') {
                if (mapType === 'inferno') {
                    textureSelected = mnMapInferno;
                } else if (mapType === 'uncertainty') {
                    textureSelected = mnMapUncertainty;
                }
                // } else if (currentOverlay === 'Na Map') {
                //     if (mapType === 'inferno') {
                //         textureSelected = naMapInferno;
                //     } else if (mapType === 'uncertainty') {
                //         textureSelected = naMapUncertainty;
                //     }
                // } else if (currentOverlay === 'P Map') {
                //     if (mapType === 'inferno') {
                //         textureSelected = pMapInferno;
                //     } else if (mapType === 'uncertainty') {
                //         textureSelected = pMapUncertainty;
                //     }
                // } else if (currentOverlay === 'S Map') {
                //     if (mapType === 'inferno') {
                //         textureSelected = sMapInferno;
                //     } else if (mapType === 'uncertainty') {
                //         textureSelected = sMapUncertainty;
                //     }
                // } else if (currentOverlay === 'Si Map') {
                //     if (mapType === 'inferno') {
                //         textureSelected = siMapInferno;
                //     } else if (mapType === 'uncertainty') {
                //         textureSelected = siMapUncertainty;
                //     }
            } else if (currentOverlay === 'Ti Map') {
                if (mapType === 'inferno') {
                    textureSelected = tiMapInferno;
                } else if (mapType === 'uncertainty') {
                    textureSelected = tiMapUncertainty;
                }
            }


            const texture = new THREE.TextureLoader().load(textureSelected)

            texture.mapping = THREE.EquirectangularReflectionMapping;
            texture.minFilter = THREE.LinearMipMapLinearFilter;
            texture.magFilter = THREE.LinearFilter;

            const material = new THREE.MeshPhysicalMaterial({
                map: texture,
                transparent: true,
                visible: currentOverlay !== 'Base Map',
                opacity: 0.85,
                blending: THREE.NormalBlending,
                depthWrite: true,
                side: THREE.FrontSide,
                polygonOffset: true,
                polygonOffsetFactor: -1.0,
                polygonOffsetUnits: -1.0,
                clearcoat: 0
            });

            if (overlayMeshRef.current) {
                scene.remove(overlayMeshRef.current);
            }

            const northLat = 50.4;
            const southLat = -50.4;
            // const phiStart = (90 - northLat) * Math.PI / 180;  // Convert to radians
            // const phiLength = (northLat - southLat) * Math.PI / 180;  // Total angle coverage
            const phiStart = 0;  // Convert to radians
            const phiLength = Math.PI;  // Total angle coverage

            const overlayGeometry = new THREE.SphereGeometry(
                3.001,              // radius
                256,            // widthSegments
                256,            // heightSegments
                0,              // phiStart (longitude)
                Math.PI * 2,    // phiLength (full longitude range)
                phiStart,       // thetaStart (latitude start)
                phiLength       // thetaLength (latitude range)
            );
            overlayGeometry.scale(1, 1 - oblateness, 1);
            // overlayGeometry.attributes.uv.array.forEach((uv, i) => {
            //     if (i % 2 === 1) {
            //         // Adjust V values (latitude)
            //         uv = uv * 0.6 + 0.2; // Map [0, 1] → [0.2, 0.8]
            //         overlayGeometry.attributes.uv.array[i] = uv;
            //     }
            // });
            const overlayMesh = new THREE.Mesh(overlayGeometry, material);
            overlayMesh.renderOrder = 1;
            overlayMesh.rotation.y = -1 * Math.PI / 2;
            scene.add(overlayMesh);
            console.log('New mesh added to scene:', overlayMesh)
            overlayMeshRef.current = overlayMesh;
        };

        createOverlayMesh();

        const landmarkTooltip = document.createElement('div');
        landmarkTooltip.style.position = 'absolute';
        landmarkTooltip.style.backgroundColor = 'rgba(0, 0, 0, 0.85)';
        landmarkTooltip.style.color = 'white';
        landmarkTooltip.style.padding = '16px';
        landmarkTooltip.style.borderRadius = '8px';
        landmarkTooltip.style.fontSize = '14px';
        landmarkTooltip.style.pointerEvents = 'none';
        landmarkTooltip.style.zIndex = '1000';
        landmarkTooltip.style.display = 'none';
        landmarkTooltip.style.maxWidth = '300px';
        landmarkTooltip.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.4)';
        landmarkTooltip.style.backdropFilter = 'blur(8px)';
        landmarkTooltip.style.border = '1px solid rgba(255, 255, 255, 0.1)';
        document.body.appendChild(landmarkTooltip);
        landmarkTooltipRef.current = landmarkTooltip;



        const animateToLandmark = (landmarkMesh) => {

            if (isAnimatingRef.current) return;
            isAnimatingRef.current = true;
            rotation.current = 0
            if (rotationButtonRef.current) {
                rotationButtonRef.current.textContent = 'Start Rotation';
            }
            // Hide the tooltip immediately
            if (landmarkTooltipRef.current) {
                landmarkTooltipRef.current.style.display = 'none';
            }

            // Get landmark data and set it for the sidebar
            const landmarkData = {
                name: landmarkMesh.userData.name,
                coordinates: landmarkMesh.userData.coordinates,
                data: { description: landmarkMesh.userData.description },
                type: landmarkMesh.userData.type,
                image: landmarkMesh.userData.image,
            };

            // Rest of your existing animation code...
            const landmarkWorldPos = new THREE.Vector3();
            landmarkMesh.getWorldPosition(landmarkWorldPos);
            const moonCenter = new THREE.Vector3(0, 0, 0);
            const directionFromCenter = landmarkWorldPos.clone().sub(moonCenter).normalize();
            const targetPosition = moonCenter.clone().add(directionFromCenter.multiplyScalar(3.2));
            const startPosition = mainCamera.position.clone();
            const startTarget = controls.target.clone();
            const duration = 3500;
            const startTime = performance.now();
            const originalMinDistance = controls.minDistance;
            controls.minDistance = 0.02;
            controls.enabled = false;
            const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

            const animateCamera = (currentTime) => {
                const elapsed = currentTime - startTime;
                let progress = elapsed / duration;

                if (progress < 1) {
                    progress = easeOutCubic(progress);
                    mainCamera.position.lerpVectors(startPosition, targetPosition, progress);
                    const targetOffset = landmarkWorldPos.clone().add(
                        directionFromCenter.clone().multiplyScalar(0.01)
                    );
                    controls.target.lerpVectors(startTarget, targetOffset, progress);
                    controls.update();
                    requestAnimationFrame(animateCamera);
                } else {
                    mainCamera.position.copy(targetPosition);
                    controls.target.set(0, 0, 0);
                    controls.update();
                    controls.enabled = false; // Keep controls disabled
                    controls.minDistance = originalMinDistance;
                    isAnimatingRef.current = false;

                    // Show sidebar and set selected landmark after animation completes
                    setSelectedLandmark(landmarkData);
                    setIsSidebarOpen(true);
                    setIsCompositionBarOpen(false);

                    setCategory(null)
                    setIsListbarOpen(false);
                }
            };

            requestAnimationFrame(animateCamera);
        };

        landmarks.forEach(landmark => {
            // Get the base position
            const pinPosition = latLongToVector3(landmark.coordinates.latitude, landmark.coordinates.longitude, 3);

            // Apply oblateness correction to the Y coordinate
            const correctedY = pinPosition.y * (1 - oblateness);
            pinPosition.setY(correctedY);

            // Normalize the position to ensure it's on the surface
            const surfaceNormal = pinPosition.clone().normalize();
            const radius = 3.009; // Base moon radius
            const finalPosition = surfaceNormal.multiplyScalar(radius);
            finalPosition.y *= (1 - oblateness); // Apply oblateness to final position

            // Create the landmark pin

            // const pinGeometry = new THREE.BoxGeometry(0.05, 0.005, 0.05);
            const pinGeometry = new THREE.CircleGeometry(0.03);
            pinGeometry.rotateX(Math.PI / 2);
            const pinMaterial = new THREE.MeshStandardMaterial({
                color: iconPaths[landmark.type],
                transparent: true,
                opacity: 0.4,
                emissive: iconPaths[landmark.type], // Bright yellow emissive color
                emissiveIntensity: 1, // Adjust the intensity of the emissive light
                side: THREE.DoubleSide // 
            });
            pinMaterial.side = THREE.DoubleSide;
            const pin = new THREE.Mesh(pinGeometry, pinMaterial);
            pin.position.copy(finalPosition);

            // Store landmark data on the mesh
            pin.userData = {
                type: 'landmark',
                description: landmark.data.description,
                name: landmark.name,
                coordinates: landmark.coordinates,
                image: landmark.image,
            };

            // Calculate the orientation based on the oblate surface normal
            const pinMatrix = new THREE.Matrix4();
            const UP = new THREE.Vector3(0, 1 - oblateness, 0).normalize();
            pinMatrix.lookAt(new THREE.Vector3(0, 0, 0), finalPosition, UP);
            pin.setRotationFromMatrix(pinMatrix);
            pin.rotateX(Math.PI / 2);

            // Add a small offset to prevent z-fighting with the moon's surface
            const offsetDirection = finalPosition.clone().normalize();
            const offsetDistance = 0.001;
            pin.position.add(offsetDirection.multiplyScalar(offsetDistance));

            landmarkPinsRef.current.push(pin);
            moon.add(pin);

            pin.visible = currentOverlay === 'Marked Map';
        });

        const onLandmarkClick = (event) => {
            const showLandmarks = showLandmarksRef.current
            if (!showLandmarks) return

            // if (isAnimatingRef.current) return;

            mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouseRef.current, currentCamera.current === 'main' ? mainCamera : satelliteCamera);
            const intersects = raycaster.intersectObjects(moon.children);

            for (const intersect of intersects) {
                if (intersect.object.userData && intersect.object.userData.type === 'landmark') {
                    // Switch to main camera if we're in satellite view
                    if (currentCamera.current === 'satellite') {
                        currentCamera.current = 'main';
                    }
                    animateToLandmark(intersect.object);
                    break;
                }
            }
        };

        renderer.domElement.addEventListener('click', onLandmarkClick);



        // Satellite setup
        const satelliteMaterial = new THREE.MeshStandardMaterial({ map: satelliteTexture });
        const satelliteGeometry = new THREE.BoxGeometry(0.04 * satelliteScale, 0.04 * satelliteScale, 0.04 * satelliteScale);
        const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);


        const wingGeometry = new THREE.BoxGeometry(0.08 * satelliteScale, 0.02 * satelliteScale, 0.002 * satelliteScale);
        const wingMaterial = new THREE.MeshStandardMaterial({ map: wingTexture });
        const wing1 = new THREE.Mesh(wingGeometry, wingMaterial);
        const wing2 = new THREE.Mesh(wingGeometry, wingMaterial);

        wing1.position.set(0.06 * satelliteScale, 0, 0);
        wing2.position.set(-0.06 * satelliteScale, 0, 0);

        const satelliteGroup = new THREE.Group();
        satelliteGroupRef.current = satelliteGroup;

        satelliteGroup.add(satellite);
        satelliteGroup.add(wing1);
        satelliteGroup.add(wing2);

        scene.add(satelliteGroup);

        // Satellite camera setup
        const satelliteCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
        satelliteCameraRef.current = satelliteCamera;
        satelliteCamera.position.set(0, 0, SATELLITE_ORBIT_RADIUS);



        // Keyboard controls
        const handleKeyDown = (event) => {
            keysPressed.current[event.key] = true;
        };

        const handleKeyUp = (event) => {
            keysPressed.current[event.key] = false;
        };

        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        const orbitRadiusX = 3.5;
        const orbitRadiusZ = 3.5;
        // Update satellite position function
        const updateSatellitePosition = () => {
            orbitAngle.current += satelliteRevolutionSpeedRef.current;

            // After a full revolution (pole-to-pole cycle), shift satellite 30 degrees east
            if (orbitAngle.current >= 2 * Math.PI) {
                orbitAngle.current -= 2 * Math.PI; // Reset orbit angle
                satellitePosition.current.theta += Math.PI / 48; // Shift longitude by 7.5 degrees east
            }

            // Calculate position for polar orbit
            const x = moon.position.x + SATELLITE_ORBIT_RADIUS * Math.sin(orbitAngle.current) * Math.cos(satellitePosition.current.theta);
            const y = moon.position.y + SATELLITE_ORBIT_RADIUS * Math.cos(orbitAngle.current);
            const z = moon.position.z + SATELLITE_ORBIT_RADIUS * Math.sin(orbitAngle.current) * Math.sin(satellitePosition.current.theta);

            // Update satellite position
            satelliteGroup.position.set(x, y, z);

            // Update spherical coordinates for reference
            satellitePosition.current.phi = orbitAngle.current;

            // } else {
            //     // In satellite view: Update position based on keyboard controls
            //     if (keysPressed.current['ArrowUp']) {
            //         satellitePosition.current.phi = Math.max(0.1, satellitePosition.current.phi - satelliteRevolutionSpeedRef.current);
            //     }
            //     if (keysPressed.current['ArrowDown']) {
            //         satellitePosition.current.phi = Math.min(Math.PI - 0.1, satellitePosition.current.phi + satelliteRevolutionSpeedRef.current);
            //     }
            //     if (keysPressed.current['ArrowLeft']) {
            //         satellitePosition.current.theta += satelliteRevolutionSpeedRef.current;
            //     }
            //     if (keysPressed.current['ArrowRight']) {
            //         satellitePosition.current.theta -= satelliteRevolutionSpeedRef.current;
            //     }

            //     // Calculate position from spherical coordinates
            //     const x = SATELLITE_ORBIT_RADIUS * Math.sin(satellitePosition.current.phi) * Math.cos(satellitePosition.current.theta);
            //     const y = SATELLITE_ORBIT_RADIUS * Math.cos(satellitePosition.current.phi);
            //     const z = SATELLITE_ORBIT_RADIUS * Math.sin(satellitePosition.current.phi) * Math.sin(satellitePosition.current.theta);

            //     satelliteGroup.position.set(x, y, z);
            // }

            // Update satellite orientation and camera
            satelliteGroup.lookAt(0, 0, 0);
            satelliteCamera.position.copy(satelliteGroup.position);
            satelliteCamera.lookAt(0, 0, 0);
        };

        // Stars
        const starField = createStarField();
        scene.add(starField);

        // Controls for main camera
        const controls = new OrbitControls(mainCamera, renderer.domElement);
        controls.enableZoom = true;
        // controls.maxDistance = 10; 
        controls.minDistance = 3.2;
        controlsRef.current = controls;
        // controlsRef.current.addEventListener('change', calculateVisibleArea);

        // Convert world position to lat/long

        function createStarField() {
            const vertices = [];
            const sizes = [];
            const NUM_STARS = 40000;
            const STAR_FIELD_RADIUS = 4000;

            for (let i = 0; i < NUM_STARS; i++) {
                const theta = 2 * Math.PI * Math.random();
                const phi = Math.acos(2 * Math.random() - 1);
                const r = Math.max(STAR_FIELD_RADIUS * Math.cbrt(Math.random()), 300);
                // const r = 300;

                const x = r * Math.sin(phi) * Math.cos(theta);
                const y = r * Math.sin(phi) * Math.sin(theta);
                const z = r * Math.cos(phi);

                vertices.push(x, y, z);
                sizes.push(Math.random() + 0.5);
            }

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
            geometry.setAttribute('size', new THREE.Float32BufferAttribute(sizes, 1));

            const starMaterial = new THREE.PointsMaterial({
                color: 0xffffff,
                size: 1,
                sizeAttenuation: true,
                transparent: true,
                blending: THREE.AdditiveBlending
            });

            return new THREE.Points(geometry, starMaterial);
        }

        // Update coordinates based on current mouse position
        const updateCoordinates = () => {
            if (!isHoveringRef.current || !tooltipRef.current || landmarkTooltipRef.current.style.display === 'block') {
                if (tooltipRef.current) {
                    tooltipRef.current.style.display = 'none';
                }
                return;
            }
            raycaster.setFromCamera(mouseRef.current, currentCamera.current === 'main' ? mainCamera : satelliteCamera);
            const intersects = raycaster.intersectObject(moon);

            if (intersects.length > 0) {

                const { latitude, longitude } = calculateLatLong(intersects[0].point);
                tooltipRef.current.textContent = `Lat: ${latitude.toFixed(2)}°, Long: ${longitude.toFixed(2)}°`;
                tooltipRef.current.style.left = `${screenPositionRef.current.x + 15}px`;
                tooltipRef.current.style.top = `${screenPositionRef.current.y + 15}px`;
                tooltipRef.current.style.display = 'block';
            } else {
                tooltipRef.current.style.display = 'none';
            }
        };

        const setCustomCursor = () => {
            const cursorSize = 24;
            const cursorSvg = `
              <svg width="${cursorSize}" height="${cursorSize}" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="transparent" stroke="#fff" stroke-width="8" />
                <circle cx="50" cy="50" r="20" fill="transparent" stroke="#999" stroke-width="8" />
              </svg>
            `;

            const cursorUrl = `data:image/svg+xml;base64,${btoa(cursorSvg)}`;
            document.body.style.cursor = `url('${cursorUrl}'), crosshair`;
        };
        // Mouse handlers
        const onMouseMove = (event) => {
            mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
            screenPositionRef.current = { x: event.clientX, y: event.clientY };

            raycaster.setFromCamera(mouseRef.current, currentCamera.current === 'main' ? mainCamera : satelliteCamera);

            const allIntersects = raycaster.intersectObjects(moon.children.concat([moon]));

            let foundLandmark = false;

            for (const intersect of allIntersects) {
                if (intersect.object.userData && intersect.object.userData.type === 'landmark') {
                    // Show landmark tooltip with coordinates
                    const coords = intersect.object.userData.coordinates;
                    landmarkTooltipRef.current.innerHTML = `
                        <div style="margin-bottom: 8px; padding-bottom: 8px; border-bottom: 1px solid rgba(255, 255, 255, 0.2);">
                            <strong style="display: block; margin-bottom: 6px; color: #fff; font-size: 16px;">
                                ${intersect.object.userData.name}
                            </strong>
                            <span style="display: block; color: #aaa; font-size: 12px;">
                                Lat: ${coords.latitude.toFixed(2)}°, Long: ${coords.longitude.toFixed(2)}°
                            </span>
                        </div>
                        <span style="color: #ddd; line-height: 1.4;">
                            ${intersect.object.userData.description}
                        </span>
                    `;

                    // Position tooltip with offset to prevent flickering
                    const tooltipOffset = 20;
                    const tooltipX = event.clientX + tooltipOffset;
                    const tooltipY = event.clientY + tooltipOffset;

                    // Ensure tooltip stays within viewport
                    const tooltipWidth = 300; // maxWidth of tooltip
                    const tooltipHeight = landmarkTooltipRef.current.offsetHeight;
                    const viewportWidth = window.innerWidth;
                    const viewportHeight = window.innerHeight;

                    // Adjust X position if tooltip would go off screen
                    const finalX = tooltipX + tooltipWidth > viewportWidth
                        ? viewportWidth - tooltipWidth - 10
                        : tooltipX;

                    // Adjust Y position if tooltip would go off screen
                    const finalY = tooltipY + tooltipHeight > viewportHeight
                        ? viewportHeight - tooltipHeight - 10
                        : tooltipY;

                    landmarkTooltipRef.current.style.left = `${finalX}px`;
                    landmarkTooltipRef.current.style.top = `${finalY}px`;
                    landmarkTooltipRef.current.style.display = 'block';

                    // Hide coordinates tooltip when showing landmark tooltip
                    if (tooltipRef.current) {
                        tooltipRef.current.style.display = 'none';
                    }

                    // Highlight the landmark
                    intersect.object.material.opacity = 1;
                    intersect.object.scale.set(1.2, 1.2, 1.2);

                    foundLandmark = true;
                    document.body.style.cursor = 'pointer';
                    break;
                } else if (intersect.object === moon && !foundLandmark) {
                    isHoveringRef.current = true;
                    updateCoordinates();
                    setCustomCursor();
                }
            }

            if (!foundLandmark) {
                // Reset all landmarks to normal state
                moon.children.forEach(child => {
                    if (child.userData && child.userData.type === 'landmark') {
                        child.material.opacity = 0.4;
                        child.scale.set(1, 1, 1);
                    }
                });
                landmarkTooltipRef.current.style.display = 'none';
            }

            if (!allIntersects.length) {
                tooltipRef.current.style.display = 'none';
                landmarkTooltipRef.current.style.display = 'none';
                document.body.style.cursor = 'default';
            }
        };


        const onMouseLeave = () => {
            isHoveringRef.current = false;
            if (tooltipRef.current) {
                tooltipRef.current.style.display = 'none';
            }
        };

        renderer.domElement.addEventListener('mousemove', onMouseMove);
        renderer.domElement.addEventListener('mouseleave', onMouseLeave);

        // Animation Loop
        const animate = () => {
            frameIdRef.current = requestAnimationFrame(animate);

            const currentPosition = controlsRef.current.object.position.clone();
            const currentRotation = controlsRef.current.object.rotation.clone();
            const positionChanged = previousCameraPosition.current.distanceTo(currentPosition) > POSITION_THRESHOLD;

            // New way to compare rotations using quaternions
            const previousQuaternion = new THREE.Quaternion().setFromEuler(previousCameraRotation.current);
            const currentQuaternion = new THREE.Quaternion().setFromEuler(currentRotation);

            // Calculate the difference between rotations
            const rotationDifference = new THREE.Quaternion()
                .multiplyQuaternions(
                    currentQuaternion,
                    previousQuaternion.invert()
                );

            // Convert the quaternion difference to an angle
            const rotationAngle = 2 * Math.acos(Math.abs(rotationDifference.w));
            const rotationChanged = rotationAngle > ROTATION_THRESHOLD;


            // Add throttling for performance
            const now = performance.now();
            if (now - calculationThrottleRef.current > 20) { // 500ms throttle
                if (positionChanged || rotationChanged) {

                    // Calculate new visible area using currentCameraDynamic for intersection
                    if (dynamicRendering) {
                        const raycaster = new THREE.Raycaster();
                        const center = new THREE.Vector2(0, 0);

                        // Use the dynamic camera setting for calculations
                        const calculationCamera = currentCameraDynamic.current === 'main'
                            ? mainCameraRef.current
                            : satelliteCameraRef.current;

                        raycaster.setFromCamera(center, calculationCamera);

                        const moonIntersects = raycaster.intersectObject(moonRef.current);

                        if (moonIntersects.length > 0) {
                            const intersectionPoint = moonIntersects[0].point;
                            const { latitude, longitude } = calculateLatLong(intersectionPoint);

                            if (Math.abs(latitude - visibleAreaStateRef.current.lat) > 0.1 ||
                                Math.abs(longitude - visibleAreaStateRef.current.lon) > 0.1) {
                                requestAnimationFrame(() => {
                                    setVisibleArea({
                                        lat: latitude,
                                        lon: longitude
                                    });
                                });
                            }
                        }

                        previousCameraPosition.current.copy(currentPosition);
                        previousCameraRotation.current.copy(currentRotation);
                        calculationThrottleRef.current = now;
                    }
                }
            }

            if (rotation.current && dynamicRendering) {
                // Force visible area calculation during rotation
                calculateVisibleArea();
            }

            // Update moon rotation
            moon.rotation.y += rotation.current ? moonRotationSpeedRef.current : 0;

            // Update overlay meshes rotation
            if (overlayMeshRef.current) {
                overlayMeshRef.current.rotation.y += rotation.current ? moonRotationSpeedRef.current : 0;
            }
            if (dynamicMeshRef.current) {
                dynamicMeshRef.current.rotation.y += rotation.current ? moonRotationSpeedRef.current : 0;
            }

            // Update coordinates if hovering
            if (isHoveringRef.current) {
                updateCoordinates();
            }

            // Update satellite position
            updateSatellitePosition();

            // Update light position
            lightAngle.current += lightRevolutionSpeedRef.current;
            pointLight.position.set(
                10 * Math.cos(lightAngle.current),
                0,
                10 * Math.sin(lightAngle.current)
            );

            // Update light intensities
            ambientLight.intensity = ambientLightIntensityRef.current;
            pointLight.intensity = sunlightIntensityRef.current;

            // Use currentCamera for actual rendering
            const renderCamera = currentCamera.current === 'main'
                ? mainCameraRef.current
                : satelliteCameraRef.current;

            renderer.render(scene, renderCamera);
        };

        animate();

        // Cleanup
        return () => {
            if (frameIdRef.current) {
                cancelAnimationFrame(frameIdRef.current);
            }
            if (tooltipRef.current) {
                document.body.removeChild(tooltipRef.current);
            }
            if (landmarkTooltipRef.current) {
                document.body.removeChild(landmarkTooltipRef.current);
            }
            mountRef.current.removeChild(renderer.domElement);
            // controlsRef.current.removeEventListener('change', calculateVisibleArea);
            renderer.domElement.removeEventListener('mousemove', onMouseMove);
            renderer.domElement.removeEventListener('mouseleave', onMouseLeave);
            renderer.domElement.removeEventListener('click', onLandmarkClick);
        };
    }, []);


    useEffect(() => {
        if (!sceneRef.current) return;

        const updateOverlayVisibility = () => {
            console.log('Updating overlay:', { currentOverlay, mapType, dynamicRendering });

            // First check if dynamic rendering is active
            if (dynamicRendering) {
                console.log('Dynamic rendering active');
                // Safely handle dynamic mesh visibility
                if (dynamicMeshRef.current) {
                    dynamicMeshRef.current.visible = true;
                }

                // Safely hide other elements if they exist
                if (overlayMeshRef.current) {
                    overlayMeshRef.current.visible = false;
                }

                return; // Exit early if in dynamic mode
            }
            console.log('Static rendering active');
            // If not in dynamic rendering mode, hide dynamic mesh if it exists
            if (dynamicMeshRef.current) {
                dynamicMeshRef.current.visible = false;
                dynamicMeshRef.current = null
                console.log('Hidden dynamic mesh');
            }

            // Handle static rendering modes
            if (currentOverlay === 'Base Map') {
                console.log('Base Map selected');
                if (overlayMeshRef.current) {
                    overlayMeshRef.current.visible = false;
                }

            }
            else {

                if (overlayMeshRef.current) {
                    console.log('Creating new overlay mesh');
                    let textureSelected;
                    if (currentOverlay === 'Al Map') {
                        if (mapType === 'inferno') {
                            textureSelected = alMapInferno;
                        } else if (mapType === 'uncertainty') {
                            textureSelected = alMapUncertainty;
                        }
                    } else if (currentOverlay === 'Ca Map') {
                        if (mapType === 'inferno') {
                            textureSelected = caMapInferno;
                        } else if (mapType === 'uncertainty') {
                            textureSelected = caMapUncertainty;
                        }
                    } else if (currentOverlay === 'Cr Map') {
                        if (mapType === 'inferno') {
                            textureSelected = crMapInferno;
                        } else if (mapType === 'uncertainty') {
                            textureSelected = crMapUncertainty;
                        }
                    } else if (currentOverlay === 'Fe Map') {
                        if (mapType === 'inferno') {
                            textureSelected = feMapInferno;
                        } else if (mapType === 'uncertainty') {
                            textureSelected = feMapUncertainty;
                        }
                        // } else if (currentOverlay === 'K Map') {
                        //     if (mapType === 'inferno') {
                        //         textureSelected = kMapInferno;
                        //     } else if (mapType === 'uncertainty') {
                        //         textureSelected = kMapUncertainty;
                        //     }
                    } else if (currentOverlay === 'Mg Map') {
                        if (mapType === 'inferno') {
                            textureSelected = mgMapInferno;
                        } else if (mapType === 'uncertainty') {
                            textureSelected = mgMapUncertainty;
                        }
                    } else if (currentOverlay === 'Mn Map') {
                        if (mapType === 'inferno') {
                            textureSelected = mnMapInferno;
                        } else if (mapType === 'uncertainty') {
                            textureSelected = mnMapUncertainty;
                        }
                        // } else if (currentOverlay === 'Na Map') {
                        //     if (mapType === 'inferno') {
                        //         textureSelected = naMapInferno;
                        //     } else if (mapType === 'uncertainty') {
                        //         textureSelected = naMapUncertainty;
                        //     }
                        // } else if (currentOverlay === 'P Map') {
                        //     if (mapType === 'inferno') {
                        //         textureSelected = pMapInferno;
                        //     } else if (mapType === 'uncertainty') {
                        //         textureSelected = pMapUncertainty;
                        //     }
                        // } else if (currentOverlay === 'S Map') {
                        //     if (mapType === 'inferno') {
                        //         textureSelected = sMapInferno;
                        //     } else if (mapType === 'uncertainty') {
                        //         textureSelected = sMapUncertainty;
                        //     }
                        // } else if (currentOverlay === 'Si Map') {
                        //     if (mapType === 'inferno') {
                        //         textureSelected = siMapInferno;
                        //     } else if (mapType === 'uncertainty') {
                        //         textureSelected = siMapUncertainty;
                        //     }
                    } else if (currentOverlay === 'Ti Map') {
                        if (mapType === 'inferno') {
                            textureSelected = tiMapInferno;
                        } else if (mapType === 'uncertainty') {
                            textureSelected = tiMapUncertainty;
                        }
                    }
                    console.log('Current overlay and map type:', currentOverlay, mapType);
                    console.log('Selected texture:', textureSelected);
                    setIsLoading(true)
                    // Create and configure new texture with loading manager
                    const loadManager = new THREE.LoadingManager();

                    loadManager.onProgress = (url, itemsLoaded, itemsTotal) => {
                        const progress = (itemsLoaded / itemsTotal) * 100;
                        setLoadingProgress(Math.round(progress));
                    };

                    loadManager.onLoad = () => {
                        setIsLoading(false);
                    };

                    const texture = new THREE.TextureLoader(loadManager).load(
                        textureSelected,
                        (loadedTexture) => {
                            console.log('Texture loaded:', loadedTexture);

                            if (!loadedTexture.image) {
                                console.error('No image data in loaded texture');
                                setIsLoading(false);
                                return;
                            }

                            // Configure texture after loading
                            loadedTexture.mapping = THREE.EquirectangularReflectionMapping;
                            loadedTexture.minFilter = THREE.LinearMipMapLinearFilter;
                            loadedTexture.magFilter = THREE.LinearFilter;
                            loadedTexture.needsUpdate = true;

                            // Update material with new texture
                            const material = new THREE.MeshPhysicalMaterial({
                                map: loadedTexture,
                                transparent: true,
                                visible: true,
                                opacity: 0.85,
                                blending: THREE.NormalBlending,
                                depthWrite: true,
                                side: THREE.FrontSide,
                                polygonOffset: true,
                                polygonOffsetFactor: -1.0,
                                polygonOffsetUnits: -1.0,
                                clearcoat: 0
                            });

                            // Apply new material
                            overlayMeshRef.current.material.dispose();
                            overlayMeshRef.current.material = material;
                            overlayMeshRef.current.visible = true;
                        },
                        // Progress callback
                        (xhr) => {
                            const progress = (xhr.loaded / xhr.total) * 100;
                            setLoadingProgress(Math.round(progress));
                        },
                        // Error callback
                        (error) => {
                            console.error('Error loading texture:', error);
                            setIsLoading(false);
                        }
                    );
                }
            }
        };

        updateOverlayVisibility();
    }, [currentOverlay, dynamicRendering, mapType]);



    const handleSidebarClose = () => {
        setSelectedLandmark(null);
        setIsSidebarOpen(false);
        if (categoryMemory) {
            setCategory(categoryMemory);
            setIsListbarOpen(true)
        }

        if (controlsRef.current && !isAnimatingRef.current) {
            isAnimatingRef.current = true;

            // Get current camera position and calculate new position
            const currentPosition = controlsRef.current.object.position.clone();
            const moonCenter = new THREE.Vector3(0, 0, 0);
            const directionFromCenter = currentPosition.clone().sub(moonCenter).normalize();
            const currentDistance = currentPosition.distanceTo(moonCenter);
            const targetPosition = moonCenter.clone().add(directionFromCenter.multiplyScalar(currentDistance + 0.5));

            // Animation settings
            const duration = 1000; // 1 second
            const startTime = performance.now();
            const startPosition = currentPosition.clone();

            // Easing function
            const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

            const animateZoomOut = (currentTime) => {
                const elapsed = currentTime - startTime;
                let progress = Math.min(elapsed / duration, 1);
                progress = easeOutCubic(progress);

                if (progress < 1) {
                    // Interpolate camera position
                    controlsRef.current.object.position.lerpVectors(startPosition, targetPosition, progress);
                    controlsRef.current.update();
                    requestAnimationFrame(animateZoomOut);
                } else {
                    // Animation complete
                    controlsRef.current.object.position.copy(targetPosition);
                    controlsRef.current.update();
                    controlsRef.current.enabled = true;
                    isAnimatingRef.current = false;
                }
            };

            requestAnimationFrame(animateZoomOut);
        }
    };
    const handleListBarClose = () => {
        setCategory(null);
        setCategoryMemory(null)
        setIsListbarOpen(false);
    }
    const handleCompositionBarClose = () => {
        setIsCompositionBarOpen(false);
    }
    const handleProcessedDataBarClose = () => {
        setIsProcessedDataSidebarOpen(false);

    }
    useEffect(() => {
        if (isProcessedDataSidebarOpen) {
            setIsCompositionBarOpen(false);
            setIsListbarOpen(false);
            setIsSidebarOpen(false)
        }
    }, [isProcessedDataSidebarOpen])
    const handleReset = () => {
        const ANIMATION_DURATION = 1500; // 1.5 seconds in milliseconds
        const startTime = performance.now();

        // Store initial values
        const initialMoonRotation = moonRef.current.rotation.y;
        const initialOverlayRotation = overlayMeshRef.current ? overlayMeshRef.current.rotation.y : -Math.PI / 2;
        const initialCameraPosition = controlsRef.current.object.position.clone();
        // const initialSatellitePosition = satellitePosition.current;

        // Target values
        const targetMoonRotation = -Math.PI / 2;
        const targetCameraPosition = new THREE.Vector3(0, 0, 6);
        // const targetSatellitePosition = {
        //     phi: Math.PI / 2,
        //     theta: 0
        // };

        // Easing function (easeOutCubic)
        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / ANIMATION_DURATION, 1);
            const easedProgress = easeOutCubic(progress);

            // Animate moon rotation
            if (moonRef.current) {
                moonRef.current.rotation.y = initialMoonRotation + (targetMoonRotation - initialMoonRotation) * easedProgress;
            }

            // Animate overlay rotation
            if (overlayMeshRef.current) {
                overlayMeshRef.current.rotation.y = initialOverlayRotation + (targetMoonRotation - initialOverlayRotation) * easedProgress;
            }

            // Animate camera position
            if (controlsRef.current) {
                const newX = initialCameraPosition.x + (targetCameraPosition.x - initialCameraPosition.x) * easedProgress;
                const newY = initialCameraPosition.y + (targetCameraPosition.y - initialCameraPosition.y) * easedProgress;
                const newZ = initialCameraPosition.z + (targetCameraPosition.z - initialCameraPosition.z) * easedProgress;

                controlsRef.current.object.position.set(newX, newY, newZ);
                controlsRef.current.target.set(0, 0, 0);
                controlsRef.current.update();
            }

            // Animate satellite position
            // satellitePosition.current = {
            //     phi: initialSatellitePosition.phi + (targetSatellitePosition.phi - initialSatellitePosition.phi) * easedProgress,
            //     theta: initialSatellitePosition.theta + (targetSatellitePosition.theta - initialSatellitePosition.theta) * easedProgress
            // };
            // if (ambientButtonRef.current) {
            //     ambientButtonRef.current.textContent = 'Ambient Mode'
            // }
            // Reset other parameters immediately at the end of animation
            if (progress >= 1) {
                // Reset all ref values to initial state
                rotation.current = 0;
                lightAngle.current = lightInitialAngle;
                // orbitAngle.current = 0;
                currentCamera.current = 'main';

                // Reset all parameter values
                moonRotationSpeedRef.current = moonRotationSpeed;
                // satelliteRevolutionSpeedRef.current = satelliteRevolutionSpeed;
                lightRevolutionSpeedRef.current = lightRevolutionSpeed;
                // ambientLightIntensityRef.current = ambientLightIntensity;
                // sunlightIntensityRef.current = sunlightIntensity;

                // Update rotation button text
                if (rotationButtonRef.current) {
                    rotationButtonRef.current.textContent = 'Start Rotation';
                }

                return; // Stop animation
            }

            requestAnimationFrame(animate);
        };

        requestAnimationFrame(animate);
    };

    useEffect(() => {
        if (dynamicRendering) {

            if (moonRef.current) {
                moonRef.current.rotation.y = -Math.PI / 2;
            }

            if (overlayMeshRef.current) {
                overlayMeshRef.current.rotation.y = -Math.PI / 2;
            }
        }
    }, [dynamicRendering])

    useEffect(() => {
        if (dynamicRendering && !liveMode && !fileUploadMode) {
            currentCameraDynamic.current = "main"
        }
        if (dynamicRendering && !liveMode && fileUploadMode) {
            currentCameraDynamic.current = "main"
        }
        if (dynamicRendering && liveMode && !fileUploadMode) {
            currentCameraDynamic.current = "satellite"
        }
    }, [dynamicRendering, liveMode, fileUploadMode])

    useEffect(() => {
        const fetchScaleValues = async () => {
            try {
                const response = await fetch(`${BACKEND_SERVER_URL}/tiles/get_scale_values/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ element: parseOverlays(currentOverlay), mapType: mapType })
                });

                const data = await response.json();
                // console.log(data);
                setScaleValues({
                    min: data.min,
                    max: data.max
                })

            } catch (error) {
                // alert("Error fetching data")
            }

        }
        if (parseOverlays(currentOverlay) !== "Base") {
            fetchScaleValues();
        } else {
            setScaleValues({
                min: null,
                max: null
            })
        }
    }, [currentOverlay, mapType])

    const ControlPanel = () => (

        <div style={{
            position: "absolute",
            left: "26px",
            bottom: "50px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "20px",
            borderRadius: "12px",
            color: "white",
            maxWidth: "300px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(8px)"
        }}>
            <div style={{ marginBottom: "20px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "10px" }}>
                <div style={{ fontSize: "16px", fontWeight: "600" }}>Control Panel</div>
            </div>

            {[
                { label: "Moon Rotation Speed", min: 0, max: 0.009, step: 0.0001, ref: moonRotationSpeedRef },
                { label: "Satellite Speed", min: 0, max: satelliteRevolutionMaxSpeedRef.current, step: 0.0001, ref: satelliteRevolutionSpeedRef },
                { label: "Light Revolution Speed", min: 0, max: 0.01, step: 0.001, ref: lightRevolutionSpeedRef },
                { label: "Ambient Light Intensity", min: 0, max: 100, step: 1, ref: ambientLightIntensityRef },
                { label: "Sunlight Intensity", min: 0, max: 400, step: 1, ref: sunlightIntensityRef }
            ].map((control, index) => (
                <div key={index} style={{ marginBottom: "14px" }}>
                    <label style={{
                        display: "block",
                        marginBottom: "3px",
                        fontSize: "14px",
                        color: "rgba(255, 255, 255, 0.9)"
                    }}>
                        {control.label}
                    </label>
                    <input
                        type="range"
                        min={control.min}
                        max={control.max}
                        step={control.step}
                        defaultValue={control.ref.current}
                        onChange={(e) => control.ref.current = parseFloat(e.target.value)}
                        style={{
                            width: "100%",
                            height: "4px",
                            WebkitAppearance: "none",
                            background: "rgba(255, 255, 255, 0.2)",
                            borderRadius: "2px",
                            cursor: "pointer",
                            outline: "none"
                        }}
                    />
                </div>
            ))}

            <button
                style={{
                    backgroundColor: 'transparent',
                    color: "white",
                    padding: "8px 10px",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "8px",
                    cursor: "pointer",
                    width: "100%",
                    transition: "all 0.2s ease",
                    outline: "none",
                    fontSize: "14px",
                    marginTop: "2px"
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.5)";
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.3)";
                }}
                ref={ambientButtonRef}
                onClick={() => {
                    if (sunlightIntensityRef.current > 0) {
                        sunlightIntensityRef.current = 0;
                        ambientLightIntensityRef.current = 200;
                        ambientButtonRef.current.textContent = 'Sunlight Mode'
                    } else {
                        sunlightIntensityRef.current = 200;
                        ambientLightIntensityRef.current = 3;
                        ambientButtonRef.current.textContent = 'Ambient Mode'
                    }
                }}
            >
                Ambient Mode
            </button>
        </div>
    );


    const NavigatorPanel = () => (
        <div style={{
            position: "absolute",
            left: "26px",
            bottom: "50px",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "20px",
            borderRadius: "12px",
            color: "white",
            maxWidth: "300px",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
            backdropFilter: "blur(8px)"
        }}>
            <div style={{ marginBottom: "20px", borderBottom: "1px solid rgba(255, 255, 255, 0.1)", paddingBottom: "10px" }}>
                <div style={{ fontSize: "16px", fontWeight: "600" }}>Navigator</div>
            </div>
            <CoordinateInput setAnimateCoordinates={setAnimateCoordinates} animateCoordinates={animateCoordinates} isCompositionBarOpen={isCompositionBarOpen} liveMode={liveMode} />

            <button
                style={{
                    // backgroundColor: dynamicRendering ? 'rgba(153, 157, 158, 0.3)' : showLandmarks ? '#4CAF50' : 'transparent', // Green when active, orange when inactive
                    backgroundColor: showLandmarks ? '#4CAF50' : 'transparent', // Green when active, orange when inactive
                    color: "white",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    padding: "8px 10px",
                    borderRadius: "8px",
                    cursor: "pointer",
                    width: "100%",
                    transition: "all 0.2s ease",
                    outline: "none",
                    fontSize: "14px",
                    marginTop: "10px",
                    boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                }}
                // disabled={dynamicRendering}

                onMouseOver={(e) => {
                    // if (dynamicRendering) return;
                    e.currentTarget.style.opacity = "0.9";
                }}
                onMouseOut={(e) => {
                    // if (dynamicRendering) return;
                    e.currentTarget.style.opacity = "1";
                }}
                onClick={() => {
                    setShowLandmarks((prevState) => !prevState);
                    showLandmarksRef.current = !showLandmarksRef.curren
                    if (landmarkPinsRef.current) {
                        landmarkPinsRef.current.forEach(pin => {
                            if (pin) pin.visible = !showLandmarks;
                        });
                    }
                }}
            >
                Annotations
            </button>
        </div>
    );

    return (
        <>
            <Navbar onOptionSelect={(option) => {
                console.log(option)
                if (canvasRef.current) {
                    const ctx = canvasRef.current.getContext('2d');
                    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                    setLoadedImages([]);
                }

                // setMapVisibility(option)
                setCurrentOverlay(option);
            }} />
            {requestInProgress && <div style={{ position: "absolute", top: "2px", left: "10px", color: "white", fontSize: "10px", pointerEvents: "none" }}>
                Loading Tiles
            </div>}
            {canvasDrawing && <div style={{ position: "absolute", top: "2px", left: requestInProgress ? "80px" : "10px", color: "white", fontSize: "10px", pointerEvents: "none" }}>
                {requestInProgress ? "," : null} Rendering Tiles
            </div>}


            {showLandmarks && <Legends />}
            <div ref={mountRef} style={{ width: '100vw', height: '100vh', overflow: "hidden" }} />
            <div style={{
                position: "absolute",
                left: "52px",
                bottom: "12px",
                display: "flex",
                gap: "4px"
            }}>
                <button
                    style={{
                        backgroundColor: activePanel === 'control' ? '#4CAF50' : 'rgba(0, 0, 0, 0.7)',
                        color: "white",
                        padding: "8px 16px",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        fontSize: "14px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                    }}
                    onClick={() => { setViewControlPanel(true); setActivePanel('control') }}
                >
                    Controls
                </button>
                <button
                    style={{
                        backgroundColor: activePanel === 'upload' ? '#4CAF50' : 'rgba(0, 0, 0, 0.7)',
                        color: "white",
                        padding: "8px 16px",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        fontSize: "14px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                    }}
                    onClick={() => { setViewControlPanel(true); setActivePanel('upload') }}
                >
                    File Upload
                </button>
                <button
                    style={{
                        backgroundColor: activePanel === 'navigate' ? '#4CAF50' : 'rgba(0, 0, 0, 0.7)',
                        color: "white",
                        padding: "8px 16px",
                        border: "none",
                        borderRadius: "8px",
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        fontSize: "14px",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.2)"
                    }}
                    onClick={() => { setViewControlPanel(true); setActivePanel('navigate') }}
                >
                    Navigate
                </button>
                <ModeDropdown
                    fileUploadMode={fileUploadMode}
                    setFileUploadMode={setFileUploadMode}
                    liveMode={liveMode}
                    setLiveMode={setLiveMode}
                />
            </div>

            {/* Render active panel */}
            {viewControlPanel && (
                activePanel === 'control' ? <ControlPanel /> :
                    activePanel === 'upload' ? <FileUploadPanel
                        canvasRef={canvasRef}
                        setFileUploadMode={setFileUploadMode}
                        setDynamicRendering={setDynamicRendering}
                        currentOverlay={currentOverlay}
                        setTileIndexAnimte={setTileIndexAnimte}
                        setModifiedTileData={setModifiedTileData}
                        setProcessedData={setProcessedData}
                        processedData={processedData}
                        setIsProcessedDataSidebarOpen={setIsProcessedDataSidebarOpen}
                        mapType={mapType}
                    /> :
                        <NavigatorPanel />
            )}

            <button
                style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    color: "rgba(255, 255, 255, 0.8)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    fontSize: "32px",
                    border: "none",
                    borderRadius: "50%",
                    cursor: "pointer",
                    padding: "4px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.2s ease",
                    backdropFilter: "blur(4px)",
                    outline: "none"
                }}
                onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
                    e.currentTarget.style.color = "rgba(255, 255, 255, 1)";
                    e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
                    e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                    e.currentTarget.style.transform = "scale(1)";
                }}
                onClick={() => {
                    viewControlPanel ? setViewControlPanel(false) : setViewControlPanel(true)
                }}
            >
                {viewControlPanel ? <IoIosArrowDropdownCircle /> : <CiCircleChevUp />}
            </button>
            {isLoading ? (
                <div style={{
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '340px',
                    backgroundColor: 'rgba(26, 26, 26, 0.25)',
                    padding: '32px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                }}>
                    <div style={{
                        color: '#FFFFFF',
                        fontSize: '18px',
                        marginBottom: '24px',
                        fontFamily: 'system-ui, -apple-system, sans-serif',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <span>Loading Assets</span>
                        <span style={{
                            fontSize: '20px',
                            fontWeight: '500',
                            color: '#3B82F6'
                        }}>{loadingProgress}%</span>
                    </div>
                    <div style={{
                        width: '100%',
                        height: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderRadius: '4px',
                        padding: '1px'
                    }}>
                        <div style={{
                            height: '100%',
                            width: `${loadingProgress}%`,
                            backgroundColor: '#3B82F6',
                            borderRadius: '3px',
                            transition: 'width 300ms ease-out',
                            boxShadow: '0 0 10px rgba(59, 130, 246, 0.3)'
                        }} />
                    </div>
                </div>
            ) : null}
            <div style={{
                position: "absolute",
                right: "20px",
                bottom: "20px",
                display: "flex",
                gap: "15px",
                padding: "5px"
            }}>
                <button
                    style={{
                        padding: "20px 25px",
                        backgroundColor: dynamicRendering ? 'rgba(153, 157, 158, 0.5)' : "#2a2a2a",
                        cursor: "pointer",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        boxShadow: "0 6px 0 #1a1a1a, 0 8px 10px rgba(0,0,0,0.3)",
                        transform: "translateY(0)",
                        transition: "all 0.15s ease",
                        fontSize: "14px",
                        fontWeight: "500",
                        textShadow: "1px 1px 1px rgba(0,0,0,0.3)"
                    }}
                    onMouseOver={(e) => {
                        if (dynamicRendering) return;

                        e.currentTarget.style.backgroundColor = "#333";
                        e.currentTarget.style.transform = "translateY(2px)";
                        e.currentTarget.style.boxShadow = "0 4px 0 #1a1a1a, 0 6px 7px rgba(0,0,0,0.3)";
                    }}
                    onMouseOut={(e) => {
                        if (dynamicRendering) return;

                        e.currentTarget.style.backgroundColor = "#2a2a2a";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 6px 0 #1a1a1a, 0 8px 10px rgba(0,0,0,0.3)";
                    }}
                    onMouseDown={(e) => {
                        if (dynamicRendering) return;

                        e.currentTarget.style.transform = "translateY(6px)";
                        e.currentTarget.style.boxShadow = "0 0 0 #1a1a1a, 0 0 0 rgba(0,0,0,0.3)";
                    }}
                    onMouseUp={(e) => {
                        if (dynamicRendering) return;

                        e.currentTarget.style.transform = "translateY(2px)";
                        e.currentTarget.style.boxShadow = "0 4px 0 #1a1a1a, 0 6px 7px rgba(0,0,0,0.3)";
                    }}
                    ref={rotationButtonRef}
                    disabled={dynamicRendering}
                    onClick={() => {
                        rotation.current = rotation.current === 0 ? moonRotationSpeed : 0;
                        rotationButtonRef.current.textContent = `${rotation.current === 0 ? 'Start' : 'Pause'} Rotation`;
                    }}
                >
                    Start Rotation
                </button>
                <button
                    style={{
                        padding: "20px 25px",
                        backgroundColor: "#2a2a2a",
                        cursor: "pointer",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        boxShadow: "0 6px 0 #1a1a1a, 0 8px 10px rgba(0,0,0,0.3)",
                        transform: "translateY(0)",
                        transition: "all 0.15s ease",
                        fontSize: "14px",
                        fontWeight: "500",
                        textShadow: "1px 1px 1px rgba(0,0,0,0.3)"
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#333";
                        e.currentTarget.style.transform = "translateY(2px)";
                        e.currentTarget.style.boxShadow = "0 4px 0 #1a1a1a, 0 6px 7px rgba(0,0,0,0.3)";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "#2a2a2a";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 6px 0 #1a1a1a, 0 8px 10px rgba(0,0,0,0.3)";
                    }}
                    onMouseDown={(e) => {
                        e.currentTarget.style.transform = "translateY(6px)";
                        e.currentTarget.style.boxShadow = "0 0 0 #1a1a1a, 0 0 0 rgba(0,0,0,0.3)";
                    }}
                    onMouseUp={(e) => {
                        e.currentTarget.style.transform = "translateY(2px)";
                        e.currentTarget.style.boxShadow = "0 4px 0 #1a1a1a, 0 6px 7px rgba(0,0,0,0.3)";
                    }}
                    onClick={() => currentCamera.current = currentCamera.current === 'main' ? 'satellite' : 'main'}
                >
                    Switch Camera
                </button>
                <button
                    style={{
                        padding: "20px 25px",
                        backgroundColor: "#2a2a2a",
                        cursor: "pointer",
                        color: "white",
                        border: "none",
                        borderRadius: "8px",
                        boxShadow: "0 6px 0 #1a1a1a, 0 8px 10px rgba(0,0,0,0.3)",
                        transform: "translateY(0)",
                        transition: "all 0.15s ease",
                        fontSize: "14px",
                        fontWeight: "500",
                        textShadow: "1px 1px 1px rgba(0,0,0,0.3)"
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = "#333";
                        e.currentTarget.style.transform = "translateY(2px)";
                        e.currentTarget.style.boxShadow = "0 4px 0 #1a1a1a, 0 6px 7px rgba(0,0,0,0.3)";
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = "#2a2a2a";
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 6px 0 #1a1a1a, 0 8px 10px rgba(0,0,0,0.3)";
                    }}
                    onMouseDown={(e) => {
                        e.currentTarget.style.transform = "translateY(6px)";
                        e.currentTarget.style.boxShadow = "0 0 0 #1a1a1a, 0 0 0 rgba(0,0,0,0.3)";
                    }}
                    onMouseUp={(e) => {
                        e.currentTarget.style.transform = "translateY(2px)";
                        e.currentTarget.style.boxShadow = "0 4px 0 #1a1a1a, 0 6px 7px rgba(0,0,0,0.3)";
                    }}
                    onClick={handleReset}
                >
                    Reset View
                </button>
            </div>
            <LandmarkSidebar
                landmark={selectedLandmark}
                onClose={handleSidebarClose}
                imageUrl={imageUrl}
                getData={getData}
            />
            <ListSidebar
                onClose={handleListBarClose}
                category={category}
                setSelectedLandmark={setSelectedLandmark}
                setIsSidebarOpen={setIsSidebarOpen}
                setCategory={setCategory}
                setIsListbarOpen={setIsListbarOpen}
                controlsRef={controlsRef}
                isAnimatingRef={isAnimatingRef}
                rotation={rotation}
                rotationButtonRef={rotationButtonRef}
                moonRef={moonRef}
                dynamicMeshRef={dynamicMeshRef}
                overlayMeshRef={overlayMeshRef}
                currentCamera={currentCamera}
            />
            <ChemicalCompositionSidebar
                isOpen={isCompositionBarOpen}
                data={compositionData}
                onClose={handleCompositionBarClose}
            />
            <ProcessedDataSidebar
                isOpen={isProcessedDataSidebarOpen}
                data={processedData}
                onClose={handleProcessedDataBarClose}
            />
            <MapSwitchDropdown
                onCameraChange={setMapType}
                currentCamera={mapType}
                liveMode={liveMode}
                fileUploadMode={fileUploadMode}
            />

            <button
                style={{
                    backgroundColor: dynamicRendering ? '#4CAF50' : '#FF5722', // Green for dynamic, orange for static
                    color: 'white',
                    border: 'none',
                    padding: '8px 20px',
                    fontSize: '14px',
                    cursor: 'pointer',
                    width: "200px",
                    fontSize: "14px",
                    borderRadius: '5px',
                    position: "absolute",
                    left: "475px",
                    bottom: "12px"
                }}
                onClick={() => setDynamicRendering(!dynamicRendering)} // Toggle state on click
            >
                {dynamicRendering ? 'Dynamic Rendering' : 'Static Rendering'}
            </button>

            <InfernoScale scaleRightMargin={scaleRightMargin} minValue={scaleValues.min} maxValue={scaleValues.max} width={20} height={300} />

        </>
    );
};

export default Moon;