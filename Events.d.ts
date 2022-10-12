/**
 * **Contexts**: Gameplay, UI
 * 
 * ---
 * Events defined by C++ code in Civ 6's binaries
 */
declare const Events:
{
    /** 
     * *GameCoreEvent*
     */
    AllianceAvailable: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, otherplayerID: number, allianceIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, otherplayerID: number, allianceIndex: number) => void,
        CallImmediate: (this: void, playerID: number, otherplayerID: number, allianceIndex: number) => void
    } & ((this: void, playerID: number, otherplayerID: number, allianceIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    AllianceEnded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, otherplayerID: number, allianceIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, otherplayerID: number, allianceIndex: number) => void,
        CallImmediate: (this: void, playerID: number, otherplayerID: number, allianceIndex: number) => void
    } & ((this: void, playerID: number, otherplayerID: number, allianceIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    AnarchyBegins: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    AnarchyEnds: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    BarbarianRaidStarted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    BarbarianSpottedCity: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, cityOwner: number, cityID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, cityOwner: number, cityID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, cityOwner: number, cityID: number) => void
    } & ((this: void, playerID: number, unitID: number, cityOwner: number, cityID: number) => void),

    /** 
     * *LocalMachineEvent*
     */
    BeginWonderReveal: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    BeliefAdded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, beliefID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, beliefID: number) => void,
        CallImmediate: (this: void, playerID: number, beliefID: number) => void
    } & ((this: void, playerID: number, beliefID: number) => void),

    /** 
     * *GameCoreEvent*
     *
     * ---
     * Triggers when construction of a building starts.
     */
    BuildingAddedToMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number, buildingID: number, playerID: number, percentComplete: number, isPillaged: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number, buildingID: number, playerID: number, percentComplete: number, isPillaged: boolean) => void,
        CallImmediate: (this: void, x: number, y: number, buildingID: number, playerID: number, percentComplete: number, isPillaged: boolean) => void
    } & ((this: void, x: number, y: number, buildingID: number, playerID: number, percentComplete: number, isPillaged: boolean) => void),

    /** 
     * *GameCoreEvent*
     */
    BuildingBuildProgressChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    BuildingChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number, buildingID: number, playerID: number, percentComplete: number, unknown: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number, buildingID: number, playerID: number, percentComplete: number, unknown: number) => void,
        CallImmediate: (this: void, x: number, y: number, buildingID: number, playerID: number, percentComplete: number, unknown: number) => void
    } & ((this: void, x: number, y: number, buildingID: number, playerID: number, percentComplete: number, unknown: number) => void),

    /** 
     * *GameCoreEvent*
     */
    BuildingPillaged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    BuildingRemovedFromMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number) => void,
        CallImmediate: (this: void, x: number, y: number) => void
    } & ((this: void, x: number, y: number) => void),

    /** 
     * *GameCoreEvent*
     */
    BuildingVisibilityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    CacheUpdate: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * **
     */
    CameraUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, vFocusX: number, vFocusY: number, fZoomLevel: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, vFocusX: number, vFocusY: number, fZoomLevel: number) => void,
        CallImmediate: (this: void, vFocusX: number, vFocusY: number, fZoomLevel: number) => void
    } & ((this: void, vFocusX: number, vFocusY: number, fZoomLevel: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CapitalCityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number) => void
    } & ((this: void, playerID: number, cityID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityAddedToMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, x: number, y: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number, x: number, y: number) => void
    } & ((this: void, playerID: number, cityID: number, x: number, y: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    CityCommandStarted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, cityOwnerID: number, cityID: number, districtOwnerID: number, districtID: number, commandType: CityCommandTypes, data1: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, cityOwnerID: number, cityID: number, districtOwnerID: number, districtID: number, commandType: CityCommandTypes, data1: number) => void,
        CallImmediate: (this: void, cityOwnerID: number, cityID: number, districtOwnerID: number, districtID: number, commandType: CityCommandTypes, data1: number) => void
    } & ((this: void, cityOwnerID: number, cityID: number, districtOwnerID: number, districtID: number, commandType: CityCommandTypes, data1: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityDefenseStatusChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, value: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, value: number) => void,
        CallImmediate: (this: void, playerID: number, value: number) => void
    } & ((this: void, playerID: number, value: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityFocusChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number) => void
    } & ((this: void, playerID: number, cityID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityInitialized: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, x: number, y: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number, x: number, y: number) => void
    } & ((this: void, playerID: number, cityID: number, x: number, y: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityLiberated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number) => void
    } & ((this: void, playerID: number, cityID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityLoyaltyChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number) => void
    } & ((this: void, playerID: number, cityID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityMadePurchase: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, x: number, y: number, eventSubType: EventSubTypes, purchasableItemIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, x: number, y: number, eventSubType: EventSubTypes, purchasableItemIndex: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number, x: number, y: number, eventSubType: EventSubTypes, purchasableItemIndex: number) => void
    } & ((this: void, playerID: number, cityID: number, x: number, y: number, eventSubType: EventSubTypes, purchasableItemIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityNameChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number) => void
    } & ((this: void, playerID: number, cityID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityOccupationChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number) => void
    } & ((this: void, playerID: number, cityID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityPopulationChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, cityPopulation: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, cityPopulation: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number, cityPopulation: number) => void
    } & ((this: void, playerID: number, cityID: number, cityPopulation: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityProductionChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, productionID: number, objectID: number, wasCancelled: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, productionID: number, objectID: number, wasCancelled: boolean) => void,
        CallImmediate: (this: void, playerID: number, cityID: number, productionID: number, objectID: number, wasCancelled: boolean) => void
    } & ((this: void, playerID: number, cityID: number, productionID: number, objectID: number, wasCancelled: boolean) => void),

    /** 
     * *GameCoreEvent*
     */
    CityProductionCompleted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, constructionType: number, unitID: number, wasCancelled: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, constructionType: number, unitID: number, wasCancelled: boolean) => void,
        CallImmediate: (this: void, playerID: number, cityID: number, constructionType: number, unitID: number, wasCancelled: boolean) => void
    } & ((this: void, playerID: number, cityID: number, constructionType: number, unitID: number, wasCancelled: boolean) => void),

    /** 
     * *GameCoreEvent*
     */
    CityProductionUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, objectID: number, productionID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, objectID: number, productionID: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number, objectID: number, productionID: number) => void
    } & ((this: void, playerID: number, cityID: number, objectID: number, productionID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityProjectCompleted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, projectID: number, buildingIndex: number, x: number, y: number, isCancelled: any) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, projectID: number, buildingIndex: number, x: number, y: number, isCancelled: any) => void,
        CallImmediate: (this: void, playerID: number, cityID: number, projectID: number, buildingIndex: number, x: number, y: number, isCancelled: any) => void
    } & ((this: void, playerID: number, cityID: number, projectID: number, buildingIndex: number, x: number, y: number, isCancelled: any) => void),

    /** 
     * *GameCoreEvent*
     */
    CityReligionChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, eVisibility: number, otherCityID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, eVisibility: number, otherCityID: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number, eVisibility: number, otherCityID: number) => void
    } & ((this: void, playerID: number, cityID: number, eVisibility: number, otherCityID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityReligionFollowersChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, eVisibility: number, influencingCItyID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, eVisibility: number, influencingCItyID: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number, eVisibility: number, influencingCItyID: number) => void
    } & ((this: void, playerID: number, cityID: number, eVisibility: number, influencingCItyID: number) => void),

    /** 
     * *GameCoreEvent*
     *
     * ---
     * Triggers when a city is removed from the map or conquered (but not gifted).
Instead use Events.CityCommandStarted if the desired purpose is to check for a city being razed.
     */
    CityRemovedFromMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number) => void
    } & ((this: void, playerID: number, cityID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CitySiegeStatusChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, isBesieged: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, isBesieged: boolean) => void,
        CallImmediate: (this: void, playerID: number, cityID: number, isBesieged: boolean) => void
    } & ((this: void, playerID: number, cityID: number, isBesieged: boolean) => void),

    /** 
     * *GameCoreEvent*
     *
     * ---
     * If triggered by a player swapping tiles between cities in their empire, it will fire twice, once for each city
     */
    CityTileOwnershipChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, x: number, y: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number, x: number, y: number) => void
    } & ((this: void, playerID: number, cityID: number, x: number, y: number) => void),

    /** 
     * *GameCoreEvent*
     *
     * ---
     * Triggers after Events.CityTileOwnershipChanged
     */
    CityTransfered: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, newOwnerID: number, cityID: number, oldOwnerID: number, transferType: CityTransferTypes) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, newOwnerID: number, cityID: number, oldOwnerID: number, transferType: CityTransferTypes) => void,
        CallImmediate: (this: void, newOwnerID: number, cityID: number, oldOwnerID: number, transferType: CityTransferTypes) => void
    } & ((this: void, newOwnerID: number, cityID: number, oldOwnerID: number, transferType: CityTransferTypes) => void),

    /** 
     * *GameCoreEvent*
     */
    CityUnitsChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number) => void
    } & ((this: void, playerID: number, cityID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityVisibilityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, eVisibility: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, eVisibility: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number, eVisibility: number) => void
    } & ((this: void, playerID: number, cityID: number, eVisibility: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CityWorkerChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ownerPlayerID: number, cityID: number, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ownerPlayerID: number, cityID: number, x: number, y: number) => void,
        CallImmediate: (this: void, ownerPlayerID: number, cityID: number, x: number, y: number) => void
    } & ((this: void, ownerPlayerID: number, cityID: number, x: number, y: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CivicBoostTriggered: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, civicIndex: number, unknownA: number, unknownB: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, civicIndex: number, unknownA: number, unknownB: number) => void,
        CallImmediate: (this: void, playerID: number, civicIndex: number, unknownA: number, unknownB: number) => void
    } & ((this: void, playerID: number, civicIndex: number, unknownA: number, unknownB: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CivicChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, civicIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, civicIndex: number) => void,
        CallImmediate: (this: void, playerID: number, civicIndex: number) => void
    } & ((this: void, playerID: number, civicIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CivicCompleted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, civicIndex: number, isCancelled: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, civicIndex: number, isCancelled: number) => void,
        CallImmediate: (this: void, playerID: number, civicIndex: number, isCancelled: number) => void
    } & ((this: void, playerID: number, civicIndex: number, isCancelled: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CivicQueueChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    CivicsUnlocked: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * **
     */
    CliffAddedToMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * **
     */
    CliffRemovedFromMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    Combat: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, combatResult: AnyTable) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, combatResult: AnyTable) => void,
        CallImmediate: (this: void, combatResult: AnyTable) => void
    } & ((this: void, combatResult: AnyTable) => void),

    /** 
     * *GameCoreEvent*
     */
    CulturalIdentityCitizenConverted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    CulturalIdentityCityConverted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, influencingPlayerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, influencingPlayerID: number) => void,
        CallImmediate: (this: void, playerID: number, cityID: number, influencingPlayerID: number) => void
    } & ((this: void, playerID: number, cityID: number, influencingPlayerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    CulturalIdentityConversionOutcomeChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, conversionOutcome: IdentityConversionOutcome) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, conversionOutcome: IdentityConversionOutcome) => void,
        CallImmediate: (this: void, playerID: number, cityID: number, conversionOutcome: IdentityConversionOutcome) => void
    } & ((this: void, playerID: number, cityID: number, conversionOutcome: IdentityConversionOutcome) => void),

    /** 
     * *GameCoreEvent*
     */
    CultureChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    CultureYieldChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number) => void,
        CallImmediate: (this: void, playerID: number) => void
    } & ((this: void, playerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    DiplomacyDealEnacted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    DiplomacyDealExpired: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    DiplomacyDeclareWar: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, firstPlayerID: number, secondPlayerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, firstPlayerID: number, secondPlayerID: number) => void,
        CallImmediate: (this: void, firstPlayerID: number, secondPlayerID: number) => void
    } & ((this: void, firstPlayerID: number, secondPlayerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    DiplomacyIncomingDeal: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, fromPlayerID: number, toPlayerID: number, actionType: DiplomacyActionTypes) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, fromPlayerID: number, toPlayerID: number, actionType: DiplomacyActionTypes) => void,
        CallImmediate: (this: void, fromPlayerID: number, toPlayerID: number, actionType: DiplomacyActionTypes) => void
    } & ((this: void, fromPlayerID: number, toPlayerID: number, actionType: DiplomacyActionTypes) => void),

    /** 
     * *GameCoreEvent*
     */
    DiplomacyMakePeace: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, firstPlayerID: number, secondPlayerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, firstPlayerID: number, secondPlayerID: number) => void,
        CallImmediate: (this: void, firstPlayerID: number, secondPlayerID: number) => void
    } & ((this: void, firstPlayerID: number, secondPlayerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    DiplomacyMeet: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, player1ID: number, player2ID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, player1ID: number, player2ID: number) => void,
        CallImmediate: (this: void, player1ID: number, player2ID: number) => void
    } & ((this: void, player1ID: number, player2ID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    DiplomacyMeetMajorMinor: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    DiplomacyMeetMajors: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    DiplomacyRefusePeace: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, actingPlayerID: number, reactingPlayerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, actingPlayerID: number, reactingPlayerID: number) => void,
        CallImmediate: (this: void, actingPlayerID: number, reactingPlayerID: number) => void
    } & ((this: void, actingPlayerID: number, reactingPlayerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    DiplomacyRelationshipChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, player1ID: number, player2ID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, player1ID: number, player2ID: number) => void,
        CallImmediate: (this: void, player1ID: number, player2ID: number) => void
    } & ((this: void, player1ID: number, player2ID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    DiplomacySessionClosed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, sessionID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, sessionID: number) => void,
        CallImmediate: (this: void, sessionID: number) => void
    } & ((this: void, sessionID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    DiplomacyStatement: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, actingPlayerID: number, reactingPlayerID: number, values: AnyTable) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, actingPlayerID: number, reactingPlayerID: number, values: AnyTable) => void,
        CallImmediate: (this: void, actingPlayerID: number, reactingPlayerID: number, values: AnyTable) => void
    } & ((this: void, actingPlayerID: number, reactingPlayerID: number, values: AnyTable) => void),

    /** 
     * *GameCoreEvent*
     */
    DistrictAddedToMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, districtID: number, cityID: number, x: number, y: number, districtIndex: number, percentComplete: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, districtID: number, cityID: number, x: number, y: number, districtIndex: number, percentComplete: number) => void,
        CallImmediate: (this: void, playerID: number, districtID: number, cityID: number, x: number, y: number, districtIndex: number, percentComplete: number) => void
    } & ((this: void, playerID: number, districtID: number, cityID: number, x: number, y: number, districtIndex: number, percentComplete: number) => void),

    /** 
     * **
     */
    DistrictBuildingRestore: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    DistrictBuildProgressChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, districtID: number, cityID: number, x: number, y: number, districtIndex: number, era: number, civilizationIndex: number, percentComplete: number, appeal: number, isPillaged: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, districtID: number, cityID: number, x: number, y: number, districtIndex: number, era: number, civilizationIndex: number, percentComplete: number, appeal: number, isPillaged: boolean) => void,
        CallImmediate: (this: void, playerID: number, districtID: number, cityID: number, x: number, y: number, districtIndex: number, era: number, civilizationIndex: number, percentComplete: number, appeal: number, isPillaged: boolean) => void
    } & ((this: void, playerID: number, districtID: number, cityID: number, x: number, y: number, districtIndex: number, era: number, civilizationIndex: number, percentComplete: number, appeal: number, isPillaged: boolean) => void),

    /** 
     * *GameCoreEvent*
     */
    DistrictCombatChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, eventSubType: EventSubTypes, playerID: number, districtID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, eventSubType: EventSubTypes, playerID: number, districtID: number) => void,
        CallImmediate: (this: void, eventSubType: EventSubTypes, playerID: number, districtID: number) => void
    } & ((this: void, eventSubType: EventSubTypes, playerID: number, districtID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    DistrictDamageChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, districtID: number, defenseType: DefenseTypes, newDamage: number, oldDamage: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, districtID: number, defenseType: DefenseTypes, newDamage: number, oldDamage: number) => void,
        CallImmediate: (this: void, playerID: number, districtID: number, defenseType: DefenseTypes, newDamage: number, oldDamage: number) => void
    } & ((this: void, playerID: number, districtID: number, defenseType: DefenseTypes, newDamage: number, oldDamage: number) => void),

    /** 
     * *GameCoreEvent*
     */
    DistrictPillaged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ownerID: number, districtID: number, cityID: number, x: number, y: number, districtIndex: number, percentComplete: number, isPillaged: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ownerID: number, districtID: number, cityID: number, x: number, y: number, districtIndex: number, percentComplete: number, isPillaged: boolean) => void,
        CallImmediate: (this: void, ownerID: number, districtID: number, cityID: number, x: number, y: number, districtIndex: number, percentComplete: number, isPillaged: boolean) => void
    } & ((this: void, ownerID: number, districtID: number, cityID: number, x: number, y: number, districtIndex: number, percentComplete: number, isPillaged: boolean) => void),

    /** 
     * *GameCoreEvent*
     */
    DistrictRemovedFromMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, districtID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, districtID: number) => void,
        CallImmediate: (this: void, playerID: number, districtID: number) => void
    } & ((this: void, playerID: number, districtID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    DistrictUnitsChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, districtID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, districtID: number) => void,
        CallImmediate: (this: void, playerID: number, districtID: number) => void
    } & ((this: void, playerID: number, districtID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    DistrictVisibilityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, districtID: number, eVisibility: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, districtID: number, eVisibility: number) => void,
        CallImmediate: (this: void, playerID: number, districtID: number, eVisibility: number) => void
    } & ((this: void, playerID: number, districtID: number, eVisibility: number) => void),

    /** 
     * *GameCoreEvent*
     */
    EmergenciesUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    EmergencyAvailable: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, targetPlayerID: number, emergencyIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, targetPlayerID: number, emergencyIndex: number) => void,
        CallImmediate: (this: void, targetPlayerID: number, emergencyIndex: number) => void
    } & ((this: void, targetPlayerID: number, emergencyIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    EmergencyAvailableParticipant: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    EmergencyCompleted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, targetPlayerID: number, turn: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, targetPlayerID: number, turn: number) => void,
        CallImmediate: (this: void, playerID: number, targetPlayerID: number, turn: number) => void
    } & ((this: void, playerID: number, targetPlayerID: number, turn: number) => void),

    /** 
     * *GameCoreEvent*
     */
    EmergencyCompleteParticipants: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    EmergencyRejected: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    EmergencyStarted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, targetPlayerID: number, turn: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, targetPlayerID: number, turn: number) => void,
        CallImmediate: (this: void, playerID: number, targetPlayerID: number, turn: number) => void
    } & ((this: void, playerID: number, targetPlayerID: number, turn: number) => void),

    /** 
     * *GameCoreEvent*
     */
    EndTurnBlockingChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, prevEndTurnBlockingType: EndTurnBlockingTypes, newEndTurnBlockingType: EndTurnBlockingTypes) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, prevEndTurnBlockingType: EndTurnBlockingTypes, newEndTurnBlockingType: EndTurnBlockingTypes) => void,
        CallImmediate: (this: void, prevEndTurnBlockingType: EndTurnBlockingTypes, newEndTurnBlockingType: EndTurnBlockingTypes) => void
    } & ((this: void, prevEndTurnBlockingType: EndTurnBlockingTypes, newEndTurnBlockingType: EndTurnBlockingTypes) => void),

    /** 
     * *GameCoreEvent*
     */
    EndTurnDirty: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    EndWonderReveal: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    EventPopupRequest: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, popupData: AnyTable) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, popupData: AnyTable) => void,
        CallImmediate: (this: void, popupData: AnyTable) => void
    } & ((this: void, popupData: AnyTable) => void),

    /** 
     * *GameCoreEvent*
     */
    EventSoundRequest: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, sound: string, playerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, sound: string, playerID: number) => void,
        CallImmediate: (this: void, sound: string, playerID: number) => void
    } & ((this: void, sound: string, playerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    FaithChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, yield: number, balance: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, yield: number, balance: number) => void,
        CallImmediate: (this: void, playerID: number, yield: number, balance: number) => void
    } & ((this: void, playerID: number, yield: number, balance: number) => void),

    /** 
     * *GameCoreEvent*
     */
    FeatureAddedToMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number) => void,
        CallImmediate: (this: void, x: number, y: number) => void
    } & ((this: void, x: number, y: number) => void),

    /** 
     * *GameCoreEvent*
     */
    FeatureChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    FeatureRemovedFromMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number) => void,
        CallImmediate: (this: void, x: number, y: number) => void
    } & ((this: void, x: number, y: number) => void),

    /** 
     * **
     */
    FeatureVisibilityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    GameEraChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, previousEraIndex: number, newEraIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, previousEraIndex: number, newEraIndex: number) => void,
        CallImmediate: (this: void, previousEraIndex: number, newEraIndex: number) => void
    } & ((this: void, previousEraIndex: number, newEraIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    GameHistoryMomentRecorded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, momentIndex: number, unknown: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, momentIndex: number, unknown: number) => void,
        CallImmediate: (this: void, momentIndex: number, unknown: number) => void
    } & ((this: void, momentIndex: number, unknown: number) => void),

    /** 
     * *GameCoreEvent*
     */
    GoodyHutReward: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, unknown1: number, unknown2: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, unknown1: number, unknown2: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, unknown1: number, unknown2: number) => void
    } & ((this: void, playerID: number, unitID: number, unknown1: number, unknown2: number) => void),

    /** 
     * *GameCoreEvent*
     */
    GovDistrictPolicyLocked: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    GovDistrictPolicyUnlocked: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, policyIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, policyIndex: number) => void,
        CallImmediate: (this: void, playerID: number, policyIndex: number) => void
    } & ((this: void, playerID: number, policyIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    GovernmentChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, governmentID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, governmentID: number) => void,
        CallImmediate: (this: void, playerID: number, governmentID: number) => void
    } & ((this: void, playerID: number, governmentID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    GovernmentPolicyChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, policyID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, policyID: number) => void,
        CallImmediate: (this: void, playerID: number, policyID: number) => void
    } & ((this: void, playerID: number, policyID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    GovernmentPolicyObsoleted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number) => void,
        CallImmediate: (this: void, playerID: number) => void
    } & ((this: void, playerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    GovernorAppointed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, governorID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, governorID: number) => void,
        CallImmediate: (this: void, playerID: number, governorID: number) => void
    } & ((this: void, playerID: number, governorID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    GovernorAssigned: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, cityPlayerID: number, cityID: number, governorPlayerID: number, governorID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, cityPlayerID: number, cityID: number, governorPlayerID: number, governorID: number) => void,
        CallImmediate: (this: void, cityPlayerID: number, cityID: number, governorPlayerID: number, governorID: number) => void
    } & ((this: void, cityPlayerID: number, cityID: number, governorPlayerID: number, governorID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    GovernorChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, governorID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, governorID: number) => void,
        CallImmediate: (this: void, playerID: number, governorID: number) => void
    } & ((this: void, playerID: number, governorID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    GovernorEstablished: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    GovernorPointsChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, delta: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, delta: number) => void,
        CallImmediate: (this: void, playerID: number, delta: number) => void
    } & ((this: void, playerID: number, delta: number) => void),

    /** 
     * *GameCoreEvent*
     */
    GovernorPromoted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, governorIndex: number, promotionIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, governorIndex: number, promotionIndex: number) => void,
        CallImmediate: (this: void, playerID: number, governorIndex: number, promotionIndex: number) => void
    } & ((this: void, playerID: number, governorIndex: number, promotionIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    GreatPeoplePointsChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number) => void,
        CallImmediate: (this: void, playerID: number) => void
    } & ((this: void, playerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    GreatPeopleTimelineChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    GreatWorkCreated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, cityPlotX: number, cityPlotY: number, buildingID: number, greatWorkID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, cityPlotX: number, cityPlotY: number, buildingID: number, greatWorkID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, cityPlotX: number, cityPlotY: number, buildingID: number, greatWorkID: number) => void
    } & ((this: void, playerID: number, unitID: number, cityPlotX: number, cityPlotY: number, buildingID: number, greatWorkID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    GreatWorkMoved: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, fromCityPlayerID: number, fromCityID: number, toCityPlayerID: number, toCityID: number, buildingID: number, greatWorkTypeIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, fromCityPlayerID: number, fromCityID: number, toCityPlayerID: number, toCityID: number, buildingID: number, greatWorkTypeIndex: number) => void,
        CallImmediate: (this: void, fromCityPlayerID: number, fromCityID: number, toCityPlayerID: number, toCityID: number, buildingID: number, greatWorkTypeIndex: number) => void
    } & ((this: void, fromCityPlayerID: number, fromCityID: number, toCityPlayerID: number, toCityID: number, buildingID: number, greatWorkTypeIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    ImprovementActivated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number, unitOwner: any, unitID: number, improvementType: any, improvementOwner: any, activationType: any) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number, unitOwner: any, unitID: number, improvementType: any, improvementOwner: any, activationType: any) => void,
        CallImmediate: (this: void, x: number, y: number, unitOwner: any, unitID: number, improvementType: any, improvementOwner: any, activationType: any) => void
    } & ((this: void, x: number, y: number, unitOwner: any, unitID: number, improvementType: any, improvementOwner: any, activationType: any) => void),

    /** 
     * *GameCoreEvent*
     */
    ImprovementAddedToMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number, improvementIndex: number, playerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number, improvementIndex: number, playerID: number) => void,
        CallImmediate: (this: void, x: number, y: number, improvementIndex: number, playerID: number) => void
    } & ((this: void, x: number, y: number, improvementIndex: number, playerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    ImprovementChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number, improvementIndex: number, improvementPlayerID: number, resourceIndex: number, isPillaged: boolean, isWorked: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number, improvementIndex: number, improvementPlayerID: number, resourceIndex: number, isPillaged: boolean, isWorked: boolean) => void,
        CallImmediate: (this: void, x: number, y: number, improvementIndex: number, improvementPlayerID: number, resourceIndex: number, isPillaged: boolean, isWorked: boolean) => void
    } & ((this: void, x: number, y: number, improvementIndex: number, improvementPlayerID: number, resourceIndex: number, isPillaged: boolean, isWorked: boolean) => void),

    /** 
     * *GameCoreEvent*
     */
    ImprovementOwnershipChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    ImprovementRemovedFromMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number, owningPlayerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number, owningPlayerID: number) => void,
        CallImmediate: (this: void, x: number, y: number, owningPlayerID: number) => void
    } & ((this: void, x: number, y: number, owningPlayerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    ImprovementVisibilityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number, improvementIndex: number, eVisibility: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number, improvementIndex: number, eVisibility: number) => void,
        CallImmediate: (this: void, x: number, y: number, improvementIndex: number, eVisibility: number) => void
    } & ((this: void, x: number, y: number, improvementIndex: number, eVisibility: number) => void),

    /** 
     * *GameCoreEvent*
     */
    InfluenceChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    InfluenceGiven: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, citystateID: number, playerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, citystateID: number, playerID: number) => void,
        CallImmediate: (this: void, citystateID: number, playerID: number) => void
    } & ((this: void, citystateID: number, playerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    LevyCounterChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, originalOwnerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, originalOwnerID: number) => void,
        CallImmediate: (this: void, originalOwnerID: number) => void
    } & ((this: void, originalOwnerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    LocalPlayerChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, localPlayerID: number, prevLocalPlayerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, localPlayerID: number, prevLocalPlayerID: number) => void,
        CallImmediate: (this: void, localPlayerID: number, prevLocalPlayerID: number) => void
    } & ((this: void, localPlayerID: number, prevLocalPlayerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    LocalPlayerTurnBegin: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    LocalPlayerTurnEnd: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    LocalPlayerTurnUnready: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    MapYieldsChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    NationalParkAdded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    NationalParkRemoved: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    NationalParkVisibilityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    NaturalWonderRevealed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number, featureIndex: number, wasFirstToFind: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number, featureIndex: number, wasFirstToFind: boolean) => void,
        CallImmediate: (this: void, x: number, y: number, featureIndex: number, wasFirstToFind: boolean) => void
    } & ((this: void, x: number, y: number, featureIndex: number, wasFirstToFind: boolean) => void),

    /** 
     * *GameCoreEvent*
     */
    NotificationActivated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, notificationID: number, wasActivatedByUser: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, notificationID: number, wasActivatedByUser: boolean) => void,
        CallImmediate: (this: void, playerID: number, notificationID: number, wasActivatedByUser: boolean) => void
    } & ((this: void, playerID: number, notificationID: number, wasActivatedByUser: boolean) => void),

    /** 
     * *GameCoreEvent*
     */
    NotificationAdded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, notificationID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, notificationID: number) => void,
        CallImmediate: (this: void, playerID: number, notificationID: number) => void
    } & ((this: void, playerID: number, notificationID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    NotificationDismissed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, notificationID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, notificationID: number) => void,
        CallImmediate: (this: void, playerID: number, notificationID: number) => void
    } & ((this: void, playerID: number, notificationID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    NotificationRefreshRequested: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    ObjectPairing: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, eventSubType: EventSubTypes, parentOwner: any, parentType: any, parentID: number, childOwner: any, childType: any, childID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, eventSubType: EventSubTypes, parentOwner: any, parentType: any, parentID: number, childOwner: any, childType: any, childID: number) => void,
        CallImmediate: (this: void, eventSubType: EventSubTypes, parentOwner: any, parentType: any, parentID: number, childOwner: any, childType: any, childID: number) => void
    } & ((this: void, eventSubType: EventSubTypes, parentOwner: any, parentType: any, parentID: number, childOwner: any, childType: any, childID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    OnAiAdvisorUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitGreatPersonActivated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, unitOwner: number, unitID: number, greatPersonClassID: number, greatPersonIndividualID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, unitOwner: number, unitID: number, greatPersonClassID: number, greatPersonIndividualID: number) => void,
        CallImmediate: (this: void, unitOwner: number, unitID: number, greatPersonClassID: number, greatPersonIndividualID: number) => void
    } & ((this: void, unitOwner: number, unitID: number, greatPersonClassID: number, greatPersonIndividualID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    PantheonFounded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: any) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: any) => void,
        CallImmediate: (this: void, playerID: any) => void
    } & ((this: void, playerID: any) => void),

    /** 
     * *GameCoreEvent*
     */
    PhaseBegin: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    PhaseEnd: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerAgeChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number) => void,
        CallImmediate: (this: void, playerID: number) => void
    } & ((this: void, playerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerBordersChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerDarkAgeChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number) => void,
        CallImmediate: (this: void, playerID: number) => void
    } & ((this: void, playerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerDefeat: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, defeatIndex: any, eventID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, defeatIndex: any, eventID: number) => void,
        CallImmediate: (this: void, playerID: number, defeatIndex: any, eventID: number) => void
    } & ((this: void, playerID: number, defeatIndex: any, eventID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerDestroyed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerEraChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, eraIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, eraIndex: number) => void,
        CallImmediate: (this: void, playerID: number, eraIndex: number) => void
    } & ((this: void, playerID: number, eraIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerEraScoreChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, amountAwarded: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, amountAwarded: number) => void,
        CallImmediate: (this: void, playerID: number, amountAwarded: number) => void
    } & ((this: void, playerID: number, amountAwarded: number) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerEraTransitionBegins: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number) => void,
        CallImmediate: (this: void, playerID: number) => void
    } & ((this: void, playerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerOperationComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *PlayerGameCoreEvent*
     */
    PlayerResourceChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ownerPlayerID: number, resourceTypeID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ownerPlayerID: number, resourceTypeID: number) => void,
        CallImmediate: (this: void, ownerPlayerID: number, resourceTypeID: number) => void
    } & ((this: void, ownerPlayerID: number, resourceTypeID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerRestored: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerRevived: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerTurnActivated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, isFirstTurn: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, isFirstTurn: boolean) => void,
        CallImmediate: (this: void, playerID: number, isFirstTurn: boolean) => void
    } & ((this: void, playerID: number, isFirstTurn: boolean) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerTurnDeactivated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number) => void,
        CallImmediate: (this: void, playerID: number) => void
    } & ((this: void, playerID: number) => void),

    /** 
     * **
     */
    PlayerVictory: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    PlotAppealChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    PlotMarkerChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number) => void,
        CallImmediate: (this: void, x: number, y: number) => void
    } & ((this: void, x: number, y: number) => void),

    /** 
     * *GameCoreEvent*
     */
    PlotPropertyChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number) => void,
        CallImmediate: (this: void, x: number, y: number) => void
    } & ((this: void, x: number, y: number) => void),

    /** 
     * *GameCoreEvent*
     */
    PlotVisibilityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number, visibilityType: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number, visibilityType: number) => void,
        CallImmediate: (this: void, x: number, y: number, visibilityType: number) => void
    } & ((this: void, x: number, y: number, visibilityType: number) => void),

    /** 
     * *GameCoreEvent*
     */
    PlotYieldChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number) => void,
        CallImmediate: (this: void, x: number, y: number) => void
    } & ((this: void, x: number, y: number) => void),

    /** 
     * **
     */
    PolicyChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, policyID: number, wasEnacted: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, policyID: number, wasEnacted: boolean) => void,
        CallImmediate: (this: void, playerID: number, policyID: number, wasEnacted: boolean) => void
    } & ((this: void, playerID: number, policyID: number, wasEnacted: boolean) => void),

    /** 
     * *GameCoreEvent*
     */
    QuestChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, CityStateID: number, CompletedQuestPlayerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, CityStateID: number, CompletedQuestPlayerID: number) => void,
        CallImmediate: (this: void, CityStateID: number, CompletedQuestPlayerID: number) => void
    } & ((this: void, CityStateID: number, CompletedQuestPlayerID: number) => void),

    /** 
     * **
     */
    QueueFlushed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    ReligionFounded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, religionID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, religionID: number) => void,
        CallImmediate: (this: void, playerID: number, religionID: number) => void
    } & ((this: void, playerID: number, religionID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    RemotePlayerTurnBegin: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    RemotePlayerTurnEnd: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    RemotePlayerTurnUnready: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    ResearchChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, technologyIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, technologyIndex: number) => void,
        CallImmediate: (this: void, playerID: number, technologyIndex: number) => void
    } & ((this: void, playerID: number, technologyIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    ResearchCompleted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, technologyIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, technologyIndex: number) => void,
        CallImmediate: (this: void, playerID: number, technologyIndex: number) => void
    } & ((this: void, playerID: number, technologyIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    ResearchQueueChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, technologyIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, technologyIndex: number) => void,
        CallImmediate: (this: void, playerID: number, technologyIndex: number) => void
    } & ((this: void, playerID: number, technologyIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    ResearchYieldChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number) => void,
        CallImmediate: (this: void, playerID: number) => void
    } & ((this: void, playerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    ResourceAddedToMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number, resourceIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number, resourceIndex: number) => void,
        CallImmediate: (this: void, x: number, y: number, resourceIndex: number) => void
    } & ((this: void, x: number, y: number, resourceIndex: number) => void),

    /** 
     * **
     */
    ResourceChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    ResourceRemovedFromMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, iX: number, iY: number, resourceIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, iX: number, iY: number, resourceIndex: number) => void,
        CallImmediate: (this: void, iX: number, iY: number, resourceIndex: number) => void
    } & ((this: void, iX: number, iY: number, resourceIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    ResourceVisibilityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number, resourceIndex: number, visibilityType: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number, resourceIndex: number, visibilityType: number) => void,
        CallImmediate: (this: void, x: number, y: number, resourceIndex: number, visibilityType: number) => void
    } & ((this: void, x: number, y: number, resourceIndex: number, visibilityType: number) => void),

    /** 
     * *GameCoreEvent*
     */
    RiverAddedToMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    RiverRemovedFromMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    RouteAddedToMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    RouteChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number) => void,
        CallImmediate: (this: void, x: number, y: number) => void
    } & ((this: void, x: number, y: number) => void),

    /** 
     * *GameCoreEvent*
     */
    RouteRemovedFromMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    RouteVisibilityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    SpyAdded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, spyPlayerID: number, spyUnitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, spyPlayerID: number, spyUnitID: number) => void,
        CallImmediate: (this: void, spyPlayerID: number, spyUnitID: number) => void
    } & ((this: void, spyPlayerID: number, spyUnitID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    SpyMissionCompleted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, missionID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, missionID: number) => void,
        CallImmediate: (this: void, playerID: number, missionID: number) => void
    } & ((this: void, playerID: number, missionID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    SpyMissionUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    SpyRemoved: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, spyPlayerID: number, counterSpyPlayerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, spyPlayerID: number, counterSpyPlayerID: number) => void,
        CallImmediate: (this: void, spyPlayerID: number, counterSpyPlayerID: number) => void
    } & ((this: void, spyPlayerID: number, counterSpyPlayerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    SpyUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    StatusMessage: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *UIEvent*
     */
    SystemUpdateUI: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, type: any, tag: any, data1: number, data2: number, data3: string) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, type: any, tag: any, data1: number, data2: number, data3: string) => void,
        CallImmediate: (this: void, type: any, tag: any, data1: number, data2: number, data3: string) => void
    } & ((this: void, type: any, tag: any, data1: number, data2: number, data3: string) => void),

    /** 
     * *GameCoreEvent*
     */
    TeamVictory: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    TechBoostTriggered: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, techBoosted: number, unknownA: number, unknownB: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, techBoosted: number, unknownA: number, unknownB: number) => void,
        CallImmediate: (this: void, playerID: number, techBoosted: number, unknownA: number, unknownB: number) => void
    } & ((this: void, playerID: number, techBoosted: number, unknownA: number, unknownB: number) => void),

    /** 
     * *GameCoreEvent*
     */
    TerrainTypeChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    TradeRouteActivityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, originPlayerID: number, originCityID: number, targetPlayerID: number, targetCityID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, originPlayerID: number, originCityID: number, targetPlayerID: number, targetCityID: number) => void,
        CallImmediate: (this: void, playerID: number, originPlayerID: number, originCityID: number, targetPlayerID: number, targetCityID: number) => void
    } & ((this: void, playerID: number, originPlayerID: number, originCityID: number, targetPlayerID: number, targetCityID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    TradeRouteAddedToMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, x: number, y: number) => void,
        CallImmediate: (this: void, playerID: number, x: number, y: number) => void
    } & ((this: void, playerID: number, x: number, y: number) => void),

    /** 
     * *GameCoreEvent*
     */
    TradeRouteCapacityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number) => void,
        CallImmediate: (this: void, playerID: number) => void
    } & ((this: void, playerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    TradeRouteRangeChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    TradeRouteRemovedFromMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, x: number, y: number) => void,
        CallImmediate: (this: void, playerID: number, x: number, y: number) => void
    } & ((this: void, playerID: number, x: number, y: number) => void),

    /** 
     * *GameCoreEvent*
     */
    TreasuryChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, yield: number, balance: any) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, yield: number, balance: any) => void,
        CallImmediate: (this: void, playerID: number, yield: number, balance: any) => void
    } & ((this: void, playerID: number, yield: number, balance: any) => void),

    /** 
     * *GameCoreEvent*
     */
    TurnBegin: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    TurnEnd: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitAbilityGained: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, unitAbilityIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, unitAbilityIndex: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, unitAbilityIndex: number) => void
    } & ((this: void, playerID: number, unitID: number, unitAbilityIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitAbilityLost: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, unitAbilityIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, unitAbilityIndex: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, unitAbilityIndex: number) => void
    } & ((this: void, playerID: number, unitID: number, unitAbilityIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitActivate: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitActivityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, activityType: ActivityTypes) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, activityType: ActivityTypes) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, activityType: ActivityTypes) => void
    } & ((this: void, playerID: number, unitID: number, activityType: ActivityTypes) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitAddedToMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number) => void
    } & ((this: void, playerID: number, unitID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitAirlifted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitArtifactChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number) => void
    } & ((this: void, playerID: number, unitID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitCaptured: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, currentUnitPlayerID: number, unitID: number, owningPlayerID: number, capturingPlayerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, currentUnitPlayerID: number, unitID: number, owningPlayerID: number, capturingPlayerID: number) => void,
        CallImmediate: (this: void, currentUnitPlayerID: number, unitID: number, owningPlayerID: number, capturingPlayerID: number) => void
    } & ((this: void, currentUnitPlayerID: number, unitID: number, owningPlayerID: number, capturingPlayerID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitChargesChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, newCharges: number, oldCharges: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, newCharges: number, oldCharges: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, newCharges: number, oldCharges: number) => void
    } & ((this: void, playerID: number, unitID: number, newCharges: number, oldCharges: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitCommandStarted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, commandType: UnitCommandTypes, data1: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, commandType: UnitCommandTypes, data1: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, commandType: UnitCommandTypes, data1: number) => void
    } & ((this: void, playerID: number, unitID: number, commandType: UnitCommandTypes, data1: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitDamageChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, newDamage: number, prevDamage: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, newDamage: number, prevDamage: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, newDamage: number, prevDamage: number) => void
    } & ((this: void, playerID: number, unitID: number, newDamage: number, prevDamage: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitEmbarkedStateChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, isEmbarked: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, isEmbarked: boolean) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, isEmbarked: boolean) => void
    } & ((this: void, playerID: number, unitID: number, isEmbarked: boolean) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitEnterFormation: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, firstUnitPlayerID: number, firstUnitID: number, secondUnitPlayerID: number, secondUnitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, firstUnitPlayerID: number, firstUnitID: number, secondUnitPlayerID: number, secondUnitID: number) => void,
        CallImmediate: (this: void, firstUnitPlayerID: number, firstUnitID: number, secondUnitPlayerID: number, secondUnitID: number) => void
    } & ((this: void, firstUnitPlayerID: number, firstUnitID: number, secondUnitPlayerID: number, secondUnitID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitExitFormation: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, firstUnitPlayerID: number, firstUnitID: number, secondUnitPlayerID: number, secondUnitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, firstUnitPlayerID: number, firstUnitID: number, secondUnitPlayerID: number, secondUnitID: number) => void,
        CallImmediate: (this: void, firstUnitPlayerID: number, firstUnitID: number, secondUnitPlayerID: number, secondUnitID: number) => void
    } & ((this: void, firstUnitPlayerID: number, firstUnitID: number, secondUnitPlayerID: number, secondUnitID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitExperienceChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitFormArmy: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number) => void
    } & ((this: void, playerID: number, unitID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitFormationChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitFormCorps: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number) => void
    } & ((this: void, playerID: number, unitID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitFortificationChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number) => void
    } & ((this: void, playerID: number, unitID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitGreatPersonChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitGreatPersonCreated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, greatPersonClassID: number, greatPersonIndividualID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, greatPersonClassID: number, greatPersonIndividualID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, greatPersonClassID: number, greatPersonIndividualID: number) => void
    } & ((this: void, playerID: number, unitID: number, greatPersonClassID: number, greatPersonIndividualID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitKilledInCombat: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, killedPlayerID: number, killedUnitID: number, playerID: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, killedPlayerID: number, killedUnitID: number, playerID: number, unitID: number) => void,
        CallImmediate: (this: void, killedPlayerID: number, killedUnitID: number, playerID: number, unitID: number) => void
    } & ((this: void, killedPlayerID: number, killedUnitID: number, playerID: number, unitID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitMoveComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, x: number, y: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, x: number, y: number) => void
    } & ((this: void, playerID: number, unitID: number, x: number, y: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitMoved: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, x: number, y: number, locallyVisible: any, stateChange: any) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, x: number, y: number, locallyVisible: any, stateChange: any) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, x: number, y: number, locallyVisible: any, stateChange: any) => void
    } & ((this: void, playerID: number, unitID: number, x: number, y: number, locallyVisible: any, stateChange: any) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitMovementPointsChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, movementPoints: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, movementPoints: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, movementPoints: number) => void
    } & ((this: void, playerID: number, unitID: number, movementPoints: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitMovementPointsCleared: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number) => void
    } & ((this: void, playerID: number, unitID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitMovementPointsRestored: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, MovementPoints: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, MovementPoints: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, MovementPoints: number) => void
    } & ((this: void, playerID: number, unitID: number, MovementPoints: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitOperationAdded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, unknown: number, operationType: UnitOperationTypes) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, unknown: number, operationType: UnitOperationTypes) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, unknown: number, operationType: UnitOperationTypes) => void
    } & ((this: void, playerID: number, unitID: number, unknown: number, operationType: UnitOperationTypes) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitOperationDeactivated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, operationType: UnitOperationTypes, data1: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, operationType: UnitOperationTypes, data1: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, operationType: UnitOperationTypes, data1: number) => void
    } & ((this: void, playerID: number, unitID: number, operationType: UnitOperationTypes, data1: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitOperationSegmentComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, commandType: UnitCommandTypes, data1: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, commandType: UnitCommandTypes, data1: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, commandType: UnitCommandTypes, data1: number) => void
    } & ((this: void, playerID: number, unitID: number, commandType: UnitCommandTypes, data1: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitOperationStarted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ownerID: number, unitID: number, operationID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ownerID: number, unitID: number, operationID: number) => void,
        CallImmediate: (this: void, ownerID: number, unitID: number, operationID: number) => void
    } & ((this: void, ownerID: number, unitID: number, operationID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitOperationsCleared: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, commandType: UnitCommandTypes, data1: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, commandType: UnitCommandTypes, data1: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, commandType: UnitCommandTypes, data1: number) => void
    } & ((this: void, playerID: number, unitID: number, commandType: UnitCommandTypes, data1: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitParadropped: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitPromoted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number) => void
    } & ((this: void, playerID: number, unitID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitPromotionAvailable: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, promotionID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, promotionID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, promotionID: number) => void
    } & ((this: void, playerID: number, unitID: number, promotionID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitRemovedFromMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number) => void
    } & ((this: void, playerID: number, unitID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitTeleported: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, x: number, y: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, x: number, y: number) => void
    } & ((this: void, playerID: number, unitID: number, x: number, y: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitTradeChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number) => void
    } & ((this: void, playerID: number, unitID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitUpgraded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number) => void
    } & ((this: void, playerID: number, unitID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitVisibilityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number) => void
    } & ((this: void, playerID: number, unitID: number) => void),

    /** 
     * *GameCoreEvent*
     */
    WMDCountChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, WMDIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, WMDIndex: number) => void,
        CallImmediate: (this: void, playerID: number, WMDIndex: number) => void
    } & ((this: void, playerID: number, WMDIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    WMDDetonated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number, playerID: number, WMDIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number, playerID: number, WMDIndex: number) => void,
        CallImmediate: (this: void, x: number, y: number, playerID: number, WMDIndex: number) => void
    } & ((this: void, x: number, y: number, playerID: number, WMDIndex: number) => void),

    /** 
     * *GameCoreEvent*
     */
    WMDFalloutChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    WMDFalloutVisibilityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    WonderCompleted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number, buildingIndex: number, playerIndex: number, cityID: number, percentComplete: number, unknown: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number, buildingIndex: number, playerIndex: number, cityID: number, percentComplete: number, unknown: number) => void,
        CallImmediate: (this: void, x: number, y: number, buildingIndex: number, playerIndex: number, cityID: number, percentComplete: number, unknown: number) => void
    } & ((this: void, x: number, y: number, buildingIndex: number, playerIndex: number, cityID: number, percentComplete: number, unknown: number) => void),

    /** 
     * *GameCoreEvent*
     */
    WorldTextMessage: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, reportingStatusType: ReportingStatusTypes, gossipIndex: number, x: number, y: number, text: string) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, reportingStatusType: ReportingStatusTypes, gossipIndex: number, x: number, y: number, text: string) => void,
        CallImmediate: (this: void, reportingStatusType: ReportingStatusTypes, gossipIndex: number, x: number, y: number, text: string) => void
    } & ((this: void, reportingStatusType: ReportingStatusTypes, gossipIndex: number, x: number, y: number, text: string) => void),

    /** 
     * **
     */
    UnitCreated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number) => void
    } & ((this: void, playerID: number, unitID: number) => void),

    /** 
     * *SerialEvent*
     */
    InterfaceModeChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, prevInterfaceModeType: InterfaceModeTypes, newInterfaceModeType: InterfaceModeTypes) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, prevInterfaceModeType: InterfaceModeTypes, newInterfaceModeType: InterfaceModeTypes) => void,
        CallImmediate: (this: void, prevInterfaceModeType: InterfaceModeTypes, newInterfaceModeType: InterfaceModeTypes) => void
    } & ((this: void, prevInterfaceModeType: InterfaceModeTypes, newInterfaceModeType: InterfaceModeTypes) => void),

    /** 
     * *SerialEvent*
     */
    UnitSelectionChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, hexI: number, hexJ: number, hexK: number, isSelected: boolean, IsEditable: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, hexI: number, hexJ: number, hexK: number, isSelected: boolean, IsEditable: boolean) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, hexI: number, hexJ: number, hexK: number, isSelected: boolean, IsEditable: boolean) => void
    } & ((this: void, playerID: number, unitID: number, hexI: number, hexJ: number, hexK: number, isSelected: boolean, IsEditable: boolean) => void),

    /** 
     * *LocalMachineEvent*
     */
    InputActionTriggered: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, actionID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, actionID: number) => void,
        CallImmediate: (this: void, actionID: number) => void
    } & ((this: void, actionID: number) => void),

    /** 
     * *SerialEvent*
     */
    CitySelectionChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, hexI: number, hexJ: number, hexK: number, isSelected: boolean, IsEditable: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, hexI: number, hexJ: number, hexK: number, isSelected: boolean, IsEditable: boolean) => void,
        CallImmediate: (this: void, playerID: number, unitID: number, hexI: number, hexJ: number, hexK: number, isSelected: boolean, IsEditable: boolean) => void
    } & ((this: void, playerID: number, unitID: number, hexI: number, hexJ: number, hexK: number, isSelected: boolean, IsEditable: boolean) => void),

    /** 
     * *GameCoreEvent*
     */
    EventPopupResponse: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    CombatVisBegin: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    CrossPlayServersConnected: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    GameConfigChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    UploadCloudPlayerConfigComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerGameLaunchFailed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    WorldBuilderSignal: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    LoadComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    PlayCameraAnimationAtHex: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    My2KActivate: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    UserConfirmedClose: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerPlayerConnected: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    CityProductionQueueChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    SteamFriendsStatusUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    GameCoreEventPublishComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    UserRequestClose: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerChat: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    BenchmarkStart: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerGameAbandoned: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    OptionChangeRequiresAppRestart: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    SteamServersDisconnected: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    PlayCameraAnimationAtPos: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    OptionChangeRequiresResolutionAck: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    UserSetupWarning: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    BarbarianClanConversionDisabled: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SequenceEvent*
     */
    LoadScreenContentReady: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    InputActionStarted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    InputActionFinished: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    WorldCongressFinished: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    GamePauseStateChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    UnitPlayCinematicAnimation: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    DisableColorKey: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    GeothermalFissureRevealed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerMatchHostMigrated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitPropertyChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number) => void,
        CallImmediate: (this: void, playerID: number, unitID: number) => void
    } & ((this: void, playerID: number, unitID: number) => void),

    /** 
     * *LocalMachineEvent*
     */
    CrossPlayServersDisconnected: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    WorldCongressStage2: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *UIEvent*
     */
    PopupActivated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    BenchmarkEnd: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    WorldCongressSpecialSessionBeingCalled: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    LensChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    UserAcceptsOutdatedDriver: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    OptionChangeRequiresGameRestart: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    UserAcceptsEULA: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    RandomEventStarted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    UserOptionChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    ConnectedToNetSessionHost: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    UserAcceptsUnknownDevice: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    CorporationAdded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerGameListClear: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    GamePropertyChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerHostMigrated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    VolcanoRevealed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    CloudGameQuit: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    CloudUnseenCompleteCheckComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    TurnTimerUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    CityProjectCompletedNarrative: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    WorldCongressRibbonUpdate: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    RestartWonderMovie: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    ExitToMainMenu: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    SteamFriendsPresenceUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    ShowLeaderScreen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerJoinRoomComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerPingTimesChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    CulturalIdentityPerturnFromModifiersChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    CameraAnimationNotFound: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    WorldCongressEmergencyReady: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    FiraxisLiveActivate: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    Begin2KLoginProcess: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    ARXTap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    CloudTurnCheckComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    CrossPlayDisplayMessage: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    LeaderScreenFinishedLoading: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerSnapshotRequested: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    LensLayerOff: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerGameListComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    UploadCloudEndTurnComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    UserOptionsActivated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    Camera_Updated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    KickVoteComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerIntroduced: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    LeaveGameComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    StormChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    PostTourismBomb: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    CrossPlayLoginStateUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    FavorChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    EOSInviteReceived: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerPrePlayerDisconnected: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SequenceEvent*
     */
    LoadScreenClose: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    WorldRenderViewChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    PlayerInfoChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    MultiplayerGameLaunched: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    PowerGeneratedFromResource: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    OverlaySystemInitialized: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    BarbarianClanConversionEnabled: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    GameCoreEventPlaybackComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    FinishedGameplayContentConfigure: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    VisualStateRestored: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    UIIdle: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    CameraAnimationStopped: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    LensLayerOn: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitKilledByFallout: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    ModStatusUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    MapMinMajorPlayersChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    BenchmarkToggleLookAt: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    UnitStopCinematicAnimation: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    KickVoteStarted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    CycleUnitSelectionRequest: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    FloodplainRevealed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    My2KLinkAccountResult: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SequenceEvent*
     */
    LoadGameViewStateDone: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerGameLastPlayer: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    CloudGameKilled: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    UnitSimPositionChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    GovernorEjected: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    StopAllCameraAnimations: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    ARXOrientationChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    LeaderAnimationComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    PreTurnBegin: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    FrontEndPopup: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    MapMaxMajorPlayersChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    EnableColorKey: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    UploadCloudEndTurnStart: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerGameListUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    BeforeMultiplayerInviteProcessing: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    RandomEventOccurred: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    SaveComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerJoinGameComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    UpdateGraphicsOptions: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    CityPowerChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerPostPlayerDisconnected: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    HideLeaderScreen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerMatchmakingFailed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerJoinRoomFailed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerSnapshotProcessed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MultiplayerJoinRoomAttempt: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    SteamServersConnected: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    CombatVisEnd: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    InputGestureRecorded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MarketingPushDataUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    CorporationNameChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    CityPropertyChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    WorldCongressStage1: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MatchEndTurnComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SequenceEvent*
     */
    GameViewStateDone: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    CorporationRemoved: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    OptionsReverted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    LoadCanceled: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    SaveCanceled: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    MonopolyGained: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    AchievementProgress: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    DroughtAddedToMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    HostPlayTogetherGame: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    GameConfigurationRebuilt: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    RaiseHostDefaultGame: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    RandomEventOccurredNarrative: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    ContentOutOfDatePopup: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    MultiplayerPurchasePopup: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    MultiplayerGameInvite: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    CursorHexPositionChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    FinishedGameplayContentChange: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    GameConfigurationParameterChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    PurchaseFullGame: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    OptionsSaved: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *UIEvent*
     */
    DragCamera: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerTurnCompleteIgnored: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    RequestLoad: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    ShowEndDemoPurchaseDialog: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    StopCameraAnimationByID: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    DemoTurnLimitReached: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    SecretSocietyDiscovered: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *UIEvent*
     */
    AfterPlayerTurnActivated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    InputDeviceLayoutChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitTourismBomb: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    BeforeGameplayContentConfigure: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    MatchUpdateSaveGameComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SequenceEvent*
     */
    MainMenuStateDone: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    WorldCongressPlayersChoice: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    TakeUserToDLCScreen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    OptionsReset: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    AllDistrictsDeselected: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *UIEvent*
     */
    GamepadActiveChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    BeforeGameplayContentChange: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitHeroCreated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    AuthenticateDLC: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    RequestSave: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    DLCDownloaded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    AllCitiesDeselected: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    NuclearReactorChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    CameraAnimationStarted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    StormAddedToMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    CloudGameInfoUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    OptionChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    PlayerDiscoveredHero: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    UploadCloudSaveComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    LeaderAnimationChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    AchievementUnlocked: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    LensFocusCity: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    DLCFullGameRequiredPopup: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    InputSourceChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    PublisherServicesLoginStateChange: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitAttacksRemainingChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *UIEvent*
     */
    ContextVisibilityChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitKilledLifespanExpired: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    StormRemovedFromMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    DroughtRemovedFromMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    MonopolyLost: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    GameCoreProcessingComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    DemoExit: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SequenceEvent*
     */
    AppInitComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    LensUnFocusCity: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    GameConfigurationResolved: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    NaturalWonderRevealedNarrative: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    CloudGameJoinResponse: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    SecretSocietyLeft: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    CloudGameListUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    PostTourismBombNarrative: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    UnitEnteredBarbarianCamp: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    SecretSocietyJoined: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    AllUnitsDeselected: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    DistrictSelectionChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    AfterGameplayContentChange: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    LensFocusHex: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    BeginGameView: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    SubscriptionDownloadStatus: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    AfterGameplayContentConfigure: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    WorldCongressStage3: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    ClimateChangeEvent: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    EndGameView: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *GameCoreEvent*
     */
    WonderCompletedNarrative: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    LensUnFocusHex: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *SerialEvent*
     */
    GenericObjectSimActionTrigger: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *UIEvent*
     */
    LoadingBarUpdate: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

    /** 
     * *LocalMachineEvent*
     */
    BeginMy2KLinkAccountProcess: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        Dispatch: (this: void) => void,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        CallImmediate: (this: void, ) => void
    } & ((this: void, ) => void),

}

