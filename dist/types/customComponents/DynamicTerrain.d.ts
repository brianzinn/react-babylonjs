import { Scene } from "@babylonjs/core/scene";
import { Camera } from "@babylonjs/core/Cameras/Camera";
import { SolidParticleSystem } from "@babylonjs/core/Particles/SolidParticleSystem";
import { Vector3, Color3 } from "@babylonjs/core/Maths/math";
import { Mesh } from "@babylonjs/core/Meshes/mesh";
export declare class DynamicTerrain {
    name: string;
    private _terrainSub;
    private _mapData;
    private _terrainIdx;
    private _mapSubX;
    private _mapSubZ;
    private _mapUVs;
    private _mapColors;
    private _mapNormals;
    private _SPmapData;
    private _SPcolorData;
    private _SPuvData;
    private _sps;
    private _spsTypeStartIndexes;
    private _nbAvailablePerType;
    private _spsNbPerType;
    private _particleDataStride;
    private _particleColorStride;
    private _particleUVStride;
    private _scene;
    private _subToleranceX;
    private _subToleranceZ;
    private _LODLimits;
    private _initialLOD;
    private _LODValue;
    private _cameraLODCorrection;
    private _LODPositiveX;
    private _LODNegativeX;
    private _LODPositiveZ;
    private _LODNegativeZ;
    private _terrainCamera;
    private _inverted;
    shiftFromCamera: {
        x: number;
        z: number;
    };
    private _indices;
    private _positions;
    private _normals;
    private _colors;
    private _uvs;
    private _deltaSubX;
    private _deltaSubZ;
    private _refreshEveryFrame;
    private _useCustomVertexFunction;
    private _computeNormals;
    private _datamap;
    private _uvmap;
    private _colormap;
    private _mapSPData;
    private _colorSPData;
    private _uvSPData;
    private _mapQuads;
    private static _vertex;
    private _intializedCallback;
    private _averageSubSizeX;
    private _averageSubSizeZ;
    private _terrainSizeX;
    private _terrainSizeZ;
    private _terrainHalfSizeX;
    private _terrainHalfSizeZ;
    private _centerWorld;
    private _centerLocal;
    private _mapSizeX;
    private _mapSizeZ;
    private _terrain;
    private _isAlwaysVisible;
    private _precomputeNormalsFromMap;
    private static _v1;
    private static _v2;
    private static _v3;
    private static _v4;
    private static _vAvB;
    private static _vAvC;
    private static _norm;
    private static _bbMin;
    private static _bbMax;
    /**
     * constructor
     * @param name
     * @param options
     * @param scene
     * @param {*} mapData the array of the map 3D data : x, y, z successive float values
     * @param {*} mapSubX the data map number of x subdivisions : integer
     * @param {*} mapSubZ the data map number of z subdivisions : integer
     * @param {*} terrainSub the wanted terrain number of subdivisions : integer, multiple of 2.
     * @param {*} mapUVs the array of the map UV data (optional) : u,v successive values, each between 0 and 1.
     * @param {*} mapColors the array of the map Color data (optional) : x, y, z successive float values.
     * @param {*} mapNormals the array of the map normal data (optional) : r,g,b successive values, each between 0 and 1.
     * @param {*} invertSide boolean, to invert the terrain mesh upside down. Default false.
     * @param {*} camera the camera to link the terrain to. Optional, by default the scene active camera
     * @param {*} SPmapData an array of arrays or Float32Arrays (one per particle type) of object data (position, rotation, scaling) on the map. Optional.
     * @param {*} sps the Solid Particle System used to manage the particles. Required when used with SPmapData.
     * @param {*} SPcolorData an array of arrays or Float32Arrays (one per particle type) of object colors on the map. One series of r, g, b, a floats per object. Optional, requires a SPmapData and a sps to be passed.
     * @param {*} SPuvData an array of arrays or Float32Arrays (one per particle type) of object uvs on the map. One series of x, y, z, w floats per object. Optional, requires a SPmapData and a sps to be passed.
     */
    constructor(name: string, options: {
        terrainSub?: number;
        mapData?: number[] | Float32Array;
        mapSubX?: number;
        mapSubZ?: number;
        mapUVs?: number[] | Float32Array;
        mapColors?: number[] | Float32Array;
        mapNormals?: number[] | Float32Array;
        invertSide?: boolean;
        camera?: Camera;
        SPmapData?: number[][] | Float32Array[];
        sps?: SolidParticleSystem;
        SPcolorData?: number[][] | Float32Array[];
        SPuvData?: number[][] | Float32Array[];
        intializedCallback?: any;
    }, scene: Scene);
    intialized(): void;
    /**
     * Updates the terrain position and shape according to the camera position.
     * `force` : boolean, forces the terrain update even if no camera position change.
     * Returns the terrain.
     */
    update(force: boolean): DynamicTerrain;
    private _updateTerrain;
    private _mod;
    /**
     * Updates the mesh terrain size according to the LOD limits and the camera position.
     * Returns the terrain.
     */
    updateTerrainSize(): DynamicTerrain;
    /**
     * Returns the altitude (float) at the coordinates (x, z) of the map.
     * @param x
     * @param z
     * @param {normal: Vector3} (optional)
     * If the optional object {normal: Vector3} is passed, then its property "normal" is updated with the normal vector value at the coordinates (x, z).
     */
    getHeightFromMap(x: number, z: number, options?: {
        normal: Vector3;
    }): number;
    /**
     * Static : Returns the altitude (float) at the coordinates (x, z) of the passed map.
     * @param x
     * @param z
     * @param mapSubX the number of points along the map width
     * @param mapSubX the number of points along the map height
     * @param {normal: Vector3} (optional)
     * @param inverted (optional boolean) is the terrain inverted
     * If the optional object {normal: Vector3} is passed, then its property "normal" is updated with the normal vector value at the coordinates (x, z).
     */
    static GetHeightFromMap(x: number, z: number, mapData: number[] | Float32Array, mapSubX: number, mapSubZ: number, options?: {
        normal: Vector3;
    }, inverted?: boolean): number;
    private static _GetHeightFromMap;
    /**
     * Static : Computes all the normals from the terrain data map  and stores them in the passed Float32Array reference.
     * This passed array must have the same size than the mapData array.
     */
    static ComputeNormalsFromMapToRef(mapData: number[] | Float32Array, mapSubX: number, mapSubZ: any, normals: number[] | Float32Array, inverted: boolean): void;
    /**
     * Computes all the map normals from the current terrain data map and sets them to the terrain.
     * Returns the terrain.
     */
    computeNormalsFromMap(): DynamicTerrain;
    /**
     * Returns true if the World coordinates (x, z) are in the current terrain.
     * @param x
     * @param z
     */
    contains(x: number, z: number): boolean;
    /**
           * Static : Returns a new data map from the passed heightmap image file.
           The parameters `width` and `height` (positive floats, default 300) set the map width and height sizes.
           * `subX` is the wanted number of points along the map width (default 100).
           * `subZ` is the wanted number of points along the map height (default 100).
           * The parameter `minHeight` (float, default 0) is the minimum altitude of the map.
           * The parameter `maxHeight` (float, default 1) is the maximum altitude of the map.
           * The parameter `colorFilter` (optional Color3, default (0.3, 0.59, 0.11) ) is the filter to apply to the image pixel colors to compute the height.
           * `onReady` is an optional callback function, called once the map is computed. It's passed the computed map.
           * `scene` is the Scene object whose database will store the downloaded image.
           */
    static CreateMapFromHeightMap(heightmapURL: string, options: {
        width: number;
        height: number;
        subX: number;
        subZ: number;
        minHeight: number;
        maxHeight: number;
        offsetX: number;
        offsetZ: number;
        onReady?: (map: number[] | Float32Array, subX: number, subZ: number) => void;
        colorFilter?: Color3;
    }, scene: Scene): Float32Array;
    /**
     * Static : Updates the passed array or Float32Array with a data map computed from the passed heightmap image file.
     *  The parameters `width` and `height` (positive floats, default 300) set the map width and height sizes.
     * `subX` is the wanted number of points along the map width (default 100).
     * `subZ` is the wanted number of points along the map height (default 100).
     * The parameter `minHeight` (float, default 0) is the minimum altitude of the map.
     * The parameter `maxHeight` (float, default 1) is the maximum altitude of the map.
     * The parameter `colorFilter` (optional Color3, default (0.3, 0.59, 0.11) ) is the filter to apply to the image pixel colors to compute the height.
     * `onReady` is an optional callback function, called once the map is computed. It's passed the computed map.
     * `scene` is the Scene object whose database will store the downloaded image.
     * The passed Float32Array must be the right size : 3 x subX x subZ.
     */
    static CreateMapFromHeightMapToRef(heightmapURL: string, options: {
        width: number;
        height: number;
        subX: number;
        subZ: number;
        minHeight: number;
        maxHeight: number;
        offsetX: number;
        offsetZ: number;
        onReady?: (map: number[] | Float32Array, subX: number, subZ: number) => void;
        colorFilter?: Color3;
    }, data: number[] | Float32Array, scene: Scene): void;
    /**
     * Static : Updates the passed arrays with UVs values to fit the whole map with subX points along its width and subZ points along its height.
     * The passed array must be the right size : subX x subZ x 2.
     */
    static CreateUVMapToRef(subX: number, subZ: number, mapUVs: number[] | Float32Array): void;
    /**
     * Static : Returns a new UV array with values to fit the whole map with subX points along its width and subZ points along its height.
     */
    static CreateUVMap(subX: number, subZ: number): Float32Array;
    /**
     * Computes and sets the terrain UV map with values to fit the whole map.
     * Returns the terrain.
     */
    createUVMap(): DynamicTerrain;
    /**
     * boolean : if the terrain must be recomputed every frame.
     */
    refreshEveryFrame: boolean;
    /**
     * Mesh : the logical terrain underlying mesh
     */
    readonly mesh: Mesh;
    /**
     * The camera the terrain is linked to
     */
    camera: Camera;
    /**
     * Number of cells flought over by the cam on the X axis before the terrain is updated.
     * Integer greater or equal to 1.
     */
    subToleranceX: number;
    /**
     * Number of cells flought over by the cam on the Z axis before the terrain is updated.
     * Integer greater or equal to 1. Default 1.
     */
    subToleranceZ: number;
    /**
     * Initial LOD factor value.
     * Integer greater or equal to 1. Default 1.
     */
    initialLOD: number;
    /**
     * Current LOD factor value : the lower factor in the terrain.
     * The LOD value is the sum of the initialLOD and the current cameraLODCorrection.
     * Integer greater or equal to 1. Default 1.
     */
    readonly LODValue: number;
    /**
     * Camera LOD correction : the factor to add to the initial LOD according to the camera position, movement, etc.
     * Positive integer (default 0)
     */
    cameraLODCorrection: number;
    /**
     * Boolean : Does the LOD apply only to the terrain right edge ?
     * Default : true
     */
    LODPositiveX: boolean;
    /**
     * Boolean : Does the LOD apply only to the terrain left edge ?
     * Default : true
     */
    LODNegativeX: boolean;
    /**
     * Boolean : Does the LOD apply only to the terrain upper edge ?
     * Default : true
     */
    LODPositiveZ: boolean;
    /**
     * Boolean : Does the LOD apply only to the terrain lower edge ?
     * Default : true
     */
    LODNegativeZ: boolean;
    /**
     * Average map and terrain subdivision size on X axis.
     * Returns a float.
     */
    readonly averageSubSizeX: number;
    /**
     * Average map and terrain subdivision size on Z axis.
     * Returns a float.
     */
    readonly averageSubSizeZ: number;
    /**
     * Current terrain size on the X axis.
     * Returns a float.
     */
    readonly terrainSizeX: number;
    /**
     * Current terrain half size on the X axis.
     * Returns a float.
     */
    readonly terrainHalfSizeX: number;
    /**
     * Current terrain size on the Z axis.
     * Returns a float.
     */
    readonly terrainSizeZ: number;
    /**
     * Current terrain half size on the Z axis.
     * Returns a float.
     */
    readonly terrainHalfSizeZ: number;
    /**
     * Current position of terrain center in its local space.
     * Returns a Vector3.
     */
    readonly centerLocal: Vector3;
    /**
     * Current position of terrain center in the World space.
     * Returns a Vector3.
     */
    readonly centerWorld: Vector3;
    /**
     * The array of the limit values to change the LOD factor.
     * Returns an array of integers or an empty array.
     * This array is always sorted in the descending order once set.
     */
    LODLimits: number[];
    /**
     * The data of the map.
     * A flat array (Float32Array recommeded) of successive 3D float coordinates (x, y, z).
     * This property can be set only if a mapData array was passed at construction time.
     */
    mapData: Float32Array | number[];
    /**
     * The number of points on the map width.
     * Positive Integer.
     */
    mapSubX: number;
    /**
     * The number of points on the map height .
     * Positive Integer.
     */
    mapSubZ: number;
    /**
     * The map of colors.
     * A flat array of successive floats between 0 and 1 as r,g,b values.
     * This property can be set only if a mapColors array was passed at construction time.
     */
    mapColors: Float32Array | number[];
    /**
     * The map of UVs.
     * A flat array of successive floats between 0 and 1 as (u, v) values.
     * This property can be set only if a mapUVs array was passed at construction time.
     */
    mapUVs: Float32Array | number[];
    /**
     * The map of normals.
     * A flat array of successive floats as normal vector coordinates (x, y, z) on each map point.
     */
    mapNormals: Float32Array | number[];
    /**
     * Boolean : must the normals be recomputed on each terrain update (default : false).
     * By default, all the map normals are pre-computed on terrain creation.
     */
    computeNormals: boolean;
    /**
     * Boolean : will the custom function updateVertex() be called on each terrain update ?
     * Default false
     */
    useCustomVertexFunction: boolean;
    /**
     * Boolean : is the terrain always directly selected for rendering ?
     */
    isAlwaysVisible: boolean;
    /**
     * Boolean : when assigning a new data map to the existing, shall the normals be automatically precomputed once ?
     * Default false.
     */
    precomputeNormalsFromMap: boolean;
    /**
     * Custom function called for each terrain vertex and passed the :
     * - current vertex {position: Vector3, uvs: Vector2, color: Color4, lodX: integer, lodZ: integer, worldPosition: Vector3, mapIndex: integer}
     * - i : the vertex index on the terrain x axis
     * - j : the vertex index on the terrain x axis
     * This function is called only if the property useCustomVertexFunction is set to true.
     */
    updateVertex(vertex: any, i: any, j: any): void;
    /**
     * Custom function called each frame and passed the terrain camera reference.
     * This should return a positive integer or zero.
     * Returns zero by default.
     */
    updateCameraLOD(terrainCamera: Camera): number;
    /**
     * Custom function called before each terrain update.
     * The value of reference is passed.
     * Does nothing by default.
     */
    beforeUpdate(refreshEveryFrame: boolean): void;
    /**
     * Custom function called after each terrain update.
     * The value of refreshEveryFrame is passed.
     * Does nothing by default.
     */
    afterUpdate(refreshEveryFrame: boolean): void;
}
