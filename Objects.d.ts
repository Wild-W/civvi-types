/**
 * **Contexts**: Gameplay, UI
 * 
 * In UI context, this is CacheCity.
 */
declare interface City
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanRaze(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeLoyalty(amount: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangePopulation(amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amenityAdvice`: string
     */
    GetAmenityAdvice(): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CacheGovernor`: CacheGovernor
     */
    GetAssignedGovernor(): CacheGovernor;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetBuildingPotentialYield(buildingHash: number, yieldType: string, whenHasPower: boolean): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CityBuildings`: CityBuildings
     */
    GetBuildings(): CityBuildings;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    GetBuildingYield(buildingIndex: number, yieldID: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `BuildQueue`: BuildQueue
     */
    GetBuildQueue(): BuildQueue;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Citizens`: Citizens
     */
    GetCitizens(): Citizens;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CityAI`: CityAI
     */
    GetCityAI(): CityAI;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `componentIDs`: AnyTable
     */
    GetComponentID(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CulturalIdentity`: CulturalIdentity
     */
    GetCulturalIdentity(): CulturalIdentity;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Culture`: Culture
     */
    GetCulture(): Culture;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `districtID`: number
     */
    GetDistrictID(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Districts`: Districts
     */
    GetDistricts(): Districts;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CityGold`: CityGold
     */
    GetGold(): CityGold;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CityGrowth`: CityGrowth
     */
    GetGrowth(): CityGrowth;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `advice`: string
     */
    GetHousingAdvice(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cityID`: number
     */
    GetID(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Player`: Player
     */
    GetJustConqueredFrom(): Player;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `transerType`: CityTransferTypes
     */
    GetLastTransferType(): CityTransferTypes;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `name`: string
     */
    GetName(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Player`: Player
     */
    GetOriginalOwner(): Player;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    GetOwnedPlots(): Plot[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Player`: Player
     */
    GetOwner(): Player;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Player`: Player
     */
    GetOwnerBeforeOccupation(): Player;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetPopulation(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CityReligion`: CityReligion
     */
    GetReligion(): CityReligion;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Trade`: Trade
     */
    GetTrade(): Trade;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `x`: number
     */
    GetX(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `y`: number
     */
    GetY(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetYield(yieldType: YieldTypes): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `tooltip`: string
     */
    GetYieldToolTip(yieldType: YieldTypes): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsCapital(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsOccupied(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsOriginalCapital(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetBuildingFaithPurchaseEnabled(buildingIndex: number, isEnabled: boolean): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetUnitFaithPurchaseEnabled(unitID: number, isEnabled: boolean): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    AttachModifierByID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CityPower`: CityPower
     */
    GetPower(): CityPower;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetBuildingFaithPurchaseEnabled(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `value`: any
     */
    GetProperty(key: string): any;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `properties`: AnyTable
     */
    GetProperties(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetPowerAdvice(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetProperty(key: string, value: any): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `x`: number
     * - `y`: number
     */
    GetLocation(): LuaMultiReturn<[number, number]>;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Plot`: Plot
     */
    GetPlot(): Plot;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetName(name: string): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    GetUnitFaithPurchaseEnabled(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `governors`: AnyTable
     */
    GetAllAssignedGovernors(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `loyaltyAdvice`: string
     */
    GetLoyaltyAdvice(): string;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CacheGovernor
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetComponentID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasPromotion(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetOwner(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    CanAssignToMajorCiv(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNeutralizedTurns(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetIdentityPressure(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsGovernCityState(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    IsEstablished(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAssignedCity(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTurnsOnSite(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetName(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface CityBuildings
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `buildings`: AnyTable
     */
    GetBuildingsAtLocation(plotID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `tourism`: number
     */
    GetBuildingTourismFromGreatWorks(includingReligiousTourism: boolean, buildingIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetBuildingYieldFromGreatWorks(yieldID: number, buildingIndex: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `City`: City
     */
    GetCity(): City;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `creatorName`: string
     */
    GetCreatorNameFromIndex(greatWorkID: number): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `greatWorkID`: number
     */
    GetGreatWorkInSlot(buildingIndex: number, slotID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `slotType`: number
     */
    GetGreatWorkSlotType(buildingIndex: number, slotID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `greatWorkType`: number
     */
    GetGreatWorkTypeFromIndex(greatWorkID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumGreatWorkSlots(buildingIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turn`: number
     */
    GetTurnFromIndex(greatWorkID: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasBuilding(buildingIndex: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsBuildingThemedCorrectly(buildingIndex: number): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsPillaged(buildingIndex: number): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RemoveBuilding(buildingIndex: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetPillaged(buildingIndex: number, isPillaged: boolean): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `maintenanceCost`: number
     */
    GetBuildingMaintenance(buildingIndex: boolean): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetBuildingLocation(x: number, y: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `overrideName`: string
     */
    GetBuildingNameOverride(buildingIndex: number): string;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `x`: number
     * - `y`: number
     */
    GetBuildingLocation(): LuaMultiReturn<[number, number]>;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetPlayerFromIndex(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface BuildQueue
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    AddProgress(amount: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanProduce(hash: number, isAble: boolean): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    CreateBuilding(City: City, buildingIndex: number, progress: number, plotID: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    CreateDistrict(City: City, districtID: number, progress: number, Plot: Plot): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    CreateIncompleteBuilding(buildingIndex: number, Plot: Plot, progress: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    CreateIncompleteDistrict(districtID: number, Plot: Plot, progress: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `buildingIndex`: number
     */
    CurrentlyBuilding(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    FinishProgress(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cost`: number
     */
    GetBuildingCost(buildingIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `progress`: number
     */
    GetBuildingProgress(buildingIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `City`: City
     */
    GetCity(): City;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Plot`: Plot
     */
    GetConstructionPlot(hash: number, type: string, componentID: number): Plot;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `constructions`: AnyTable
     */
    GetConstructionsAtLocation(plotID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `hash`: number
     */
    GetCurrentProductionTypeHash(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `modifier`: number
     */
    GetCurrentProductionTypeModifier(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cost`: number
     */
    GetDistrictCost(districtID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `progress`: number
     */
    GetDistrictProgress(districtID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `hash`: number
     */
    GetPreviousProductionTypeHash(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cost`: number
     */
    GetProjectCost(projectID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `progress`: number
     */
    GetProjectProgress(projectID: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turns`: number
     */
    GetTurnsLeft(componentID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cost`: number
     */
    GetUnitArmyCost(unitIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cost`: number
     */
    GetUnitCorpsCost(unitIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cost`: number
     */
    GetUnitCost(unitIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `progress`: number
     */
    GetUnitProgress(unitIndex: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasBeenPlaced(any_districtBuildingHash: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    GetProductionYield(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `length`: number
     */
    GetSize(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `entry`: AnyTable
     */
    GetAt(position: number): AnyTable;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `districtIndex`: number
     */
    RemoveDistrict(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasProductionProgress(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasBuildingProductionProgress(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasBuildingBeenPlaced(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `buildingIndex`: number
     */
    RemoveBuilding(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cost`: number
     */
    GetUnitResourceCost(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `numEntries`: number
     */
    GetNumEntriesOfProductionTypeHash(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasDistrictProductionProgress(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetAvailableProductionTypes(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    CheckActiveProduction(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasDistrictBeenPlaced(): boolean;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface Plot
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanHaveDistrict(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanHaveWonder(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAdjacencyBonusTooltip(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAdjacencyBonusType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAdjacencyYield(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAirUnits(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAppeal(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Area`: Area
     */
    GetArea(): Area;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `areaID`: number
     */
    GetAreaID(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetContinentType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetDefenseModifier(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetDistrictID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetDistrictType(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `MapFeature`: MapFeature
     */
    GetFeature(): MapFeature;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetFeatureType(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetImprovementOwner(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetImprovementType(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plotID`: number
     */
    GetIndex(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetMovementCost(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetNationalParkName(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetNearestLandArea(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetNearestLandPlot(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetOwner(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `value`: any
     */
    GetProperty(property: string): any;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetResourceCount(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetResourceType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetResourceTypeHash(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetRiverCrossingCount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetRiverEFlowDirection(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetRiverSEFlowDirection(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetRiverSWFlowDirection(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetRouteType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTerrainType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetUnitCount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetWonderType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetWorkerCount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `x`: number
     */
    GetX(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `y`: number
     */
    GetY(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    GetYield(yieldType: YieldTypes): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasFeatureBeenAdded(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAdjacentOwned(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAdjacentPlayer(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAdjacentToArea(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAdjacentToLand(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAdjacentToShallowWater(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAt(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsCanyon(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsChokepoint(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsCity(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsCoastalLand(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsFlatlands(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsFreshWater(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsHills(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsImpassable(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsImprovementPillaged(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsInternalOnlyDistrict(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsLake(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsMountain(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsNationalPark(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsNaturalWonder(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsNEOfCliff(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsNEOfRiver(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsNone(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsNWOfCliff(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsNWOfRiver(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsOpenGround(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsOwned(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsRiver(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsRiverAdjacent(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsRiverConnection(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsRiverCrossing(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsRiverCrossingFlowClockwise(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsRiverCrossingToPlot(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsRiverSide(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsRoughGround(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsRoute(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsRoutePillaged(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsStartingPlot(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsUnit(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsValidFoundLocation(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsWater(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsWOfCliff(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsWOfRiver(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsWonderComplete(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetOwner(playerID: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetProperty(key: string, value: any): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    SharesAdjacentArea(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `terrainClassIndex`: number
     */
    GetTerrainClassType(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `componentIDs`: AnyTable
     */
    GetComponentID(): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsShallowWater(): boolean;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface Citizens
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsDisfavoredYield(yieldType: YieldTypes): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsFavoredYield(yieldType: YieldTypes): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsPlotWorked(x: number, y: number): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `wasSuccess`: boolean
     */
    SetFavoredYield(yieldType: YieldTypes, isFavored: boolean): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yieldType`: YieldTypes
     */
    SetDisfavoredYield(): YieldTypes;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    IsYieldDisfavored(yieldType: YieldTypes): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    IsYieldFavored(yieldType: YieldTypes): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CityAI
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `recommendations`: AnyTable
     */
    GetBuildRecommendations(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `recommendations`: AnyTable
     */
    GetImprovementRecommendationsForBuilder(Unit: Unit): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetImprovementRecommendations(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CulturalIdentity
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `sources`: AnyTable
     */
    GetIdentitySourcesBreakdown(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `conversionOutcome`: IdentityConversionOutcome
     */
    GetConversionOutcome(): IdentityConversionOutcome;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `identities`: AnyTable
     */
    GetPlayerIdentitiesInCity(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetLoyaltyPerTurn(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetGovernorIdentityPressures(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    GetPotentialTransferPlayer(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `pressureBreakdown`: AnyTable
     */
    GetIdentitySourcesDetailedBreakdown(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetLoyaltyPerTurnStatus(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAlwaysFullyLoyal(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `loyaltyLevel`: number
     */
    GetLoyaltyLevel(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `identityPressures`: AnyTable
     */
    GetCityIdentityPressures(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `ratio`: number
     */
    GetLoyaltyPerTurnFromIdentityPressureRatio(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turns`: number
     */
    GetTurnsToConversion(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetMaxLoyalty(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetLoyalty(): number;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface Culture
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    GetCultureYield(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `currentCulture`: number
     */
    GetCurrentCulture(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Plot`: Plot
     */
    GetNextPlot(): Plot;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cost`: number
     */
    GetNextPlotCultureCost(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turns`: number
     */
    GetTurnsUntilExpansion(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `City`: City
     */
    GetCity(): City;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetTourism(): number;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface Districts
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `District`: District
     */
    FindID(districtID: number): District;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `District`: District
     */
    GetDistrict(districtIndex: number): District;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `x`: number
     * - `y`: number
     */
    GetDistrictLocation(districtID: number): LuaMultiReturn<[number, number]>;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumAllowedDistrictsRequiringPopulation(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumDistricts(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumZonedDistrictsRequiringPopulation(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasDistrict(districtID: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsContaminated(districtID: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsPillaged(districtID: number, Plot: Plot): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `members`: AnyTable
     */
    Members(): AnyTable;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetDistrictByIndex(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RemoveDistrict(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetCount(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetDistrictAtLocation(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetDistrictPillaged(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetDistrictByType(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetDistrictByID(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetNumDistrictsOfType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsComplete(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plotID`: number
     */
    GetPrereqDistrictPlotID(): number;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface District
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `slots`: number
     */
    GetAirSlots(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `airUnits`: AnyTable
     */
    GetAirUnits(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `strength`: number
     */
    GetAttackStrength(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `strength`: number
     */
    GetBaseDefenseStrength(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `City`: City
     */
    GetCity(): City;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetComponentID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `damage`: number
     */
    GetDamage(defenseType: DefenseTypes): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `strength`: number
     */
    GetDefenseStrength(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `entertainment`: number
     */
    GetExtraRegionalEntertainment(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `range`: number
     */
    GetExtraRegionalRange(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `districtID`: number
     */
    GetID(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `damage`: number
     */
    GetMaxDamage(defenseType: DefenseTypes): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Player`: Player
     */
    GetOwner(): Player;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `rate`: number
     */
    GetReligionHealRate(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `type`: string
     */
    GetType(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `x`: number
     */
    GetX(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `y`: number
     */
    GetY(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    GetYield(yieldType: YieldTypes): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsComplete(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsUnderSiege(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetLocation(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAdjacencyYield(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    CanAttack(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsPillaged(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAirUnitCount(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetDamage(defenseType: DefenseTypes, damage: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeDamage(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetProperty(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetProperty(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetPillaged(isPillaged: boolean): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 * 
 * In UI context, this is CachePlayer.
 */
declare interface Player
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanUnreadyTurn(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeScoringScenario1(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeScoringScenario2(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeScoringScenario3(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAgendaTypes(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `AiDiplomacy`: AiDiplomacy
     */
    GetAi_Diplomacy(): AiDiplomacy;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `AiMilitary`: AiMilitary
     */
    GetAi_Military(): AiMilitary;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `AiReligious`: AiReligious
     */
    GetAi_Religion(): AiReligious;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetCategoryScore(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerCities`: PlayerCities
     */
    GetCities(): PlayerCities;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerCulture`: PlayerCulture
     */
    GetCulture(): PlayerCulture;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerDiplomacy`: PlayerDiplomacy
     */
    GetDiplomacy(): PlayerDiplomacy;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `AiDiplomacy`: AiDiplomacy
     */
    GetDiplomaticAI(): AiDiplomacy;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerDistricts`: PlayerDistricts
     */
    GetDistricts(): PlayerDistricts;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetEra(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerEras`: PlayerEras
     */
    GetEras(): PlayerEras;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetFavor(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetFavorPerTurn(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetFavorEnteringCongress(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerGovernors`: PlayerGovernors
     */
    GetGovernors(): PlayerGovernors;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `AiGrandStrategic`: AiGrandStrategic
     */
    GetGrandStrategicAI(): AiGrandStrategic;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerGreatPeoplePoints`: PlayerGreatPeoplePoints
     */
    GetGreatPeoplePoints(): PlayerGreatPeoplePoints;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    GetID(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerImprovements`: PlayerImprovements
     */
    GetImprovements(): PlayerImprovements;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerInfluence`: PlayerInfluence
     */
    GetInfluence(): PlayerInfluence;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `InfluenceMap`: InfluenceMap
     */
    GetInfluenceMap(): InfluenceMap;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `value`: any
     */
    GetProperty(propertyKey: string): any;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerReligion`: PlayerReligion
     */
    GetReligion(): PlayerReligion;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerResources`: PlayerResources
     */
    GetResources(): PlayerResources;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetScore(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetScoringScenario1(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetScoringScenario2(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetScoringScenario3(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetStartingPlot(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerStats`: PlayerStats
     */
    GetStats(): PlayerStats;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `teamID`: number
     */
    GetTeam(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerTechs`: PlayerTechs
     */
    GetTechs(): PlayerTechs;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerTrade`: PlayerTrade
     */
    GetTrade(): PlayerTrade;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerTreasury`: PlayerTreasury
     */
    GetTreasury(): PlayerTreasury;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerUnits`: PlayerUnits
     */
    GetUnits(): PlayerUnits;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerWMDs`: PlayerWMDs
     */
    GetWMDs(): PlayerWMDs;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    GrantYield(yieldIndex: number, amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAI(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAlive(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsBarbarian(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsFreeCities(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsHuman(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsInitialized(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsMajor(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsTurnActive(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsTurnActiveComplete(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetProperty(property: string, value: any): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetScoringScenario(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetScoringScenario1(followers: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    SetScoringScenario2(cities: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    SetScoringScenario3(faith: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetStartingPlot(Plot: Plot): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    WasEverAlive(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `componentID`: AnyTable
     */
    GetComponentID(): AnyTable;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    AttachModifierByID(modifier: string): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    GrantWMDs(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `details`: string
     */
    GetFavorPerTurnToolTip(): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `agendaTypes`: AnyTable
     */
    GetAgendasAndVisibilities(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsMinor(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `properties`: AnyTable
     */
    GetProperties(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `loyalty`: number
     */
    GetCivilianLoyalty(): number;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CityGold
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cost`: number
     */
    GetPlotPurchaseCost(plotID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cost`: number
     */
    GetPurchaseCost(yieldID: number, any_DistrictUnitBuildingHash: number, formationType: MilitaryFormationTypes): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsBuildingFaithPurchaseEnabled(buildingHash: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsUnitFaithPurchaseEnabled(unitHash: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanPlaceUnit(): boolean;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface CityGrowth
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenities(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesFromCivics(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesFromEntertainment(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesFromGreatPeople(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesFromLuxuries(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesFromNationalParks(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesFromReligion(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesFromStartingEra(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesLostFromBankruptcy(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesLostFromWarWeariness(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesNeeded(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetFood(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetFoodSurplus(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetGrowthThreshold(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetHappiness(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetHappinessGrowthModifier(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetHappinessNonFoodYieldModifier(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetHousing(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetHousingFromBuildings(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetHousingFromCivics(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetHousingFromDistricts(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetHousingFromGreatPeople(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetHousingFromImprovements(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetHousingFromStartingEra(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetHousingFromWater(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetHousingGrowthModifier(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetOccupationGrowthModifier(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetOtherGrowthModifier(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetOverallGrowthModifier(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetTurnsUntilGrowth(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetTurnsUntilStarvation(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesFromCityStates(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetHousingFromGreatWorks(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetLoyaltyGrowthModifier(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesFromTraits(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesFromNaturalWonders(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `City`: City
     */
    GetCity(): City;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesFromImprovements(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesFromDistricts(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAmenitiesFromGovernors(): number;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface CityReligion
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    AddReligiousPressure(unknown: number, religionID: number, pressure: number, majorPlayerID: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `pantheonID`: number
     */
    GetActivePantheon(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `religionID`: number
     */
    GetMajorityReligion(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `followerCount`: number
     */
    GetNumFollowers(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `pressure`: number
     */
    GetPressureFromCity(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `religions`: AnyTable
     */
    GetReligionsInCity(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `pressure`: number
     */
    GetTotalPressureOnCity(religionID: number): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetAllCityToReligion(religionID: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    AddOneFollower(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RemoveOtherReligions(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RemovePressureOneReligion(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNextReligion(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTurnsToNextReligion(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetReligiousPressureSources(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `City`: City
     */
    GetCity(): City;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface Trade
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `routes`: AnyTable
     */
    GetIncomingRoutes(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `routes`: AnyTable
     */
    GetOutgoingRoutes(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasActiveTradingPost(Player: Player): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasInactiveTradingPost(Player: Player): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `City`: City
     */
    GetCity(): City;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasTradeRouteFrom(playerID: number): boolean;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CityPower
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetFreePower(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `breakdown`: AnyTable
     */
    GetFreePowerSources(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `breakdown`: AnyTable
     */
    GetGeneratedPowerSources(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetMissingPower(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    GetPlotsCoveredByRegionalPower(): Plot[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    GetPlotsProvidingPower(): Plot[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetRequiredPower(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `breakdown`: AnyTable
     */
    GetRequiredPowerSources(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetTemporaryPower(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `breakdown`: AnyTable
     */
    GetTemporaryPowerSources(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsFullyPowered(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsFullyPoweredByActiveProject(): boolean;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay
 * 
 * Instance of a free city, unused by Firaxis.
 */
declare interface FreeCities
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `freeCityID`: number
     */
    GetIndex(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `location`: {x: number, y: number}
     */
    GetLocation(): {x: number, y: number};
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `x`: number
     */
    GetX(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `y`: number
     */
    GetY(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Plot`: Plot
     */
    GetPlot(): Plot;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetUrbanDefenses(): number;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface DiplomacyDeal
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsDemand(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    GetOtherPlayerID(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `DiplomacyDealItem`: DiplomacyDealItem
     */
    FindItemByType(itemType: DealItemTypes, agreementType: DealAgreementTypes): DiplomacyDealItem;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `DiplomacyDealItem`: DiplomacyDealItem
     */
    FindItemByValueType(itemType: DealItemTypes, dealSubType: DealItemSubTypes, valueType: number, playerID: number): DiplomacyDealItem;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    RemoveItemByID(itemID: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    AddItemOfType(itemType: DealItemTypes, playerID: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    GetPlayer1ID(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsGift(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetItemCount(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `diplomacyDealItems`: DiplomacyDealItem[]
     */
    FindItemsByValueType(): DiplomacyDealItem[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    SetUnacceptableItem(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    ClearItemsByValue(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsValid(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    FindItemsByType(itemType: DealItemTypes, dealSubType: DealItemSubTypes, playerID: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    ClearItemsByType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    SetUnacceptableItemByID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    Items(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    Validate(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    GetPlayer2ID(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetItemParent(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasUnacceptableItems(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    RemoveItem(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    FindItemByID(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface DiplomacyDealItem
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    SetToPlayerID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetEndTurn(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    SetValueType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasPossibleAmounts(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetAmount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    SetLocked(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    SetParameterValue(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetToPlayerID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetParentID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    HasPossibleDurations(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetParameterValue(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetSubType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetMaxAmount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsChild(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetDuration(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetValueTypeNameID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    SetFromPlayerID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetSubTypeID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetValueType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsValid(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsLocked(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetEnactedTurn(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetValueCategory(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    SetAmount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    SetDuration(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsUnacceptable(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetFromPlayerID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetMinAmount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetSubTypeNameID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasPossibleValues(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    SetSubType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetValueTypeID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    SetPlayerIDs(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetPlayerIDs(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsExpired(): boolean;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface Barbarians
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    CreateTribeOfType(tribeID: number, plotID: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    CreateTribeUnits(tribeID: number, unitClass: string, amount: number, plotID: number, withinHexDistance: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    StartOperationWithCityTarget(tribeID: number, behaviorTrees_TreeName: string, targetPlayerID: number, targetCityID: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    CreateSpecificTribe(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cost`: number
     */
    GetTribeInciteCost(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTribeInciteTargets(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTribeConversionPoints(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTribeBribeTurnsRemaining(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTribeInciteTargetPlayer(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTribeConversionPercent(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTribeIndexAtLocation(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTribeType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTribeNameType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTribeRansomUnit(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTribeConversionPointsRequired(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTribeConversionDisabledHelp(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTribeCampLocation(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsClanExcludeUnitType(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    GetTribeInciteSourcePlayer(tribeID: number): number;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface GameEras
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Does not work in base game.
     * 
     * Returns: 
     * - `era`: number
     */
    GetCurrentEra(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turn`: number
     */
    GetCurrentEraMinimumEndTurn(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turn`: number
     */
    GetCurrentEraMaximumEndTurn(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turn`: number
     */
    GetCurrentEraStartTurn(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `era`: number
     */
    GetFinalEra(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turn`: number
     */
    GetNextEraCountdown(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetPlayerCurrentScore(playerID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetPlayerNumAllowedCommemorations(playerID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasDarkAge(playerID: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasGoldenAge(playerID: number): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangePlayerEraScore(playerID: number, amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetPlayerGoldenAgeThreshold(playerID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `thresholdBreakdown`: AnyTable
     */
    GetPlayerDarkAgeThresholdBreakdown(playerID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetPlayerPreviousDarkAgeThreshold(playerID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetPlayerDarkAgeThreshold(playerID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsPlayerAlwaysAllowedCommemorationQuest(playerID: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `thresholdBreakdown`: AnyTable
     */
    GetPlayerGoldenAgeThresholdBreakdown(playerID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetCurrentEraNumPlayersAsOrLessAdvanced(playerID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetCurrentEraNumPlayersMoreAdvanced(playerID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetPlayerPreviousScore(playerID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasHeroicGoldenAge(playerID: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `commemorationTypes`: number[]
     */
    GetPlayerCommemorateChoices(playerID: number): number[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `eraScoreBreakdown`: AnyTable
     */
    GetPlayerPreviousEraScoreBreakdown(playerID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `commemorationTypes`: number[]
     */
    GetPlayerActiveCommemorations(playerID: number): number[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetPlayerPreviousGoldenAgeThreshold(playerID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetPlayerThresholdBaseline(playerID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetPlayerComplimentChoices(playerID: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `eraScoreBreakdown`: AnyTable
     */
    GetPlayerCurrentEraScoreBreakdown(playerID: number): AnyTable;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface FalloutManager
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    AddFallout(plotID: number, turns: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasFallout(plotID: number): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RemoveFallout(plotID: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    SetFalloutPreventsWork(plotID: number, allow: boolean): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetFalloutTurnsRemaining(plotID: number, turns: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turns`: number
     */
    GetFalloutTurnsRemaining(plotID: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetReactorCount(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    GetFalloutPreventsWork(plotID: number): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `damage`: number
     */
    GetFalloutDamageOverride(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `reactorInfo`: AnyTable
     */
    GetReactorByIndex(reactorID: number): AnyTable;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetFalloutDamageOverride(damage: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `age`: number
     */
    GetReactorAge(City: City): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `threshold`: number
     */
    GetReactorAccidentThreshold(City: City): number;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface GameDiplomacy
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `benefits`: string
     */
    GetAllianceBenefitsString(allianceID: number, allianceLevel: number, unknown: boolean): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turns`: number
     */
    GetDenounceTimeLimit(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turns`: number
     */
    GetMinPeaceDuration(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetAlliesShareVisFlag(doesShare: boolean): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `logEntries`: AnyTable[]
     */
    GetGrievanceLogEntries(player1ID: number, player2ID: number): AnyTable[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetGrievanceChangeTooltip(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetGrievanceChangePerTurn(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface GameGreatPeople
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    GrantPerson(greatPersonIndividual_Hash: number, greatPersonClass_Hash: number, era_Hash: number, cost: number, playerID: number, unknown: boolean): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `timeline`: AnyTable
     */
    GetTimeline(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `earnCondText`: string
     */
    GetEarnConditionsText(playerID: number, greatPersonIndividualType: string): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    CountPeopleReceivedByPlayer(classIndex: number, playerID: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanRejectPerson(playerID: number, greatPersonIndividualType: string): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `GPPCost`: number
     */
    GetRecruitCost(playerID: number, greatPersonIndividualType: string): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `GPPCost`: number
     */
    GetRejectCost(playerID: number, greatPersonIndividualType: string): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `timeline`: AnyTable
     */
    GetPastTimeline(): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cost`: number
     */
    GetPatronizeCost(playerID: number, greatPersonIndividualType: string, yieldType: YieldTypes): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanRecruitPerson(playerID: number, greatPersonIndividualType: string): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanPatronizePerson(playerID: number, greatPersonIndividualType: string, yieldType: YieldTypes): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RecruitPerson(playerID: number, greatPersonIndividualType: string): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    CreatePerson(playerID: number, greatPersonIndividualType: string, mapX: number, mapY: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsClassAvailable(greatPersonClassIndex: number): boolean;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface QuestsManager
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetActiveQuestDescription(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetActiveQuestName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetActiveQuestReward(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasActiveQuestFromPlayer(playerID: number, minorID: number, questType: string): boolean;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface GameReligion
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    AddBelief(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    FoundPantheon(playerID: number, beliefID: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    FoundReligion(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetName(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetReligions(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    AddBeliefHash(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    IsInSomePantheon(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    AddBuilding(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    IsTooManyForReligion(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    HasBeenFounded(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    IsInSomeReligion(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    HasBeliefEachType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    IsNewTypeForReligion(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    FoundPantheonHash(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetMinimumFaithNextPantheon(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface TradeManager
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    CalculateDestinationYieldFromAttachingResource(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    CalculateDestinationYieldFromModifiers(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number, yieldIndex: number, resourceIndex: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    CalculateDestinationYieldFromPath(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number, yieldIndex: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    CalculateDestinationYieldFromPotentialRoute(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number, yieldIndex: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    CalculateOriginYieldFromAttachingResource(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    CalculateOriginYieldFromModifiers(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number, yieldIndex: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    CalculateOriginYieldFromPath(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number, yieldIndex: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    CalculateOriginYieldFromPotentialRoute(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number, yieldIndex: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    CalculateYieldFromIncomingRoutes(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    CalculateYieldFromOutgoingRoutes(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanStartRoute(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number, unknown: boolean): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanStartRouteWithResource(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yields`: AnyTable
     */
    CalculateOriginYieldsFromPotentialRoute(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yields`: AnyTable
     */
    CalculateDestinationYieldsFromPath(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    CalculateDestinationYieldsFromAttachingResource(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yields`: AnyTable
     */
    CalculateOriginYieldsFromModifiers(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yields`: AnyTable
     */
    CalculateDestinationYieldsFromPotentialRoute(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     * - `portalEntrances`: AnyTable
     * - `portalExits`: AnyTable
     */
    GetTradeRoutePath(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number): LuaMultiReturn<[Plot[], AnyTable, AnyTable]>;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    CalculateOriginYieldsFromAttachingResource(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yields`: AnyTable
     */
    CalculateOriginYieldsFromPath(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yields`: AnyTable
     */
    CalculateDestinationYieldsFromModifiers(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `pressure`: number
     */
    CalculateDestinationReligiousPressureFromPotentialRoute(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsRouteAllowed(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `pressure`: number
     */
    CalculateOriginReligiousPressureFromPotentialRoute(originCityPlayerID: number, originCityID: number, toCityPlayerID: number, toCityID: number): number;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CacheCongressManager
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `costData`: AnyTable
     */
    GetVotesandFavorCost(playerID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsInSession(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `congressMeetingData`: AnyTable
     */
    GetMeetingStatus(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `resolutions`: AnyTable
     */
    GetResolutions(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetEmergencies(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetPreviousVotesOnResolution(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetReview(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTurnsUntilSpecialSessionAllowed(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetProposals(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface GameHeroesManager
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    CreateHero(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsHeroDiscovered(playerID: number, heroClassIndex: number): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetHeroDiscovered(playerID: number, heroClassIndex: number, isDiscovered: boolean): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    PlayerDiscoverNextHero(playerID: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cityID`: number
     */
    GetHeroOriginCityID(heroClassIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `heroClassIndex`: number
     */
    GetUnitHeroClass(unitIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    GetHeroClaimPlayer(heroClassIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `charges`: number
     */
    GetHeroClassBaseCharges(heroClassIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `buildingIndex`: number
     */
    GetPlayerHeroOriginBuildingType(playerID: number): number;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CacheGameTechs
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `techNodes`: AnyTable
     */
    GetActiveTechNodes(): AnyTable;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CacheGameHistoryManager
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasPrideMoments(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetMomentCount(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `moments`: AnyTable
     */
    GetAllMomentsData(playerID: number, interestLevel: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `momentData`: AnyTable
     */
    GetMomentData(momentID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `momentType`: string
     */
    GetMomentType(momentID: number): string;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `path`: string
     * - `fileName`: string
     */
    WritePrideMomentInfo(): LuaMultiReturn<[string, string]>;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CacheGameEconomicManager
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsResourceMonopoly(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `corporations`: AnyTable
     */
    GetPlayerCorporations(playerID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasIndustry(playerID: number, resourceIndex: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanHaveIndustry(playerID: number, resourceIndex: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `corpName`: string
     */
    GetCorporationName(playerID: number, resourceIndex: number): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `industries`: AnyTable
     */
    GetPlayerIndustries(playerID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasCorporation(playerID: number, resourceIndex: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasCorporationOf(playerID: number, resourceIndex: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumControlledResources(playerID: number, resourceIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasIndustryOf(playerID: number, resourceIndex: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    GetResourceMonopolyPlayer(resourceIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    CanHaveCorporation(playerID: number, resourceIndex: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `resources`: AnyTable
     */
    GetMapResources(): AnyTable;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CacheEmergencyManager
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `emergencyInfo`: AnyTable
     */
    GetSingleEmergency(targetPlayerID: number, emergencyIndex: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `emergencies`: AnyTable
     */
    GetEmergencyInfoTable(targetPlayerID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `emergencyInfo`: AnyTable
     */
    GetNextBlockingEmergency(targetPlayerID: number): AnyTable;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CacheGameNationalParks
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsNationalPark(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    GetPossibleParkTiles(playerID: number): Plot[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `name`: string
     */
    GetNationalParkName(): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `nationalParks`: AnyTable
     */
    EnumerateNationalParks(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `nationalParkInfo`: AnyTable
     */
    GetAtLocation(x: number, y: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `nationalParkInfo`: AnyTable
     */
    GetAtIndex(plotID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetCount(): number;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CacheGameGossipManager
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `gossipStrings`: AnyTable
     */
    GetRecentVisibleGossipStrings(earliestTurn: number, player1ID: number, player2ID: number): AnyTable;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CacheGameCulture
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `civicNodes`: AnyTable
     */
    GetActiveCivicNodes(): AnyTable;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CityPlots
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetPurchasedByCity(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetPurchasedByCityID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[] — Every plot owned by a city
     */
    GetPurchasedPlots(City: City): Plot[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[] — Every visible plot owned by a city
     */
    GetVisiblePurchasedPlots(City: City): Plot[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetWorkingCity(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetWorkingCityID(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface Notification
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetTarget(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    IsVisibleInUI(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetAddedTurn(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    IsExpired(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetPlayerID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    IsDismissed(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetSummary(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    IsTargetValid(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetMessage(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetLocation(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    Activate(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    IsIconDisplayable(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetValue(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    IsAutoNotify(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    IsNeeded(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetCount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    CanUserDismiss(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetTypeName(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    IsValidForPhase(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetGroup(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetEndTurnBlocking(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetSeverity(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    AutoExpires(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetExpireTurn(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetIconName(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    IsLocationValid(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerConfiguration
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    DeleteMapPin(pinID: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `desc`: string
     */
    GetCivilizationDescription(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `levelType`: CivilizationLevelTypes
     */
    GetCivilizationLevelTypeID(): CivilizationLevelTypes;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `civilizationLevelTypeName`: string
     */
    GetCivilizationLevelTypeName(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `shortDesc`: string
     */
    GetCivilizationShortDescription(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `civilizationIndex`: number
     */
    GetCivilizationTypeID(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `civilizationName`: string
     */
    GetCivilizationTypeName(): string;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `color`: number
     */
    GetColor(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `difficultyHash`: number
     */
    GetHandicapTypeID(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `password`: string
     */
    GetHotseatPassword(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `name`: string
     */
    GetLeaderName(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `leaderIndex`: number
     */
    GetLeaderTypeID(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `leaderTypeName`: string
     */
    GetLeaderTypeName(): string;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `MapPinConfiguration`: MapPinConfiguration
     */
    GetMapPin(x: number, y: number): MapPinConfiguration;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `MapPinConfiguration`: MapPinConfiguration
     */
    GetMapPinID(pinID: number): MapPinConfiguration;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `pins`: MapPinConfiguration[]
     */
    GetMapPins(): MapPinConfiguration[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    GetModReady(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `steamID`: number
     */
    GetNetworkIdentifer(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `nickName`: string
     */
    GetNickName(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `civName`: string
     */
    GetPlayerName(): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    GetReady(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `leaderName`: string
     */
    GetSlotName(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `slotStatus`: SlotStatus
     */
    GetSlotStatus(): SlotStatus;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `location`: {x: number, y: number}
     */
    GetStartingPosition(): {x: number, y: number};
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `teamID`: number
     */
    GetTeam(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `teamName`: string
     */
    GetTeamName(): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `value`: any
     */
    GetValue(config: string): any;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    GetWantsPause(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAI(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAlive(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAvailable(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsHidden(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsHuman(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsInUse(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsLocked(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsObserver(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsParticipant(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsPossibleParticipant(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetHandicapTypeID(difficultyHash: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetHidden(isHidden: boolean): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetHotseatName(hotseatPlayerName: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetHotseatPassword(password: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetLeaderName(name: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetLeaderTypeName(leaderTypeName: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetLocked(isLocked: boolean): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetMajorCiv(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetReady(isReady: boolean): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetSlotStatus(slotStatus: SlotStatus): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetTeam(teamID: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetValue(config: string, value: any): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetWantsPause(wantsPause: boolean): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetCivilizationTypeName(civilizationName: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetLeaderRandomPoolID(randomPoolType: LeaderRandomPoolTypes): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsHumanRequired(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `randomPoolType`: LeaderRandomPoolTypes
     */
    GetLeaderRandomPoolID(): LeaderRandomPoolTypes;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 * 
 * Instance of a map pin.
 */
declare interface MapPinConfiguration
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `iconName`: string
     */
    GetIconName(): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `y`: number
     */
    GetHexY(): number;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetVisibility(chatTargetType: ChatTargetTypes): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetIconName(iconName: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `x`: number
     */
    GetHexX(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsPrivate(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsVisible(playerID: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `chatTargetType`: ChatTargetTypes
     */
    GetVisibility(): ChatTargetTypes;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    GetPlayerID(): number;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetName(name: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `pinID`: number
     */
    GetID(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `name`: string
     */
    GetName(): string;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay
 */
declare interface AiDiplomacy
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    AdjustBaseDiplomacy(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetDiplomaticModifiers(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetDiplomaticScore(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetDiplomaticState(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetTradeWithHuman(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetTradeWithHuman(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    GetTrustFrom(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetDiplomaticStateIndex(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetDealItemDesirabilityString(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetDealItemDesirability(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTrustString(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetThreatFrom(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetThreatString(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay
 */
declare interface AiMilitary
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    AddUnitToScriptedOperation(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    AllowUnitConstruction(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    CanConstructUnits(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    HasOperationAgainst(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    PrepareForWarWith(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ScriptForceUpdateTargets(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetRival(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetScriptedOperationReady(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetScriptedTargetAndRally(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    StartScriptedOperation(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    StartScriptedOperationWithTargetAndRally(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay
 */
declare interface AiReligious
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetFavoredReligion(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerCities
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    Create(x: number, y: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    Destroy(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    FindID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `City`: City
     */
    GetCapitalCity(): City;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetCount(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetFirstRangedAttackCity(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNextCapturedCity(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    Members(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    IsCityWithinRange(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNextRebelledCity(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    FindClosest(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsValidFoundLocation(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `City`: City
     */
    GetOriginalCapitalCity(): City;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerCulture
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanChangeGovernment(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanChangeGovernmentAtAll(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanProgress(civicIndex: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanSlotPolicy(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanTriggerBoost(civicIndex: number): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeCurrentCulturalProgress(amount: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CivicCompletedThisTurn(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CivicUnlocksGovernment(civicInfo: AnyTable): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turns`: number
     */
    GetAnarchyTurns(governmentIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAutoThemedBuilding(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetCivicCompletedThisTurn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetCivicPath(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetCivicQueue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetCostToUnlockPolicies(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetCulturalProgress(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetCultureCost(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetCultureYield(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetCultureYieldToolTip(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetCurrentGovernment(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetEnactPolicyCost(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetExtraTradeRouteTourismModifier(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetFlatBonus(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetIncrementingBonus(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetIncrementingBonusIncrement(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetIncrementingBonusInterval(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetIncrementingBonusTurnsUntilNext(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetLifetimeCulture(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNumPoliciesUnlocked(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetNumPolicySlots(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNumPolicySlotsOpen(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetPolicyToUnlock(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetProgressingCivic(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetSlotPolicy(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetSlotType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetStaycationers(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTourismAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTourismTooltipAt(plotID: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTouristsAt(plotID: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTouristsFrom(plotID: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTouristsFromTooltip(playerID: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTouristsTo(playerID: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTurnsLeft(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetTurnsLeftOnCurrentCivic(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTurnsToProgressCivic(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GovernmentChangeConsidered(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GovernmentChangeMade(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasBoostBeenTriggered(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasCivic(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsGovernmentUnlocked(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsInAnarchy(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsPolicyObsolete(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsPolicyUnlocked(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    PolicyChangeMade(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    RequestChangeGovernment(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    RequestClearSlot(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    RequestEnactPolicy(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    RequestPolicyChanges(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ReverseBoost(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetCivic(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetCivicCompletedThisTurn(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetCulturalProgress(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetCurrentGovernment(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetGovernmentChangeConsidered(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    TriggerBoost(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    UnlockGovernment(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    UnlockPolicy(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetProgressingCivic(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsDominantOver(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ClearPolicySlot(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsPolicyActive(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    Reset(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    GetTurnsUntilVictory(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanPolicyBeSlotted(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAutoThemedEligible(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAnarchyEndTurn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTurnsUntilDominant(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsCivicRevealed(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsEverAutoThemable(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetGreatWorksInCity(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsPolicyBanned(): boolean;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerDiplomacy
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanDeclareWarOn(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanMakePeaceWith(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    ComputeCityWarmongerPoints(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    ComputeDOWWarmongerPoints(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    ComputeResearchAgreementTurns(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    DeclareWarOn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAllianceLevel(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAlliancePointsPerTurn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAllianceTurnsThisLevel(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAllianceTurnsToNextLevel(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAllianceTurnsUntilExpiration(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAllianceType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAtWarChangeTurn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetDenounceTurn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetDiplomaticActionCost(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetMetTurn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNextEscapingSpyID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNextPursuedSpyID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNthCapturedSpy(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNthOffMapSpy(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNumPlayersMet(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNumSpiesCaptured(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNumSpiesOffMap(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetPlayersMet(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetPlayersMetIDs(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetResearchAgreementTech(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetSourceTurnsRemaining(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetSpyCapacity(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetVisibilityOn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetWarmongerLevel(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasAllied(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasDefensivePact(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasDelegationAt(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasEmbassyAt(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasMet(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasOpenBordersFrom(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAtWarWith(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAtWarWithHumans(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsDiplomaticActionValid(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsFightingAnyJointWarWith(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsFightingJointWarAgainst(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsVisibilitySourceActive(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RecheckVisibilityOnAll(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SendKudoTo(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SendWarningTo(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetHasAllied(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetHasDelegationAt(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetHasEmbassyAt(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetHasMet(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetPermanentAlliance(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetVisibilityOn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanLiberateCityTo(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetRecentMissions(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetGrievancesAgainst(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    CalcFavorPerTurnFromAlliances(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetMission(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetDeclaredFriendshipTurn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsPromiseMade(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAlliancePointsTooltip(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    NeverMakePeaceWith(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    RecheckVisibilityOn(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    MakePeaceWith(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetHasDeclaredFriendship(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasDeclaredFriendship(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetFavorPerTurn(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    ChangeFavor(amount: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetFavor(): number;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerDistricts
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    FindID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetCount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    Members(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay
 */
declare interface PlayerEras
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetEra(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetEra(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetStartingEra(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerGovernors
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanAppoint(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanPromote(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeGovernorPoints(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAssignedCity(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAssignedGovernor(City: City): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetGovernorList(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetGovernorPoints(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetGovernorPointsSpent(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTurnsToEstablish(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasGovernor(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasTitleBeenConsidered(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetTitleConsidered(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    CanAppointGovernor(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `secretSocietyIndex`: number
     */
    GetSecretSociety(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    CanEverAppointGovernor(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsGovernorEstablished(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanPromoteGovernor(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanAssignGovernor(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAwareOfSecretSociety(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetBaseTurnsUntilEstablished(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CacheGovernor`: CacheGovernor
     */
    GetGovernor(governorHash: number): CacheGovernor;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanEarnPromotion(): boolean;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface AiGrandStrategic
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetCivicsRecommendations(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTechRecommendations(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetSettlementRecommendations(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerGreatPeoplePoints
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    CalculatePointsPerTurn(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangePointsTotal(greatPersonClassIndex: number, amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetPointsPerTurn(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetPointsTotal(greatPersonClassIndex: number): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetPointsTotal(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    IsNoPatronageWith(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface PlayerImprovements
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetImprovementPlots(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerInfluence
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    CanGiveInfluence(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    CanGiveTokensToPlayer(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    CanLevyMilitary(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    CanReceiveInfluence(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeTokensToGive(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetLevyMilitaryCost(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetLevyTurnCounter(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetLevyTurnLimit(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetMostTokensReceived(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetPointsEarned(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetPointsPerTurn(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetPointsThreshold(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetSuzerain(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetTokensPerThreshold(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetTokensReceived(playerID: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetTokensToGive(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    GiveFreeTokenToPlayer(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    IsGivingTokensConsidered(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    IsSuzerainUniqueBonusDisabled(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetGivingTokensConsidered(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface InfluenceMap
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    Find(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerReligion
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    CanAfford(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    CanCreatePantheon(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeFaithBalance(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeNumBeliefsEarned(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetFaithBalance(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetFaithYield(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetFaithYieldToolTip(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetHolyCityID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNumBeliefsEarned(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetPantheon(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetReligionInMajorityOfCities(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetReligionTypeCreated(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    HasLaunchedInquisition(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    HasReligiousFoundingUnit(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetFaithBalance(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetHolyCity(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerResources
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetBonusResourcePerTurn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetExportedResourceAmount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetPowerResourceDemandPerTurn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetReservedResourceAmount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetResourceAccumulationPerTurn(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetResourceAmount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetResourceStockpileCap(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetUnitResourceDemandPerTurn(resourceIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    HasExportedResource(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    HasResource(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    IsResourceExtractableAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    IsResourceVisible(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetResourcesExtractedByCity(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetCityResourceAllocations(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    IsResourceBanned(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetResourceImportPerTurn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetResourceAllocationCities(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeResourceAmount(resourceIndex: number, amount: number): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerStats
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetMilitaryStrength(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumBeliefsInReligion(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumCitiesFollowingReligion(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumDistrictsFollowingReligion(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumFollowers(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumForeignCitiesFollowingReligion(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumForeignFollowers(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumMyCitiesFollowingSpecificReligion(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumProjectsAdvanced(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumTechsResearched(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetTourism(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTourismToolTip(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    UpdateMaxMeleeStrengthTrained(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetScienceVictoryPointsTotalNeeded(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    GetHasRevivedPlayer(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetScienceVictoryPoints(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumCivicsCompleted(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNumBuildingsOfType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetDiplomaticVictoryPointsTooltip(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetDiplomaticVictoryPoints(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetScienceVictoryPointsPerTurn(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetMilitaryStrengthWithoutTreasury(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    UpdateMaxBombardStrengthTrained(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    UpdateMaxRangedStrengthTrained(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetNumCitiesFollowingReligionWithWonder(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeScienceVictoryPoints(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerTechs
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanResearch(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanTriggerBoost(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeCurrentResearchProgress(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetResearchCost(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetResearchingTech(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetResearchPath(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetResearchProgress(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetResearchQueue(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetScienceYield(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetScienceYieldToolTip(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetTurnsLeft(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetTurnsToResearch(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasBoostBeenTriggered(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasTech(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsResearchingTech(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    ResearchQueue(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    ResearchQueueAux(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ReverseBoost(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetResearchingTech(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetResearchProgress(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetTech(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    TriggerBoost(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsTechRevealed(): boolean;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerTrade
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    CountOutgoingRoutes(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetLandRangeRefuel(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNumOutgoingRoutes(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetOutgoingRouteCapacity(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetWaterRangeRefuel(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    CalcFavorPerTurnFromTradePartners(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetInternationalYieldModifier(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerTreasury
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    CanAfford(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeGoldBalance(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetBuildingMaintenance(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetDistrictMaintenance(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetGoldBalance(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetGoldYield(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetGoldYieldToolTip(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetTotalMaintenance(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTotalMaintenanceToolTip(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetUnitMaintenance(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetWMDMaintenance(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetGoldBalance(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeGoldBalanceByPercentage(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetMaintDiscountPerUnit(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerUnits
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    Create(unitID: number, x: number, y: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    Destroy(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    FindID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetCount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetFirstReadyUnit(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNextExtractingArchaeologist(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    Members(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetBuildDisabled(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RecomputeAllCosts(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RecomputeCost(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `info`: {NeedsAttention: number, Total: number, Automated: number, CanMove: number}
     */
    GetProcessingState(): {NeedsAttention: number, Total: number, Automated: number, CanMove: number};
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsBuildDisabled(): boolean;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerWMDs
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanDeployWMD(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetWeaponCount(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeWeaponCount(amount: number): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface PlayerVisibility
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetVisibilityCount(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RevealAllPlots(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    AddOutgoingVisibility(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsVisible(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsRevealed(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetState(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RemoveOutgoingVisibility(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeVisibilityCount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetLayerValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsUnitVisible(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNumRevealedHexes(): number;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface Area
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `areaID`: number
     */
    GetID(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetImprovementCount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetPlotCount(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetResourceCount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetRiverEdgeCount(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetTotalImprovements(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTotalNaturalWonders(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTotalResources(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasNoFlatCoast(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsCanyons(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsMountains(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsNone(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsWater(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `boundaries`: {NorthEdge: number, WestEdge: number, SouthEdge: number, EastEdge: number}
     */
    GetBoundaries(): {NorthEdge: number, WestEdge: number, SouthEdge: number, EastEdge: number};
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay
 */
declare interface MapFeature
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetDirection(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    GetPlots(): Plot[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetType(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface Territory
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `name`: string
     */
    GetName(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `centerX`: number
     * - `centerY`: number
     */
    GetCentroid(): LuaMultiReturn<[number, number]>;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsSea(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsLake(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `terrainClassIndex`: number
     */
    GetTerrainClass(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `territoryID`: number
     */
    GetID(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetTotalNaturalWonders(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetRiverEdgeCount(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetPlotCount(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetBoundaries(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetTotalFeatures(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsNone(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetName(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetFeatureCount(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 * 
 * In UI context, this is CacheUnit.
 */
declare interface Unit
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeDamage(amount: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeExtraMoves(amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAirSlots(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `hasAirUnits`: boolean
     * - `amount`: number
     */
    GetAirUnits(): LuaMultiReturn<[boolean, number]>;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAntiAirCombat(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cityID`: number
     */
    GetArchaeologyHomeCity(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAttacksRemaining(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `tribeID`: number
     */
    GetBarbarianTribeIndex(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetBombardCombat(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetBuildCharges(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetCombat(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetDamage(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `UnitExperience`: UnitExperience
     */
    GetExperience(): UnitExperience;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `moves`: number
     */
    GetExtraMoves(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetFormationClass(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetFormationID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `moves`: number
     */
    GetFormationMaxMoves(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `moves`: number
     */
    GetFormationMovesRemaining(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetFormationUnitCount(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turns`: number
     */
    GetFortifyTurns(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `UnitGreatPerson`: UnitGreatPerson
     */
    GetGreatPerson(): UnitGreatPerson;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `greatWorkID`: number
     */
    GetGreatWorkIndex(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `unitID`: number
     */
    GetID(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plotX`: number
     * - `plotY`: number
     */
    GetLocation(): LuaMultiReturn<[number, number]>;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `lootName`: string
     */
    GetLootName(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `maxDamage`: number
     */
    GetMaxDamage(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `maxMoves`: number
     */
    GetMaxMoves(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `formationType`: MilitaryFormationTypes
     */
    GetMilitaryFormation(): MilitaryFormationTypes;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `movementMoves`: number
     */
    GetMovementMovesRemaining(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `moves`: number
     */
    GetMovesRemaining(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `unitName`: string
     */
    GetName(): string;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetOperationParameter(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `operationType`: UnitOperationTypes
     */
    GetOperationType(): UnitOperationTypes;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    GetOriginalOwner(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    GetOwner(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `value`: any
     */
    GetProperty(property: string): any;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `pursuingSpyName`: string
     */
    GetPursuingSpyName(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `range`: number
     */
    GetRange(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `rangedCombatStrength`: number
     */
    GetRangedCombat(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `UnitReligion`: UnitReligion
     */
    GetReligion(): UnitReligion;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `religionID`: number
     */
    GetReligionType(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetReligiousStrength(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetSpreadCharges(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `operationType`: UnitOperationTypes
     */
    GetSpyOperation(): UnitOperationTypes;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turnsRemaining`: number
     */
    GetSpyOperationEndTurn(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `unitIndex`: number
     */
    GetType(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `unitType`: string
     */
    GetUnitType(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `upgradeCost`: number
     */
    GetUpgradeCost(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `x`: number
     */
    GetX(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `y`: number
     */
    GetY(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasHiddenVisibility(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasMovedIntoZOC(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasPendingOperations(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IgnoresZOC(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAutomated(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsCannotAttack(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsDead(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsDelayedDeath(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsEmbarked(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsHuman(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsReadyToAutomate(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsReadyToMove(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsReadyToSelect(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetDamage(amount: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetFortifyTurns(amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plotID`: number
     */
    GetPlotId(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeMovesRemaining(amount: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeActionCharges(amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    GetBarbarianTargetPlayer(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetMilitaryFormation(formationType: MilitaryFormationTypes): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CacheUnitRockBand`: CacheUnitRockBand
     */
    GetRockBand(): CacheUnitRockBand;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `UnitAbility`: UnitAbility
     */
    GetAbility(): UnitAbility;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `resourceIndex`: number
     * - `cost`: number
     */
    GetUpgradeResourceCost(): LuaMultiReturn<[number, number]>;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `value`: any
     */
    SetProperty(key: string): any;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    GetHeroClassType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetParkCharges(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `domainType`: DomainTypes
     */
    GetDomain(): DomainTypes;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetTypeHash(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetActionCharges(amount: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `properties`: Record<string, any>
     */
    GetProperties(): Record<string, any>;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `IDs`: AnyTable
     */
    GetParentID(): AnyTable;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `unitIDs`: number[]
     */
    GetFormationUnitIDs(): number[];
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `units`: Unit[]
     */
    GetFormationUnits(): Unit[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetReligiousHealCharges(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CacheUnitArchaeology`: CacheUnitArchaeology
     */
    GetArchaeology(): CacheUnitArchaeology;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetDisasterCharges(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `children`: AnyTable[]
     */
    GetChildIDs(): AnyTable[];
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsHero(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CacheUnitTrade`: CacheUnitTrade
     */
    GetTrade(): CacheUnitTrade;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetActionCharges(): number;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface UnitExperience
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeExperience(amount: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `nextLevelXP`: number
     */
    GetExperienceForNextLevel(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `currentXP`: number
     */
    GetExperiencePoints(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `level`: number
     */
    GetLevel(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `promotionList`: AnyTable
     */
    GetPromotions(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Unit`: Unit
     */
    GetUnit(): Unit;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `name`: string
     */
    GetVeteranName(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasPromotion(promotionID: number): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetPromotion(promotionID: number, active: boolean): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeStoredPromotions(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanPromote(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetVeteranName(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetExperienceLocked(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface UnitGreatPerson
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `charges`: number
     */
    GetActionCharges(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    GetActivationHighlightPlots(): Plot[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    GetAreaHighlightPlots(): Plot[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `greatPersonClass`: string
     */
    GetClass(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `greatPersonID`: number
     */
    GetIndividual(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `greatPersonPassiveText`: string
     */
    GetPassiveEffectText(): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `greatPersonPassiveName`: string
     */
    GetPassiveNameText(): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Unit`: Unit
     */
    GetUnit(): Unit;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasPassiveEffect(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsGreatPerson(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `greatPersonHash`: number
     */
    GetIndividualHash(): number;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay
 */
declare interface UnitReligion
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeEvictPercent(amount: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeForeignSpreadModifier(amount: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeNWDeferredCharges(amount: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeReligiousHealCharges(amount: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeReligiousStrength(amount: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeSpreadCharges(amount: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `percent`: number
     */
    GetEvictPercent(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetForeignSpreadModifier(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetInitiationAmount(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yield`: number
     */
    GetInitiationYield(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetNWDeferredCharges(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `religionID`: number
     */
    GetReligionType(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetReligiousHealCharges(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `strength`: number
     */
    GetReligiousStrength(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetSpreadCharges(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsConvertsBarbarians(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsNoForeignSpread(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsRelicUponDeath(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetConvertsBarbarians(isAble: boolean): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetEvictPercent(percent: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetForeignSpreadModifier(amount: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetInitiationAmount(amount: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetInitiationYield(yield: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetNoForeignSpread(isUnable: boolean): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetRelicUponDeath(isAble: boolean): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetReligionType(religionID: number): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CacheUnitRockBand
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsMaxLevel(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `level`: number
     */
    GetRockBandLevel(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plotIDs`: number[]
     */
    GetAreaHighlightPlots(): number[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plotIDs`: number[]
     */
    GetActivationHighlightPlots(): number[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetAlbumSales(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Unit`: Unit
     */
    GetUnit(): Unit;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsMaxPromotions(): boolean;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface UnitAbility
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasAbility(unitAbilityType: string): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `unitAbilityIndexes`: number[]
     */
    GetAbilities(): number[];
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RemoveAbilityCount(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanHaveAbility(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ChangeAbilityCount(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetAbilityCount(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    AddAbilityCount(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CacheUnitArchaeology
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Unit`: Unit
     */
    GetUnit(): Unit;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetActivationHighlightPlots(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetGreatWorkIndex(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAreaHighlightPlots(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetHomeBuilding(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetHomeCityID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetArtifactIndex(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface CacheUnitTrade
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetLastDestinationTradeCityComponentID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetLastOriginTradeCityComponentID(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare interface Portal
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plotID`: number
     */
    GetEntrancePlotIndex(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    GetExitCount(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plotID`: number
     */
    GetExitPlotIndex(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasEntranceAt(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasExitAt(): boolean;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay
 */
declare interface WorldBuilderMapManager
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanPlaceResource(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetPlotValue(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    DoesPlotBorderRiver(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsImprovementPlaceable(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    EditCliff(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanPlaceImprovement(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    CanPlaceFeature(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetContinentType(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsWonderTooClose(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetImprovementType(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetImprovementPillaged(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetRouteType(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    LoadPlotsFromTiled(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetPlotValue(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetDimensionsFromTiled(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetContinentPlots(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetFeatureType(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetAllRevealed(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetCoastalLowland(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetResourceType(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetFeaturePlacementPlotList(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetRevealed(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    EditRiver(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetTerrainType(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay
 */
declare interface WorldBuilderConfigurationManager
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetMapValue(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetMapValue(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetMapValues(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay
 */
declare interface WorldBuilderPlayerManager
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetRandomMajorStartingPosition(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsPlayerInitialized(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    PlayerHasTech(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetPlayerSlotStatus(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetStartPositionInfo(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    AddPlayer(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetCivilizationStartingPosition(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     * 
     * ---
     * Cannot be used to change player leader or civilization mid-game
     */
    SetPlayerLeader(playerID: number, leaderIndex: number, civilizationIndex: number, civilizationLevelType: CivilizationLevelTypes): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetPlayerConfig(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetLeaderStartingPosition(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ClearStartingPosition(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    InitializePlayer(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    ClearPlayerStartingPosition(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetPlayerFaith(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetSlotStatus(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    PlayerHasCivic(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetPlayerHasTech(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetPlayerEra(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetStartPositionPlayer(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetRandomMinorStartingPosition(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetPlayerGold(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetPlayerStartingPosition(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    UninitializePlayer(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `maxPlayers`: number
     */
    GetMaxPlayers(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetPlayerHasCivic(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay
 */
declare interface WorldBuilderModManager
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RemoveString(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetString(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetString(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetKeyStringPairByIndex(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetLanguageByIndex(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetKeyStringPairByIndex(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay
 */
declare interface WorldBuilderCityManager
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    CreateDistrict(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RemoveBuilding(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetDistrictValue(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RemoveAt(Plot: Plot): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetDistrictValue(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    Remove(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RemoveAll(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RemoveDistrict(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    CreateBuilding(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetPlotOwner(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `value`: number
     */
    GetCityValue(City: City, key: string): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    Create(playerID: number, Plot: Plot): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetCityValue(City: City, key: string, value: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    SetPlotOwner(Plot: Plot, City: City): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `City`: City
     */
    GetCity(): City;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay
 */
declare interface WorldBuilderUnitManager
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    Create(unitIndex: number, playerID: number, Plot: Plot): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    Remove(Unit: Unit): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RemoveAll(playerID: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    RemoveAt(Plot: Plot): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface FriendsInstance
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsOverlayEnabled(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    ActivateGameOverlayToUrl(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetFriendCount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    ActivateGameOverlayToChat(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    ActivateGameOverlay(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `friendInfo`: {ID: number, IsOnline: boolean, IsHosting: boolean, PlayerName: string}
     */
    GetFriendByIndex(friendIndex: number): {ID: number, IsOnline: boolean, IsHosting: boolean, PlayerName: string};
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    ClearRichPresence(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    ActivateGameOverlayToFriendRequest(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetRichPresence(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    ActivateGameOverlayToUser(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    ActivateInviteOverlay(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    DeclineInvite(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    InviteUserToGame(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    AcceptInvite(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    ActivateGameOverlayToStore(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetRichPresence(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    ActivateOverlayToUserGeneratedContent(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface TypedDataVariantParameters
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    Remove(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `TypedDataVariant`: TypedDataVariant
     */
    Add(name: string): TypedDataVariant;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `TypedDataVariant`: TypedDataVariant
     */
    Get(name: string): TypedDataVariant;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface TypedDataVariant
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetValueAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetCount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    Get(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    RemoveAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    AppendValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetKeyAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetValueAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetValueIndex(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    ContainsValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    InsertValueAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    Remove(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    Add(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface InputStruct
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetFlags(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetKey(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `keyEvent`: KeyEvents
     */
    GetMessageType(): KeyEvents;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetMouseDX(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetMouseDY(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTouchID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetWheel(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetX(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetY(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsShiftDown(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsControlDown(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsLButtonDown(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsRButtonDown(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsMButtonDown(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsAnyButtonDown(): boolean;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface Control
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetOffset(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetOffsetX(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetOffsetY(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetOffsetVal(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetOffsetX(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetOffsetY(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetOffsetVal(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetScreenOffset(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetAnchor(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetAllChildrenVisible(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetHide(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetShow(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetNoClip(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsHidden(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsVisible(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetNumChildren(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetChildren(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    ReprocessAnchoring(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetSizeX(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetSizeY(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetSizeVal(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetSize(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetSizeX(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetSizeY(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetSizeVal(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    DoAutoSize(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetParentRelativeSizeX(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetParentRelativeSizeY(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetParentRelativeSizeVal(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetParentRelativeSize(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetParentRelativeSizeX(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetParentRelativeSizeY(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetParentRelativeSizeVal(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetParentRelativeOffset(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetColor(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetColorByName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetAlpha(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetAlpha(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SortChildren(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    AddChildAtIndex(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    BranchResetAnimation(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetDisabled(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsDisabled(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetEnabled(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsEnabled(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetModal(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsModal(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetTag(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetTag(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    CalculateVisibilityBox(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetToolTipCallback(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    ClearToolTipCallback(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    IsToolTipEnabled(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    EnableToolTip(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetToolTipType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetToolTipString(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    LocalizeAndSetToolTip(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetToolTipString(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    ChangeParent(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetParent(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetParentByType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetParentByID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    Reparent(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    HasMouseOver(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    DestroyChild(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    ReleaseChild(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetConsumeMouseOver(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetConsumeMouseButton(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    SetConsumeMouseWheel(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetConsumeMouseOver(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetConsumeMouseButton(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetConsumeMouseWheel(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    DestroyAllChildren(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    RegisterMouseEnterCallback(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    RegisterMouseExitCallback(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    RegisterMouseOverCallback(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    RegisterWhenShown(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    RegisterWhenHidden(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    ClearMouseEnterCallback(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    ClearMouseExitCallback(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    ClearMouseOverCallback(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: Gameplay
 */
declare interface Frac
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    BuildRidges(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    GetHeight(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    Destroy(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

/**
 * **Contexts**: UI
 */
declare interface DirtyComponents
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    Clear(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    AddEvent(componentEvent: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    AddComponent(playerID: number, componentID: number, componentType: ComponentType): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    Members(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    GetCount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    MembersAux(): void;
    //Name of the object's class; differs between UI and Gameplay Context
    TypeName: string;
    __instances: LuaTable<LuaUserdata, LuaTable>;
}