/**
 * **Contexts**: Gameplay
 * 
 * ---
 * Primarily events defined by Civ 6's binaries, but can also be user defined.
 */
declare const GameEvents:
{
    BuildingConstructed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, buildingID: number, plotID: number, isOriginalConstruction: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, buildingID: number, plotID: number, isOriginalConstruction: boolean) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    BuildingPillageStateChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, buildingID: number, isPillaged: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, buildingID: number, isPillaged: boolean) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    CityBuilt: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, cityID: number, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, cityID: number, x: number, y: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    CityConquered: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, newPlayerID: number, oldPlayerID: number, newCityID: number, cityX: number, cityY: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, newPlayerID: number, oldPlayerID: number, newCityID: number, cityX: number, cityY: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    DiploSurpriseDeclareWar: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, mainPlayer: any, opponentPlayer: any) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, mainPlayer: any, opponentPlayer: any) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    EventPopupChoice: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, parameters: AnyTable) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, parameters: AnyTable) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    FoundNewWorld: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, threshold: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, threshold: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    HasFourCities: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, threshold: any) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, threshold: any) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnCityPopulationChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, cityOwner: number, cityID: number, amountChanged: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, cityOwner: number, cityID: number, amountChanged: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnCivicCulturevated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, civicIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, civicIndex: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnDistrictConstructed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, districtID: number, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, districtID: number, x: number, y: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnFaithEarned: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, amountEarned: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, amountEarned: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnGameTurnStarted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnNewMajorityReligion: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnPillage: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number, isPillaged: boolean, buildingIndex: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number, isPillaged: boolean, buildingIndex: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnPlayerCommandSetObjectState: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, parameters: AnyTable) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, parameters: AnyTable) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnPlayerGaveInfluenceToken: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, majorID: number, minorID: number, amount: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, majorID: number, minorID: number, amount: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnRandomEventOccurred: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, iType: number, severity: number, x: number, y: number, mitigationLevel: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, iType: number, severity: number, x: number, y: number, mitigationLevel: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnUnitRetreated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, unitOwner: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, unitOwner: number, unitID: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    PlayerTurnStartComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    PlayerTurnStarted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    PlotOwnershipChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    PlotPropertyChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, x: number, y: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, x: number, y: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    PolicyChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, policyID: number, wasEnacted: boolean) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, policyID: number, wasEnacted: boolean) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    UnitAddedToMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, playerID: number, unitID: number) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, playerID: number, unitID: number) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_UnitCloak: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_ArmsControlTreaty: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_ShoreParty: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_HoarderActive: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_BorderControl: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    UnitInitialized: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_WorldIdeology: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_ValidateGovernanceDoctrine: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_PlaceTrap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_PowerResourceBan: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_DeforestationFeature: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnUnitMoved: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    CivRoyale_GetSafeZone: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnWMDCountChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_BurnTreasureMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_LuxuryBan: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_HolyFervor: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_Purge: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_UnitShield: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_RoadVision: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_Careening: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_TradeTreaty: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_YieldBan: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_Minister: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_ESPIONAGE_PACT: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnImprovementPillaged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    PostUnitPromotionEarned: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_PublicWorks: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_DiploVictory: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnPlayerTurnEnded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_GreatWorkObjects: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_Study: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    PiratesScenario_DeleteUnitsAtGoal: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_UnitRadSpread: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnNuclearWeaponDetonated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnGreatPersonActivated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_UnitSacrifice: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    CanUseResolutions: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    CivRoyale_SmallSafeZone: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_MILITARY_ADVISORY: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    TradeRoutePlundered: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_BuryTreasure: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    OnCombatOccurred: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_VisitTavern: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_MigrationTreaty: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_CaptureBoat: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_PolicyTreaty: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_Patronage: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_Pacify: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    UnitTriggerGoodyHut: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_PrivateerActive: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_SwashbucklerActive: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_ShorePartyEmbark: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_GrievingGift: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_UrbanDevelopment: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    ScenarioCommand_DreadPirateActive: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },
    WC_Validate_PowerBuilding: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void,
        TestAny: (this: void) => void,
        TestAll: (this: void) => void,
        Accumulate: (this: void) => void,
        AccumulateINT: (this: void) => void,
    },

}

/**
 * **Contexts**: Gameplay, UI
 * 
 * ---
 * Primarily user defined events that are accessible anywhere within the context they're defined in (Gameplay, UI).
 * 
 * Some are also defined by Civ 6's binaries.
 */
declare const LuaEvents:
{
    EventPopupRequest: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, popupData: AnyTable) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, popupData: AnyTable) => void
    } & ((this: void, popupData: AnyTable) => void),
    WorldTracker_OpenChooseCivic: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GameDebug_AddValue: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_DisableMapDrag: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ChatPanel_PlayerTargetChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_AdvisorLower: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    AutomationStart: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GovernorPanel_Opened: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GreatPeopleHeroPanel_SizeChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_CloseAllLaunchBarScreens: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ChooseProduction: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_OpenReligionPanel: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    AutomationTestComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NaturalWonderPopup_Closed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiploPopup_ShowMakeDeal: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_CloseReportsList: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_LiveCityDataChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    EnterCrossPlayLobby: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldRankings_Close: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldInput_DragMapEnd: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CloseAnyQueuedMy2KPopup: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_SetOverViewState: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ActionPanel_ActivateNotification: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    FileListQueryComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ResearchChooser_RaiseTechTree: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MapPinPopup_SendPinToChat: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldCongress_OpenDiplomacyActionViewLite: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityBannerManager_TalkToLeader: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_OpenEraProgressPanel: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_FilterKeysActive: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NewGameInitialized: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldTracker_SetEmergencies: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ReportsList_OpenGossip: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Launchbar_ToggleClimateScreen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldCongress_ShowEmergency: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldCongressPopup_OnSpecialSessionNotificationAdded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_CloseCityStates: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_PurchasePlot: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_DisableActionForAll: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GovPan_PostOpen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_OpenGreatPeoplePopup: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ChoosePurchase: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TechTree_CloseTechTree: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    AutoProfilerBenchmarkFinished: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PlayerChange_Show: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    AdvisorPopup_ClearActive: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_ResumeCongress: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MyScreen_Closed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldCrisisTracker_EmergencyClicked: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    AutomationGameEnded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TradeRouteChooser_Open: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_Realize: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_OpenTradeOverview: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ProductionManager_SelectedIndexChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_PurchaseGoldOpen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Raise_State_Transition: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Religion_CloseReligion: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PantheonChooser_CloseReligion: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ShowEnemyCityDetails: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilderLaunchBar_OpenMapEditor: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    RockBandMoviePopup_OpenRockBandPopup: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ToggleCivilopedia: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GreatPeoplePopup_ClearHeroes: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityBannerManager_CityPanelOverview: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MainMenu_SetLoadGameServerType: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GreatPeople_CloseGreatPeople: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LeaderPicker_Initialize: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_PlayerCivicEdited: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_ViewDiploIntel: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    EndGameMenu_ViewingPlayerDefeat: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldInput_TouchPlotTooltipShow: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_PlayerTechEdited: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_CloseAllPartialScreens: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    HistoricMoments_Opened: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_OpenDisloyalCityChooser: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    AutomationGameStarted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MyScreen_Opened: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PlotInfo_ShowYieldIcons: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilderToolsPalette_SetTabHeader: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    AdvisorPopup_ShowDetails: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MainMenu_ShowPiratesIntro: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiplomacyRibbon_OpenDiplomacyActionView: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TopPanel_OpenReportsScreen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    AutomationRunTest: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldTracker_ToggleResearchPanel: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    RockBandMoviePopup_Closed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_ResearchOpen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldInput_MakeTradeRouteDestination: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_RemoveUnitMoveRestrictions: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilderMapTools_SetTabHeader: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PBCNotificationPopup_ShowYourTurn: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilderRiverHighlight: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_GoalMarkComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_ProductionOpen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MainMenu_RaiseHostGame: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    InGame_CloseInGameOptionsMenu: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilderLaunchBar_OpenInGameMenu: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_OpenGreatWorksOverview: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_OpenWorldCongressProposeEmergencies: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_DisableMapSelect: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_ShowMapEditor: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MultiSelectWindow_Initialize: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldCongressPopup_OnSpecialSessionNotificationDismissed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NaturalWonderPopup_Shown: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GovernorPanel_Toggle: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ProjectBuiltPopup_Shown: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    HeroesPopup_ShowNewHero: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TunerEnterDebugMode: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    OnViewPowerLens: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiploScene_CinemaSequence: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    RockBandMoviePopup_Shown: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CivicChooser_ForceHideWorldTracker: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MultiplayerPopup: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_HideYieldIcons: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiploScene_RefreshTabs: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ToggleManageCitizens: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiploScene_LeaderSelect: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_ShowTechBoost: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ReportsList_OpenYields: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PlayerChange_Close: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Multiplayer_ExitShell: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ActionPanel_ObserverModeTurnBegin: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GreatWorks_OpenGreatWorks: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilderToolsPalette_ChangeTool: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    AutoPlayStart: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CongressButton_ResumeCongress: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_CloseCivicsTree: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    OnRaisePopupInGame: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    SetKickPlayer: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MapSearch_PanelClosed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    UnitPanel_PromoteUnit: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PantheonChooser_OpenReligion: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityStatePicker_SetParameterValues: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TurnBlockerChooseProduction: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_PlayerAddedRemove: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MainMenu_ShowAdditionalContent: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    SetCityCiv: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MainMenu_LaunchError: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilderModeChangeRequest: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Lobby_RaiseHostGame: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    JoiningRoom_Showing: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_OpenMyScreen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_PlayerTechEditedRemove: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Government_CloseGovernment: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldInput_TouchPlotTooltipHide: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TradeRouteChooser_RouteConsidered: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_CloseMyScreen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_GoalAdd: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_EmergencyClicked: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    HistoricMoments_Closed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TechCivicCompletedPopup_CivicShown: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ShowReligionTab: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_PaintOpCompleted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GlobalReportsList_OpenResources: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_SecretSocietyJoined: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldTracker_SetMinimapSize: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TradeOriginChooser_SetTradeUnitStatus: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ShowBreakdownTab: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    EspionageChooser_ShowMissionBriefing: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    InGameTopOptionsMenu_SetLoadGameServerType: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiploPopup_ShowMakeDemand: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_OpenPantheonChooser: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityBannerManager_ShowEnemyCityOverview: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_CloseTechTree: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityBannerManager_ProductionToggle: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TunerExitDebugMode: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GovernmentScreen_PolicyTabOpen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TradeRouteChooser_SetTradeUnitStatus: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_OpenGreatWorksShowcase: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    UnitFlagManager_PointerExited: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PiratesIntro_StartMatchMaking: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_CloseGreatPeoplePopup: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldInput_ConfirmWarDialog: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    AutomationComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ProductionPanel_ToggleManager: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_OpenEspionageEscape: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    AutoPlayEnd: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_RaiseTechTree: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ProductionPanel_ListModeChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PrideMoments_ToggleTimeline: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiploPopup_DealUpdated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_Resize: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    EspionagePopup_MissionBriefingClosed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanelCulture_ToggleLoyalty: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityBannerManager_MakeTradeRouteDestination: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    RelicScreen_RelicScreenOpened: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GreatPeopleHeroPanel_Show: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldCongressPopup_ShowWorldCongressBetweenTurns: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ActionPanel_OpenChooseResearch: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ProductionPanel_OpenManager: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_ContinentTypeEdited: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ReportsList_OpenResources: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_ExitFSMap: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_ShowRelicCreated: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_CloseGreatWorksOverview: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TunerMapRButtonDown: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ReportsList_OpenCityStatus: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_DisableActions: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiploScene_SceneOpened: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_OpenOverview: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    EraProgressPanel_Close: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NaturalDisasterPopup_Closed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_ViewDiploRelationship: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldTracker_ChatContainerSizeChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    HostGame_ShowStagingRoom: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    RefreshTechBoostList: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldInput_WBMouseOverPlot: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Government_OpenGovernment: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiplomacyActionView_HideCongress: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    UIDebugModeEntered: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_ClearAllUnitHexRestrictions: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_CheckPopupsOpen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_PlayerRemoved: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PBCNotificationPopup_ShowUnseenComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldInput_WBSelectPlot: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldRankings_CloseCityStates: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiploScene_RefreshOverviewRows: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    JoiningRoom_ShowStagingRoom: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    StartKickVote: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TradeRouteChooser_ReOpen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GovernorPanel_AssignDetails: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldTracker_OnSetMinimapCollapsed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_ShowPlayerEditorRemove: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldCongressBetweenTurns_ResumeCongress: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_DisableSettleHintLens: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_HideWorldPointer: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ShowOverviewPanel: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    StagingRoom_EnsureHostGame: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CivicsChooser_RaiseCivicsTree: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GreatWorkCreated_OpenGreatWorksOverview: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PlotInfo_UpdatePlotTooltip: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_CloseEspionage: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_CloseDiploActionView: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityStatePicker_SetParameterValue: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_ViewDiploAccessLevel: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_OpenEspionage: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ActionPanel_EndObserverMode: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_GoalAutoRemove: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ToggleOverviewPower: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ProductionPanel_Open: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_OpenCityStatesSendEnvoys: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialGoals_Showing: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Launchbar_Expansion2_ClimateScreen_Close: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    EraReviewPopup_Show: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_GoalRemove: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ShowAmenitiesTab: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialGoals_Hiding: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ProductionClose: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_AdvisorRaise: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ShowCitizensTab: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_DisableTechAndCivicPopups: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_OpenWorldRankingsCulture: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_OpenArtifactPanel: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_SlowNextTurnEnable: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    OpenCivilopedia: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    UnitFlagManager_PointerEntered: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_GovernmentOpenPolicies: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ToggleOverviewLoyalty: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Religion_OpenReligion: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ShowHousingTab: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityBannerManager_RaiseMinorCivPanel: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_CloseReligionPanel: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    OnViewReligionLens: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityStatePicker_Initialize: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    EditHotseatPlayer_UpdatePlayer: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiploPopup_TalkToLeader: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    UpdateFiraxisLiveState: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GovernorDetailsPanel_OpenDetails: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_CityPanelOpen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_ShowMapEditorRemove: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_ModeChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_UserNotificationActivate: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityBannerManager_OpenTreatWithTribePopup: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_GrievanceTalkToLeader: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_PlayerEditedRemove: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ProductionPanel_CloseManager: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_PlayerRemovedRemove: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_ClosePantheonChooser: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_ToggleWorldRankings: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MainMenu_UserRequestClose: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    FileListQueryResults: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    AutomationAppUpdateComplete: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_Expansion1_ToggleEraProgress: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_AddUnitHexRestriction: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_CloseAllExcept: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ProductionOpenForQueue: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TunerMapLButtonUp: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ClimateScreen_Opened: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    UIDebugModeExited: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_PlotToolTipsOn: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_OpenRazeCityChooser: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TechCivicCompletedPopup_GovernmentOpenPolicies: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NaturalDisasterPopup_Shown: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_HeroDiscovered: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ChatPanel_OnShown: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ActionPanel_OpenChooseCivic: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    HostGame_SetLoadGameServerType: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiplomacyActionView_ResumeCongress: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_ForceHideWorldTracker: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    StrategicView_MapPlacement_ClearDistrictPlacementShadowHexes: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_ShowCivicBoost: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GovernorAssignmentChooser_Close: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_PlayerAdded: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiplomacyActionView_ConfirmWarDialog: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiploBasePopup_HideUI: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PlotInfo_HideYieldIcons: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GovernorPanel_Close: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GovernorPanel_ClosedDetails: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiplomacyActionView_HideIngameUI: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_ShowYieldIcons: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_HeroExpired: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GreatPeopleHeroPanel_Close: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiplomacyActionView_ShowIngameUI: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MinimapPanel_ToggleGrid: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_DisableMapCancel: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityStates_ConfirmWarDialog: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityBannerManager_UpdateRangeStrike: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ProductionPanel_IsQueueOpen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Advisor_ToggleTimeline: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_OpenGreatPeoplePopup: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_OpenWorldCongressResults: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldCongress_OpenDiplomacyActionView: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_FilterKeysDisabled: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanelTabRefresh: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanelOverview_Opened: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TradeOverview_SelectRouteFromOverview: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_OpenCityStates: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ProductionPanel_CancelManagerSelection: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_ClearAllHexMoveRestrictions: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    FullscreenMap_Closed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    OnViewPlagueLens: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_PlayerCivicEditedRemove: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_ShowWorldPointer: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MinimapPanel_RefreshMinimapOptions: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_ShowCivicDiscovered: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    InGame_OpenInGameOptionsMenu: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_ContextDisableItems: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_PurchaseFaithOpen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GameDebug_Return: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldTracker_OnChatShown: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ClimateScreen_Closed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_CloseGovernmentPanel: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LeaderPicker_SetParameterValues: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TechTree_OpenTechTree: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    AutomationStopTest: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiplomacyActionView_OpenLite: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    EndGameMenu_Closed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ToggleOverviewCitizens: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TopPanel_OpenDiplomacyActionView: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_SimpleInGameMenu: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MapPinPopup_RequestMapPin: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MapSelect_ClearMapData: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_CloseGoals: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    EndGameMenu_OpenHistoricMoments: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ToggleOverviewReligion: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ResearchChooser_ForceHideWorldTracker: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_StartPositionChanged: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CivicsPanel_RaiseCivicsTree: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_CloseChoosers: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MapSelect_PopulatedMaps: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    UnitFlagManager_DrawRangeAttackPreview: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ProductionPanel_ProductionClicked: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CivicsTree_OpenCivicsTree: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_SecretSocietyDiscovered: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MapTacks_Function: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    StagingRoom_SetPlayerID: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    FullscreenMap_Shown: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MapSearch_PanelOpened: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_TutorialEndHideBulkUI: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_GovernmentOpenGovernments: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GovernorAssignmentChooser_RequestAssignment: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    UnitPanel_CivRoyaleScenarioShowUnitFlagCombatPreview: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ChangeMPLobbyMode: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_ShowTechDiscovered: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldCongressPopup_HideWorldCongressBetweenTurns: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CivicBoostUnlockedPopup_RefreshCivicBoostList: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Civ6Common_ConfirmWarDialog: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_EnableActions: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ProjectBuiltPopup_Closed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MainMenu_ShowCivRoyaleIntro: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldInput_DragMapBegin: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_ToggleInGameOptionsMenu: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Automation_AddToNarrationQueue: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_GoalsLoadFromDisk: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GreatWorksOverview_ViewGreatWork: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MinimapPanel_CloseAllLenses: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_OpenPantheonChooser: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_AddUnitMoveRestriction: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CivicChooser_RestoreWorldTracker: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    FrontEndPopup_CloseConfirmationWithoutAction: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PBCNotifyRemind_ShowOptions: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_OpenGoals: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_GovernmentOpenMyGovernment: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GreatWorks_CloseGreatWorks: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MapPinPopup_RequestChatPlayerTarget: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiploPopup_HideDeal: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TradeRouteChooser_CloseIfPopups: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    StrategicView_MapPlacement_AddDistrictPlacementShadowHexes: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilderLaunchBar_OpenPlayerEditor: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    AutomationPostGameInitialization: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_EnableActionForAll: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_ShowPlayerEditor: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    OnPlagueLensOn: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    OnViewLoyaltyLens: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    AutomationMainMenuStarted: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    UnitPanel_CancelMission: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TopPanel_CloseReportsScreen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_PlotToolTipsOff: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    InGameTopOptionsMenu_Show: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_RemoveUnitHexRestriction: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    EndGameMenu_Shown: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MultiSelectWindow_SetParameterValues: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CivRoyaleIntro_StartMatchMaking: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Mods_UpdateHostGameSettings: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WonderBuiltPopup_Shown: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TutorialUIRoot_EnableTechAndCivicPopups: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ProductionPanel_Close: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_CloseEraProgressPanel: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_RestoreWorldTracker: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MinimapPanel_AddContinentColorPair: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GovernorPanel_Closed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GreatPeoplePopup_RefreshHeroes: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldCongressIntro_ShowWorldCongress: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    EndGameMenu_StartObserverMode: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    StartCrossPlay: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    InGameTopOptionsMenu_Close: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Advisor_GovernmentOpenPolicies: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GreatPeople_OpenGreatPeople: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ShowEndGame: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ChatPanel_OnChatReceived: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TechCivicCompletedPopup_GovernmentOpenGovernments: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GovernorPanel_CancelAssignment: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PlayerChange_OpenInGameOptionsMenu: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    StateTransition_SignalRaised: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_ChooseProduction: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    NotificationPanel_ShowContinentLens: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_PlayerEdited: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    InGameTopOptionsMenu_ShowExpansionIntro: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TechCivicCompletedPopup_TechShown: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PausePanel_OpenInGameOptionsMenu: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GameDebug_GetValues: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldCongressPopup_DismissSpecialSessionNotification: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_CloseTradeOverview: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_CloseWorldRankings: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    HistoricMoments_Close: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ProductionOpen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    EraProgressPanel_Open: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiplomacyActionView_ShowCongressResults: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WonderBuiltPopup_Closed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldTracker_ToggleCivicPanel: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    StrageticView_MapPlacement_ProductionOpen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_GovernmentOpenGovernments: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PantheonChooser_OpenReligionPanel: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    UnitPanel_HideUnitPromotion: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_EndTutorialRestrictions: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanelOverview_CloseButton: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    GovernorPanel_Open: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    SwitchLayoutPopup_OpenSwitchLayoutPopup: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_TechTreeScrollToNode: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MapSelect_SetMapByValue: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    MainMenu_PlayCiv6Started: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_Expansion2_MyScreen: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    EraReviewPopup_MakeDedication: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_OpenReportsList: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldTracker_OpenChooseResearch: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CivicsTree_CloseCivicsTree: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    TradeRouteChooser_Close: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_SwitchToWorldView: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiploScene_SetDealAnimation: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    ResearchChooser_RestoreWorldTracker: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Lower_State_Transition: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    Tutorial_ConstrainMovement: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    PartialScreenHooks_OpenWorldRankings: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    DiploScene_SceneClosed: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    EndGameMenu_OneMoreTurn: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_OpenReligionPanel: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CongressButton_ShowCongressResults: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    LaunchBar_RaiseCivicsTree: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    WorldBuilder_SetPlacementStatus: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),
    CityPanel_ToggleOverviewBuildings: {
        /** Registers a callback function to the event, returns that function. */
        Add: (this: void, func: (this: void, ) => void) => typeof func,
        /** Removes a callback function from the event. */
        Remove: (this: void, func: Function) => void,
        /** Removes all callback functions registered to the event in this file. */
        RemoveAll: (this: void) => void,
        /** Returns number of functions registered to the event in this file */
        Count: (this: void) => number,
        /** Attempts to call the event; most of the time this will result in the game crashing, but not always. */
        Call: (this: void, ) => void
    } & ((this: void, ) => void),

}