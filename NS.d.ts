/** @noSelfInFile **/


/**
 * **Contexts**: Gameplay, UI
 */
declare namespace Cities
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function DestroyCity(Player: Player, City: City): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `City`: City
     */
    export function GetCityInPlot(x: number, y: number): City;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `City`: City
     */
    export function GetPlotPurchaseCity(plotID: number): City;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `City`: City
     */
    export function GetPlotWorkingCity(plotID: number): City;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsCityInPlot(Plot: Plot): boolean;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace CityManager
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
    export function CanStartCommand(City: City, commandType: CityCommandTypes, operationParameters: AnyTable): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function CanStartOperation(City: City, operationType: CityOperationTypes, operationParameters: AnyTable): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function DestroyCity(playerID: number, districtID: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function DestroyDistrict(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `City`: City
     */
    export function GetCity(Player: Player, cityID: number): City;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `City`: City
     */
    export function GetCityAt(x: number, y: number): City;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `targets`: AnyTable
     */
    export function GetCommandTargets(City: City, commandType: CityCommandTypes, operationParameters: AnyTable): AnyTable;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetDistrict(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetDistrictAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `targets`: AnyTable
     */
    export function GetOperationTargets(City: City, operationType: CityOperationTypes, operationParameters: AnyTable): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsCity(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsDistrict(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RequestCommand(City: City, commandType: CityCommandTypes, operationParameters: AnyTable): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RequestOperation(City: City, operationType: CityOperationTypes, operationParameters: AnyTable): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetAsCapital(City: City): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetAsOriginalCapital(City: City): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function TransferCityToFreeCities(City: City): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function TransferCity(City: City, playerID: number, transferType: CityTransferTypes): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `FreeCities`: FreeCities
     */
    export function GetFreeCityAt(x: number, y: number): FreeCities;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace CombatManager
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
    export function CanAttackTarget(atk_unitComponentID: number, dfd_unitComponentID: number, combatType: CombatTypes): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAttackChangeWarState(unitComponentID: number, x: number, y: number): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `combatResults`: AnyTable
     */
    export function SimulateAttackInto(atk_ComponentID: number, combatType: CombatTypes, x: number, y: number): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `combatResults`: AnyTable
     */
    export function SimulateAttackVersus(atk_componentID: number, dfd_componentID: number, combatType: CombatTypes): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `combatResults`: AnyTable
     */
    export function SimulatePriorityAttackInto(atk_ComponentID: number, combatType: CombatTypes, x: number, y: number): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetBestDefender(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetBestInterceptor(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GenerateCombatResults(): void;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace DealManager
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
    export function AreWorkingDealsEqual(initiatingPlayerID: number, otherPlayerID: number): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function ClearWorkingDeal(direction: DealDirection, initiatingPlayerID: number, otherPlayerID: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function CopyIncomingToOutgoingWorkingDeal(initiatingPlayerID: number, otherPlayerID: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `deals`: AnyTable
     */
    export function GetPlayerDeals(initiatingPlayerID: number, otherPlayerID: number): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `dealItems`: DiplomacyDealItem[]
     */
    export function GetPossibleDealItems(initiatingPlayerID: number, otherPlayerID: number, itemType: DealItemTypes, DiplomacyDeal: DiplomacyDeal): DiplomacyDealItem[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `DiplomacyDeal`: DiplomacyDeal
     */
    export function GetWorkingDeal(direction: DealDirection, initiatingPlayerID: number, otherPlayerID: number): DiplomacyDeal;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasPendingDeal(initiatingPlayerID: number, otherPlayerID: number): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SendWorkingDeal(proposalAction: DealProposalAction, initiatingPlayerID: number, otherPlayerID: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function RequestUpdate(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function EditWorkingDeal(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function EnactWorkingDeal(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ViewPendingDeal(): void;
}

/**
 * **Contexts**: UI
 */
declare namespace DiplomacyManager
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function AddResponse(sessionID: number, playerID: number, response: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function AddStatement(sessionID: number, playerID: number, statement: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function CloseSession(sessionID: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `sessionID`: number
     */
    export function FindOpenSessionID(playerID: number, otherPlayerID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `reasonTextKey`: string
     */
    export function FindReasonTextKey(reasonText: string, fromPlayerID: number, AIReason: string, AIModifier: string): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `textKey`: string
     */
    export function FindTextKey(statementText: string, fromPlayerID: number, fromMood: string, toPlayerID: number): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetKeyName(statementType: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `sessionInfo`: AnyTable
     */
    export function GetSessionInfo(sessionID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasQueuedSession(playerID: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsSessionIDOpen(sessionID: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RequestSession(fromPlayerID: number, toPlayerID: number, diplomaticAction: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SendAction(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `results`: AnyTable
     * - `wasSuccess`: boolean
     */
    export function TestAction(fromPlayerID: number, toPlayerID: number, actionType: DiplomacyActionTypes, actionParameters: AnyTable): LuaMultiReturn<[AnyTable, boolean]>;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function FindReasonAgendaTextKey(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function AddCommand(): void;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace Game
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function AddWorldViewText(eventSubType: EventSubTypes, text: string, x: number, y: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Barbarians`: Barbarians
     */
    export function GetBarbarianManager(): Barbarians;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turn`: number
     */
    export function GetCurrentGameTurn(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `GameEras`: GameEras
     */
    export function GetEras(): GameEras;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `FalloutManager`: FalloutManager
     */
    export function GetFalloutManager(): FalloutManager;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `GameDiplomacy`: GameDiplomacy
     */
    export function GetGameDiplomacy(): GameDiplomacy;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `GameGreatPeople`: GameGreatPeople
     */
    export function GetGreatPeople(): GameGreatPeople;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: PlayerTypes | number
     */
    export function GetLocalObserver(): PlayerTypes | number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    export function GetLocalPlayer(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `players`: Player[]
     */
    export function GetPlayers(areMajor: boolean, areAlive: boolean): Player[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `value`: any
     */
    export function GetProperty(this: any, property: string): any;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `QuestsManager`: QuestsManager
     */
    export function GetQuestsManager(): QuestsManager;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `number`: number
     */
    export function GetRandNum(upperLimit: number, logDescription: string): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `gameRandomSeed`: number
     */
    export function GetRandomSeed(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `GameReligion`: GameReligion
     */
    export function GetReligion(): GameReligion;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `TradeManager`: TradeManager
     */
    export function GetTradeManager(): TradeManager;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CacheCongressManager`: CacheCongressManager
     */
    export function GetWorldCongress(): CacheCongressManager;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAllowStrategicCommands(playerID: number): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAllowTacticalCommands(playerID: number): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function ObserverCanSeePlayer(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetCurrentGameTurn(turn: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetProperty(this: any, propertyKey: string, value: any): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `properties`: AnyTable
     */
    export function GetProperties(): AnyTable;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetRandomSeed(seed: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function UnlockAchievement(playerID: number, achievement: string): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function WriteHistoryLog(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetComponentID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `GameHeroesManager`: GameHeroesManager
     */
    export function GetHeroesManager(): GameHeroesManager;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `requirementSet`: string
     */
    export function GetDefeatRequirements(playerID: number, defeatType: string): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turnSegName`: string
     */
    export function GetCurrentTurnSegmentName(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turnSegHash`: number
     */
    export function GetCurrentTurnSegment(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetCurrentTurnPhase(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function RetirePlayer(playerID: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function GetPhaseName(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `AnyTable`: AnyTable
     */
    export function GetObjectFromComponentID(componentID: AnyTable): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function GetCurrentTurnPhaseName(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsDefeatEnabled(defeatType: string): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetWinningTeam(teamID: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `requirementSetID`: number
     */
    export function GetVictoryRequirements(teamID: number, victoryType: string): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `teamID`: number
     * - `victoryType`: string
     */
    export function GetWinningTeam(): LuaMultiReturn<[number, string]>;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `score`: number
     */
    export function GetVictoryProgressForTeam(victoryType: string, teamID: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsVictoryEnabled(victoryType: string): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGreatWorkType(greatWorkType: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CacheGameTechs`: CacheGameTechs
     */
    export function GetTechs(): CacheGameTechs;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `artifactInfo`: AnyTable
     */
    export function GetArtifactAtPlot(plotID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CacheGameHistoryManager`: CacheGameHistoryManager
     */
    export function GetHistoryManager(): CacheGameHistoryManager;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetActivePlayerCount(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CacheGameEconomicManager`: CacheGameEconomicManager
     */
    export function GetEconomicManager(): CacheGameEconomicManager;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `maxTurns`: number
     */
    export function GetMaxGameTurns(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `nameSuffix`: string
     */
    export function GetUnitNameSuffix(Unit: Unit): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `phaseSound`: string
     */
    export function GetCurrentTurnPhaseSound(): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `units`: Unit[]
     */
    export function GetUnits(): Unit[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CacheEmergencyManager`: CacheEmergencyManager
     */
    export function GetEmergencyManager(): CacheEmergencyManager;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `greatWorkType`: number
     */
    export function GetGreatWorkTypeFromIndex(greatWorkIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetUnitNamePrefix(Unit: Unit): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `name`: string
     */
    export function GenerateUnitName(Unit: Unit, prefix: string, suffix: string): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `artifactInfo`: AnyTable
     */
    export function GetArtifactByIndex(artifactID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turn`: number
     */
    export function GetGameEndTurn(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CacheGameNationalParks`: CacheGameNationalParks
     */
    export function GetNationalParks(): CacheGameNationalParks;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CacheGameGossipManager`: CacheGameGossipManager
     */
    export function GetGossipManager(): CacheGameGossipManager;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CacheGameCulture`: CacheGameCulture
     */
    export function GetCulture(): CacheGameCulture;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    export function GetGreatWorkPlayer(greatWorkIndex: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `greatWorkData`: AnyTable
     */
    export function GetGreatWorkDataFromIndex(greatWorkIndex: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `phaseSound`: string
     */
    export function GetPhaseSound(): string;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace GameClimate
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `droughtID`: number
     */
    export function GetActiveDroughtIDAtPlot(x: number, y: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `droughtType`: number
     */
    export function GetActiveDroughtTypeAtPlot(Plot: Plot): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `stormID`: number
     */
    export function GetActiveStormIDAtPlot(x: number, y: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `stormType`: number
     */
    export function GetActiveStormTypeAtPlot(Plot: Plot): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `climateChangePoints`: number
     */
    export function GetClimateChangeForLastSeaLevelEvent(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `climateChangePoints`: number
     */
    export function GetClimateChangeFromRealism(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `climateChangePoints`: number
     */
    export function GetClimateChangeFromTemperature(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `climateChangeLevel`: number
     */
    export function GetClimateChangeLevel(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CO2Modifier`: number
     */
    export function GetCO2FootprintModifier(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `deforestationType`: number
     */
    export function GetDeforestationType(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `increaseBy`: number
     */
    export function GetDroughtClimateIncreasedChance(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `percentChance`: number
     */
    export function GetDroughtPercentChance(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    export function GetDroughtPlotsByID(droughtID: number): Plot[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turns`: number
     */
    export function GetDroughtTurnsAtPlot(Plot: Plot): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `percentChange`: number
     */
    export function GetEruptionPercentChance(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `increaseBy`: number
     */
    export function GetFloodClimateIncreasedChance(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `percentChance`: number
     */
    export function GetFloodPercentChance(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turnsLeft`: number
     */
    export function GetNextIceLossTurns(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turnsLeft`: number
     */
    export function GetNextSeaLevelRiseTurns(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetNumStorms(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    export function GetOneOffPlotsByID(eventID: number): Plot[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetPlayerCO2Footprint(playerID: number, onlyLastTurn: boolean): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetPlayerResourceCO2Footprint(playerID: number, resourceID: number, onlyLastTurn: boolean): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `increaseBy`: number
     */
    export function GetStormClimateIncreasedChance(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `percentChange`: number
     */
    export function GetStormPercentChance(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    export function GetStormPlotsByID(stormID: number): Plot[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `totalCelsiusChange`: number
     */
    export function GetTemperatureChange(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `numTilesFlooded`: number
     */
    export function GetTilesFlooded(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `numTilesSubmerged`: number
     */
    export function GetTilesSubmerged(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetTotalCO2Footprint(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsStormRevealed(stormID: number, playerID: number): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetActiveDroughtByIndex(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `percentChance`: number
     */
    export function GetEruptionClimateIncreasedChance(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `percentChance`: number
     */
    export function GetFireClimateIncreasedChance(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `avgTemp`: number
     */
    export function GetCurrentAverageTemperature(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetPlayerResourceConsumption(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetSeverityForLastSeaLevelEvent(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetActiveStormPlotsByIndex(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetOneOffByID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `stormInfo`: AnyTable
     */
    export function GetActiveStormByIndex(stormID: number): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `stormInfo`: AnyTable
     */
    export function GetActiveStormAtPlot(Plot: Plot): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `percentChance`: number
     */
    export function GetFirePercentChance(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetNumActiveDroughts(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `storms`: AnyTable
     */
    export function GetStormByID(stormID: number): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetNumActiveStorms(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetDroughtByID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetPlayerRawResourceConsumption(playerID: number, resourceIndex: number, onlyLastTurn: boolean): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    export function GetActiveDroughtPlotsByIndex(droughtID: number): Plot[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetActiveDroughtAtPlot(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetLocationsForPossibleTriggerableEvents(): void;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace GameConfiguration
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function AddEnabledMods(modGUID: string, isEnabled: boolean): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearEnabledMods(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetAIPlayerCount(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerIDs`: number[]
     */
    export function GetAIPlayerIDs(): number[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetAvailablePlayerCount(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerIDs`: number[]
     */
    export function GetAvailablePlayerIDs(): number[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `calendarHash`: number
     */
    export function GetCalendarType(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetCivilizationUsageIDs(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetFirstAvailablePlayer(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `gameModeType`: GameModeTypes
     */
    export function GetGameMode(): GameModeTypes;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `gameSpeedHash`: number
     */
    export function GetGameSpeedType(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `gameStateType`: GameStateTypes
     */
    export function GetGameState(): GameStateTypes;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetHiddenPlayerCount(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerIDs`: number[]
     */
    export function GetHiddenPlayerIDs(): number[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetHumanPlayerCount(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerIDs`: number[]
     */
    export function GetHumanPlayerIDs(): number[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetInUsePlayerCount(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerIDs`: number[]
     */
    export function GetInUsePlayerIDs(): number[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turns`: number
     */
    export function GetMaxTurns(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerIDs`: number[]
     */
    export function GetMultiplayerPlayerIDs(): number[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetObserverCount(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerIDs`: number[]
     */
    export function GetObserverIDs(): number[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetParticipatingPlayerCount(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerIDs`: number[]
     */
    export function GetParticipatingPlayerIDs(): number[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    export function GetPausePlayer(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerIDs`: number[]
     */
    export function GetPossibleParticipatingPlayerIDs(): number[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `modGUIDs`: string[]
     */
    export function GetRequiredMods(): string[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `eraHash`: number
     */
    export function GetStartEra(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `gameStartTurn`: number
     */
    export function GetStartTurn(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `gameStartYear`: number
     */
    export function GetStartYear(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `teamName`: string
     */
    export function GetTeamName(teamID: number): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetTeamPlayerCount(teamID: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turnTimerIndex`: number
     */
    export function GetTurnTimerType(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `configValue`: any
     */
    export function GetValue(configName: string): any;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAnyMultiplayer(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsHotseat(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsInternetMultiplayer(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsLANMultiplayer(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsNetworkMultiplayer(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsPaused(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsSavedGame(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsWorldBuilder(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `hash`: number
     */
    export function MakeHash(text: string): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function PlayersWantPause(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RegenerateSeeds(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RemovePlayer(voidValue1: any, voidValue2: any, control: any): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetCalendarType(calendarHash: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetGameMode(gameModeType: GameModeTypes): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetGameSpeedType(gameSpeedHash: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetMaxTurns(amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetParticipatingPlayerCount(amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetStartEra(startEra: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetStartTurn(turn: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetStartYear(year: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetToDefaults(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetTurnTimerType(turnTimerType: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetValue(configName: string, configValue: any): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetValueHash(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetWorldBuilder(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function UpdateEnabledMods(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsMatchMaking(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetEnabledGameModesMetaString(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetEnableModsMetaString(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetHandicapType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetRuleSet(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsKickVoting(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetKickVoting(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetCloudTurnPlayer(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsPlayByCloud(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetGameState(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetCloudTurnPlayer(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetRuleSet(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetMatchMaking(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetToPreGame(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetEnabledMods(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetWorldBuilderEditor(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetTurnLimitType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsWorldBuilderEditor(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetHandicapType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetTurnLimitType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetToDefaultGameName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsCrossPlayInternetMultiplayer(): boolean;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace GameEffects
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
    export function GetModifierActive(modifierID: number): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `argStr`: string
     */
    export function GetModifierArgumentString(modifierID: number): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetModifierCount(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `modifierDef`: AnyTable
     */
    export function GetModifierDefinition(modifierID: number): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    export function GetModifierOwner(modifierID: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `ownerRequirements`: AnyTable
     */
    export function GetModifierOwnerRequirementSet(modifierID: number): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetModifierReferenceCount(modifierID: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `modifiers`: number[]
     */
    export function GetModifiers(): number[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetModifierSubjectCount(modifierID: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `subjects`: AnyTable
     */
    export function GetModifierSubjects(modifierID: number): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetModifierText(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetModifierTextKey(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetModifierTrackedObjectCount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetModifierTrackedObjects(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetModifierTrackedOjectRequirementSet(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `objName`: string
     */
    export function GetObjectName(playerID: number): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetObjectReferenceCount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetObjectsPlayerId(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetObjectString(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetObjectType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementContext(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementCount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementDefinition(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementInnerRequirements(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementInnerRequirementSets(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementReferenceCount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirements(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementSetContext(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementSetCount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementSetDefinition(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementSetInnerRequirements(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementSetReferenceCount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementSets(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementSetState(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementSetSubject(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementState(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementSubject(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementText(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRequirementTextKey(): void;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace GameRandomEvents
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cities`: AnyTable
     */
    export function GetCurrentAffectedCities(): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `eventResults`: {PopLost: number, UnitsLost: number, TilesDamaged: number, FertilityAdded: number}
     */
    export function GetCurrentTurnEvent(): {PopLost: number, UnitsLost: number, TilesDamaged: number, FertilityAdded: number};
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `eventResults`: {PopLost: number, UnitsLost: number, TilesDamaged: number, FertilityAdded: number}
     */
    export function GetCurrentTurnEventAtPlot(plotID: number): {PopLost: number, UnitsLost: number, TilesDamaged: number, FertilityAdded: number};
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `events`: AnyTable
     */
    export function GetEventsForTurn(turn: number): AnyTable;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function ApplyEvent(eventParameters: AnyTable): void;
}

/**
 * **Contexts**: Gameplay
 */
declare namespace ImprovementBuilder
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
    export function CanHaveImprovement(Plot: Plot, improvementIndex: number, teamID: number): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetImprovementType(Plot: Plot, improvementIndex: number, playerID: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetImprovementPillaged(Plot: Plot, isPillaged: boolean): void;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace Map
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
    export function FindWater(Plot: Plot, range: number, isFreshwater: boolean): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetAdjacentPlot(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `CityPlots`: CityPlots
     */
    export function GetCityPlots(): CityPlots;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetContinentCoastalPlots(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetContinentPlots(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetContinentPlotsAppeal(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetContinentPlotsWaterAvailability(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetContinentsInUse(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetGridSize(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetLandPlotCount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetLandResourceCount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `mapSizeIndex`: number
     */
    export function GetMapSize(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetMaxPlotDistance(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `Plot`: Plot
     */
    export function GetPlot(x: number, y: number): Plot;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Plot`: Plot
     */
    export function GetPlotByIndex(plotID: number): Plot;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetPlotCount(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `tileDistance`: number
     */
    export function GetPlotDistance(plot1X: number, plot1Y: number, plot2X: number, plot2Y: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetPlotIndex(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetPlotLocation(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetPlotXY(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetPlotXYWithRangeCheck(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetResourceCount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetVisibleContinentPlots(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function IsPlot(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsWrapX(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsWrapY(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `units`: Unit[]
     */
    export function GetUnitsAt(Plot: Plot): Unit[];
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function FindSecondContinent(Plot: Plot, unknown: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    export function GetContinentPlotsLoyalty(): Plot[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    export function GetAdjacentPlots(x: number, y: number): Plot[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetNeighborPlots(x: number, y: number, range: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetFeatureCount(featureIndex: number): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    export function GetRingPlots(x: number, y: number, ringLevel: number): Plot[];
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace MapConfiguration
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `mapSizeType`: string
     */
    export function GetMapSize(): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetMaxMajorPlayers(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetMaxMinorPlayers(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetMinMajorPlayers(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetMinMinorPlayers(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `filename`: string
     */
    export function GetScript(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `value`: any
     */
    export function GetValue(configKey: string): any;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetMapSize(mapSizeType: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetMaxMajorPlayers(amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetMaxMinorPlayers(amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetMinMajorPlayers(amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetMinMinorPlayers(amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetScript(filename: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetValue(configKey: string, value: any): void;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace MapFeatureManager
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
    export function CanSufferEruption(Plot: Plot): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `volcanoes`: AnyTable
     */
    export function GetNamedVolcanoes(): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetNumActiveVolcanoes(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetNumEruptions(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetNumNaturalWonderVolcanoes(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetNumNormalVolcanoes(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `percent`: number
     */
    export function GetPercentVolcanoesActive(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `name`: number
     */
    export function GetVolcanoName(Plot: Plot): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsActiveVolcano(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsVolcano(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsVolcanoErupting(): boolean;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace NotificationManager
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function Dismiss(playerID: number, notificationID: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Notification`: Notification
     */
    export function Find(playerID: number, notificationID: number): Notification;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Notification`: Notification
     */
    export function FindEndTurnBlocking(endTurnBlockingType: EndTurnBlockingTypes, playerID: number): Notification;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Notification`: Notification
     */
    export function FindType(notificationType: NotificationTypes, playerID: number): Notification;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `allBlockingTypes`: AnyTable
     */
    export function GetAllEndTurnBlocking(playerID: number): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `endTurnBlockingType`: EndTurnBlockingTypes
     */
    export function GetFirstEndTurnBlocking(playerID: number): EndTurnBlockingTypes;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `notificationIDs`: AnyTable
     */
    export function GetList(playerID: number): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function RestoreVisualState(playerID: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SendNotification(playerID: number, notificationType: NotificationTypes, text: string, desc: string, mapX: number, mapY: number): void;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace PlayerManager
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `players`: Player[]
     */
    export function GetAlive(): Player[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerIDs`: number[]
     */
    export function GetAliveBarbarianIDs(): number[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `players`: Player[]
     */
    export function GetAliveBarbarians(): Player[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `barbarianPlayersAmount`: number
     */
    export function GetAliveBarbariansCount(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerIDs`: number[]
     */
    export function GetAliveIDs(): number[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerIDs`: number[]
     */
    export function GetAliveMajorIDs(): number[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `players`: Player[]
     */
    export function GetAliveMajors(): Player[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetAliveMajorsCount(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerIDs`: number[]
     */
    export function GetAliveMinorIDs(): number[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `players`: Player[]
     */
    export function GetAliveMinors(): Player[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetAliveMinorsCount(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    export function GetFreeCitiesPlayerID(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Player`: Player
     */
    export function GetPlayer(playerID: number): Player;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `players`: Player[]
     */
    export function GetWasEverAlive(): Player[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetWasEverAliveCount(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerIDs`: number[]
     */
    export function GetWasEverAliveIDs(): number[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerIDs`: number[]
     */
    export function GetWasEverAliveMajorIDs(): number[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `players`: Player[]
     */
    export function GetWasEverAliveMajors(): Player[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetWasEverAliveMajorsCount(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAlive(playerID: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsBarbarian(playerID: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsMajor(playerID: number): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsValid(playerID: number): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsValidID(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetLocalObserverTo(playerID: PlayerTypes | number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetLocalPlayerAndObserver(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function WasEverAlive(playerID: number): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetDefaultProperty(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Player`: Player
     */
    export function GetFreeCitiesPlayer(): Player;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `value`: any
     */
    export function GetProperty(): any;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetProperty(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetDefaultProperty(): void;
}

/**
 * **Contexts**: UI
 */
declare namespace PlayerVisibilityManager
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `PlayerVisibility`: PlayerVisibility
     */
    export function GetPlayerVisibility(playerID: number): PlayerVisibility;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsVisibleToNonOwner(): boolean;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace RiverManager
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
    export function CanBeFlooded(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function EnumerateRivers(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    export function GetFloodplainPlots(riverID: number): Plot[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetNumFloodableRivers(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetNumRivers(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `riverID`: number
     */
    export function GetRiverForFloodplain(x: number, y: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRiverName(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetNumFloods(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRiverNameByType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetFloodplainLocation(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRiverByIndex(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRiverIDAtIndex(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRiverTypeAtIndex(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRiverType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRiverIndexByID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRiverByID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsFlooded(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRiverTypes(): void;
}

/**
 * **Contexts**: Gameplay
 */
declare namespace TerrainBuilder
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function CanHaveFeature(Plot: Plot, terrainIndex: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetAdjacentFeatureCount(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `number`: number
     */
    export function GetRandomNumber(upperLimit: number, logDescription: string): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetFeatureType(Plot: Plot, featureID: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetTerrainType(Plot: Plot, terrainIndex: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetMultiPlotFeatureType(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetNWOfRiver(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetNEOfCliff(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetContinentType(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetInlandCorner(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function AnalyzeChokepoints(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetNEOfRiver(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function AddCoastalLowland(plotID: number, elevation: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetWOfCliff(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function AddIce(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetWOfRiver(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetFractalFlags(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function GenerateFloodplains(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetNWOfCliff(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function StampContinents(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetFeaturePlacementPlotList(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetResourceType(Plot: Plot, resourceIndex: number, resourceAmount: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function CanHaveResource(Plot: Plot, resourceIndex: number): boolean;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace TerrainManager
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetCoastalLowlandType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function IsFlooded(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function IsSubmerged(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsProtected(Plot: Plot): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function ClearCoastalFlooding(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SubmergeCoast(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function FloodCoast(): void;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace Territories
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Territory`: Territory
     */
    export function GetTerritoryAt(plotID: number): Territory;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `territories`: AnyTable
     */
    export function Members(): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function MembersAux(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Territory`: Territory
     */
    export function GetTerritory(territoryID: number): Territory;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetCount(): number;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace UnitManager
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
    export function CanFormMilitaryFormation(playerID: number, domain: number, militaryFormationType: number, Unit: Unit): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     * - `results`: AnyTable
     */
    export function CanStartCommand(Unit: Unit, commandType: UnitCommandTypes, unitCommandParameters: AnyTable, returnResults: boolean): LuaMultiReturn<[boolean, AnyTable]>;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     * - `results`: AnyTable
     * @param Plot Can be nil if operationParameters is not nil
     * @param operationParameters Can be nil if Plot is not nil
     */
    export function CanStartOperation(Unit: Unit, operationType: UnitOperationTypes, Plot: Plot, operationParameters: AnyTable, returnResults: boolean): LuaMultiReturn<[boolean, AnyTable]>;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function ChangeMovesRemaining(Unit: Unit, amount: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function FinishMoves(Unit: Unit): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `activityType`: number
     */
    export function GetActivityType(Unit: Unit): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `results`: AnyTable
     */
    export function GetCommandTargets(Unit: Unit, commandType: UnitCommandTypes): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turns`: number
     */
    export function GetEstablishInCityTime(Unit: Unit, City: City): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    export function GetMoveToPath(Unit: Unit, plotID: number): Plot[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetOperationConfirmationText(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `operationDetails`: string
     */
    export function GetOperationDetailText(operationType: UnitOperationTypes, Unit: Unit, Plot: Plot): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `results`: AnyTable
     */
    export function GetOperationTargets(Unit: Unit, operationType: UnitOperationTypes, operationParameters: AnyTable): AnyTable;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetOperationTypeName(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetOwnerName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plotID`: number
     */
    export function GetQueuedDestination(Unit: Unit): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    export function GetReachableMovement(Unit: Unit): Plot[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    export function GetReachableTargets(Unit: Unit): Plot[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `plots`: Plot[]
     */
    export function GetReachableZonesOfControl(Unit: Unit, areVisibleToUnit: boolean): Plot[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `resultProbability`: AnyTable
     */
    export function GetResultProbability(operationType: UnitOperationTypes, Unit: Unit, Plot: Plot): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turns`: number
     */
    export function GetTimeToComplete(operationType: UnitOperationTypes, Unit: Unit): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turns`: number
     */
    export function GetTravelTime(Unit: Unit): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `unitTypeName`: string
     */
    export function GetTypeName(Unit: Unit): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Unit`: Unit
     */
    export function GetUnit(playerID: number, unitID: number): Unit;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `Unit`: Unit
     */
    export function InitUnit(playerID: number, unitType: string, x: number, y: number): Unit;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function InitUnitValidAdjacentHex(playerID: number, unitType: string, x: number, y: number, unkown: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsUnit(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function Kill(Unit: Unit): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function MoveUnit(Unit: Unit, newMapX: number, newMapY: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function PlaceUnit(Unit: Unit, newMapX: number, newMapY: number): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function ReportActivation(Unit: Unit, event: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RequestCommand(Unit: Unit, commandType: UnitCommandTypes, commandParameters: AnyTable): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RequestOperation(Unit: Unit, operationType: UnitOperationTypes, operationParameters: AnyTable): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function RestoreMovement(Unit: Unit): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function RestoreMovementToFormation(Unit: Unit): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function RestoreUnitAttacks(Unit: Unit): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function WakeUnit(Unit: Unit): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `baseLifespan`: number
     */
    export function GetUnitTypeBaseLifespan(unitID: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RequestCommandImmediate(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cost`: number
     */
    export function GetUnitCorpsMaintenance(unitHash: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cost`: number
     */
    export function GetUnitArmyMaintenance(unitHash: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `cost`: number
     */
    export function GetUnitMaintenance(unitHash: number): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetCommandResults(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `pathInfo`: AnyTable
     */
    export function GetMoveToPathEx(Unit: Unit, plotID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `commandDescription`: string
     */
    export function GetCommandHelpText(unitCommandHash: number, playerID: number): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `summaries`: AnyTable
     */
    export function GetAbilitySummaries(unitAbilityID: number): AnyTable;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace Units
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
    export function AreUnitsInPlot(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function AreUnitsInPlotLayerID(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetLayerCount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetPlayerUnitsInPlot(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetPlayerUnitsInPlotLayerID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetUnitByIndexInPlot(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetUnitCountInPlot(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetUnitCountInPlotLayerID(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetUnitCountInPlotLayerIndex(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `units`: Unit[]
     */
    export function GetUnitsInPlot(Plot: Plot): Unit[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `units`: Unit[]
     */
    export function GetUnitsInPlotLayerID(x: number, y: number, mapLayer: MapLayers): Unit[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `units`: Unit[]
     */
    export function GetUnitsInPlotLayerIndex(): Unit[];
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace DB
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     * 
     * ---
     * Hashes inputted text the same way the Gameplay DB does
     * 
     * Returns: 
     * - `hash`: number
     */
    export function MakeHash(text: string): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function CollectMemoryUsage(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function ConfigurationQueryCount(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Query the Gameplay DB, no write permissions so select statements only
     * 
     * Returns: 
     * - `resultSet`: AnyTable[]
     */
    export function Query(SQLQuery: string): AnyTable[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `memoryUsage`: number
     */
    export function GetMemoryUsage(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function QueryCount(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `SQLQuery`: string
     * @param unknown Might be the Index for SQL queries made in your specific Lua Context
     */
    export function ConfigurationQuerySQL(unknown: number): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function ConfigurationChanges(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     * 
     * ---
     * Query the Configuration DB, read/write permissions
     * 
     * Returns: 
     * - `resultSet`: AnyTable[]
     */
    export function ConfigurationQuery(SQLQuery: string): AnyTable[];
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `SQLQuery`: string
     * @param unknown Might be the Index for SQL queries made in your specific Lua Context
     */
    export function QuerySQL(unknown: number): string;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace MapRoutes
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
    export function GetPortalCount(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `Portal`: Portal
     */
    export function GetIndexedPortal(portalID: number): Portal;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace RouteBuilder
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SetRouteType(Plot: Plot, routeType: RouteTypes): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function CanHaveRoute(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SetRoutePillaged(Plot: Plot, isPillaged: boolean): void;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace AutoplayManager
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SetReturnAsPlayer(playerID: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SetTurns(turnsActive: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: PlayerTypes | number
     */
    export function GetObserveAsPlayer(): PlayerTypes | number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `turns`: number
     */
    export function GetTurns(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SetDisableAssertsForAutoplay(value: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetReturnAsPlayer(playerID: number): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetDisableAssertsForAutoplay(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SetActive(isActive: boolean): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsActive(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SetObserveAsPlayer(): void;
}

/**
 * **Contexts**: Gameplay, UI
 * 
 * Does not require the World Builder map editor to be active
 */
declare namespace WorldBuilder
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `WorldBuilderMapManager`: WorldBuilderMapManager
     */
    export function MapManager(): WorldBuilderMapManager;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `WorldBuilderConfigurationManager`: WorldBuilderConfigurationManager
     */
    export function ConfigurationManager(): WorldBuilderConfigurationManager;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function CanUndo(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `WorldBuilderPlayerManager`: WorldBuilderPlayerManager
     */
    export function PlayerManager(): WorldBuilderPlayerManager;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function CanRedo(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function StartUndoBlock(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `WorldBuilderModManager`: WorldBuilderModManager
     */
    export function ModManager(): WorldBuilderModManager;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetMod(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function Redo(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `WorldBuilderCityManager`: WorldBuilderCityManager
     */
    export function CityManager(): WorldBuilderCityManager;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function Undo(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function GetWBAdvancedMode(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `modGUID`: string
     */
    export function GetID(): string;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function ClearVisibilityPreviewPlayer(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetWBAdvancedMode(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsMod(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function SetVisibilityPreviewPlayer(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `wasSuccess`: boolean
     */
    export function SetID(modGUID: string): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function EndUndoBlock(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `WorldBuilderUnitManager`: WorldBuilderUnitManager
     */
    export function UnitManager(): WorldBuilderUnitManager;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function GenerateID(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsActive(): boolean;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace GameCapabilities
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
    export function HasCapability(capability: string): boolean;
}

/**
 * **Contexts**: UI
 */
declare namespace Steam
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
    export function IsOverlayEnabled(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ActivateGameOverlayToUrl(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ActivateGameOverlayToWorkshop(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `appID`: number
     */
    export function GetAppID(): number;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ActivateInviteOverlay(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ActivateGameOverlayToFriendRequest(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ActivateGameOverlayToStore(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function InviteUserToGame(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetMySteamID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ActivateGameOverlay(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ActivateGameOverlayToChat(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearRichPresence(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetOverlayNotificationPosition(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetFriendCount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetRichPresence(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ActivateGameOverlayToUser(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `friendInfo`: AnyTable
     */
    export function GetFriendByIndex(friendIndex: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetRichPresence(): void;
}

/**
 * **Contexts**: UI
 */
declare namespace Modding
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetModGroups(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function CheckRequirements(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function Unsubscribe(workshopItemID: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetModText(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function CanDisableMod(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetSubscriptionDetails(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGameModesFromConfigurationString(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function CreateModGroup(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DeleteModGroup(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function JumpToDigitalMarketplace(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetSubscriptions(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetIgnoreCompatibilityWarnings(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetModProperty(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetUserInterfaces(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `mods`: AnyTable
     */
    export function GetInstalledMods(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function EnableMod(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `modInfo`: AnyTable
     */
    export function GetModInfo(modHandle: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsModEnabled(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetModHandle(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function ParseModUri(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function ShouldShowCompatibilityWarnings(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetIgnoreCompatibilityWarnings(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function CanEnableMod(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetSubscriptionDownloadStatus(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAvailableDLC(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function UpdateSubscription(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetBundleId(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetLastModErrorString(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetDLCNeeedsUpdateMessage(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetODRDownloadInfo(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function PurchaseDLC(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function SetCurrentModGroup(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetDLCPurchaseState(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetDLCDetails(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsModCompatible(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetCurrentModGroup(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LaunchURL(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsTransitioningFromAutosave(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function BundleModText(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RestoreOutOfDateDLC(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsModActive(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `mods`: AnyTable
     */
    export function GetActiveMods(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetFreeTurnsRemaining(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetModAssociations(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAvailableFreeTurnDLC(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ConsumeFreeTurn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsJoinGameAllowed(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DisableMod(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsModOfficial(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetModsFromConfigurationString(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function OwnsDLC(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsLeaderAllowed(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function UpdateParameter(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetLastLoadError(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function RestorePurchase(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsModInstalled(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RestorePurchases(): void;
}

/**
 * **Contexts**: UI
 */
declare namespace Achievements
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAchievementDisplayName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAchievementHash(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAchievementData(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DeleteAchievementData(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAchievementDescription(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetStat(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAchievementName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAchievementUnlocked(): boolean;
}

/**
 * **Contexts**: UI
 */
declare namespace HallofFame
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGraphs(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetReports(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetRulesetTypes(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function UpdateAggregateData(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetLeaderProgress(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetObjectHighlights(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGameData(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetVictoryProgress(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ResetAllData(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetObjectDataPoints(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetRulesetHighlights(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAvailableRulesets(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGameDataPoints(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetStatisticsCategories(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGameObjects(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DeleteAggregateData(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetRulesetDataPoints(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetStatistics(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGameHighlights(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DeleteGame(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGames(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetRulesetPlayableLeaders(): void;
}

/**
 * **Contexts**: Gameplay
 */
declare namespace ResourceBuilder
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
    export function CanHaveResource(): boolean;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function ChangeResourceCount(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetAdjacentResourceCount(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function SetResourceCount(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function SetResourceType(): void;
}

interface LuaDateInfo {
    year: number;
    month: number;
    day: number;
    hour?: number;
    min?: number;
    sec?: number;
    isdst?: boolean;
}

interface LuaDateInfoResult {
    year: number;
    month: number;
    day: number;
    hour: number;
    min: number;
    sec: number;
    isdst: boolean;
    yday: number;
    wday: number;
}

/**
 * **Contexts**: Gameplay, UI
 * 
 * ---
 * Operating System Facilities
 */
declare namespace os
{
    /**
     * Returns an approximation of the amount in seconds of CPU time used by the
     * program.
     */
    function clock(): number;
    
    /**
     * Returns a string or a table containing date and time, formatted according
     * to the given string format.
     *
     * If the time argument is present, this is the time to be formatted (see the
     * os.time function for a description of this value). Otherwise, date formats
     * the current time.
     *
     * If format starts with '!', then the date is formatted in Coordinated
     * Universal Time. After this optional character, if format is the string
     * "*t", then date returns a table with the following fields: year, month
     * (1–12), day (1–31), hour (0–23), min (0–59), sec (0–61), wday (weekday,
     * 1–7, Sunday is 1), yday (day of the year, 1–366), and isdst (daylight
     * saving flag, a boolean). This last field may be absent if the information
     * is not available.
     *
     * If format is not "*t", then date returns the date as a string, formatted
     * according to the same rules as the ISO C function strftime.
     *
     * When called without arguments, date returns a reasonable date and time
     * representation that depends on the host system and on the current locale.
     * (More specifically, os.date() is equivalent to os.date("%c").)
     *
     * On non-POSIX systems, this function may be not thread safe because of its
     * reliance on C function gmtime and C function localtime.
     */
    function date(format?: string, time?: number): string;

    /**
     * Returns a string or a table containing date and time, formatted according
     * to the given string format.
     *
     * If the time argument is present, this is the time to be formatted (see the
     * os.time function for a description of this value). Otherwise, date formats
     * the current time.
     *
     * If format starts with '!', then the date is formatted in Coordinated
     * Universal Time. After this optional character, if format is the string
     * "*t", then date returns a table with the following fields: year, month
     * (1–12), day (1–31), hour (0–23), min (0–59), sec (0–61), wday (weekday,
     * 1–7, Sunday is 1), yday (day of the year, 1–366), and isdst (daylight
     * saving flag, a boolean). This last field may be absent if the information
     * is not available.
     *
     * If format is not "*t", then date returns the date as a string, formatted
     * according to the same rules as the ISO C function strftime.
     *
     * When called without arguments, date returns a reasonable date and time
     * representation that depends on the host system and on the current locale.
     * (More specifically, os.date() is equivalent to os.date("%c").)
     *
     * On non-POSIX systems, this function may be not thread safe because of its
     * reliance on C function gmtime and C function localtime.
     */
    function date(format: '*t', time?: number): LuaDateInfoResult;

    /**
     * Returns the difference, in seconds, from time t1 to time t2 (where the
     * times are values returned by os.time). In POSIX, Windows, and some other
     * systems, this value is exactly t2-t1.
     */
    function difftime(t1: number, t2: number): number;

    /**
     * Returns the current time when called without arguments, or a time
     * representing the local date and time specified by the given table. This
     * table must have fields year, month, and day, and may have fields hour
     * (default is 12), min (default is 0), sec (default is 0), and isdst (default
     * is nil). Other fields are ignored. For a description of these fields, see
     * the os.date function.
     *
     * The values in these fields do not need to be inside their valid ranges. For
     * instance, if sec is -10, it means -10 seconds from the time specified by
     * the other fields; if hour is 1000, it means +1000 hours from the time
     * specified by the other fields.
     *
     * The returned value is a number, whose meaning depends on your system. In
     * POSIX, Windows, and some other systems, this number counts the number of
     * seconds since some given start time (the "epoch"). In other systems, the
     * meaning is not specified, and the number returned by time can be used only
     * as an argument to os.date and os.difftime.
     */
    function time(): number;

    /**
     * Returns the current time when called without arguments, or a time
     * representing the local date and time specified by the given table. This
     * table must have fields year, month, and day, and may have fields hour
     * (default is 12), min (default is 0), sec (default is 0), and isdst (default
     * is nil). Other fields are ignored. For a description of these fields, see
     * the os.date function.
     *
     * The values in these fields do not need to be inside their valid ranges. For
     * instance, if sec is -10, it means -10 seconds from the time specified by
     * the other fields; if hour is 1000, it means +1000 hours from the time
     * specified by the other fields.
     *
     * The returned value is a number, whose meaning depends on your system. In
     * POSIX, Windows, and some other systems, this number counts the number of
     * seconds since some given start time (the "epoch"). In other systems, the
     * meaning is not specified, and the number returned by time can be used only
     * as an argument to os.date and os.difftime.
     */
    function time(table: LuaDateInfo): number;

    /**
     * Returns a string with a file name that can be used for a temporary file.
     * The file must be explicitly opened before its use and explicitly removed
     * when no longer needed.
     *
     * On POSIX systems, this function also creates a file with that name, to
     * avoid security risks. (Someone else might create the file with wrong
     * permissions in the time between getting the name and creating the file.)
     * You still have to open the file to use it and to remove it (even if you do
     * not use it).
     *
     * When possible, you may prefer to use io.tmpfile, which automatically
     * removes the file when the program ends.
     */
    function tmpname(): string;
}

/**
 * **Contexts**: UI
 */
declare namespace Network
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DisplayUGCRestrictionsWarning(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function CheckServerForUnseenComplete(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function UGCRestrictionsEnabled(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetPingTime(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function KickVote(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsNetworkAvailable(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `playerID`: number
     */
    export function GetLocalPlayerID(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function UserAccountChanged(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetInternetTransportType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RestartGame(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ResetPlayTogether(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function JoinGame(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsInternetLobbyServiceAvailable(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsNetSessionHost(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LoadGame(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetInPSPlusFeature(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsPlayerResyncing(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function EnsureNetworkServiceAccountAvailable(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function PresentNpDisconnectedError(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function CloseConnection(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function CanShowFriendChatWindow(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsUserLoggedIntoCrossPlayLobbyService(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function HasSeparateCrossPlayLobbyService(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SaveGame(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsPlayerHotJoining(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RequestPlayerIDChange(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function JoinGameByJoinCode(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function CloudKillGame(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetCompletedGameSeen(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsNetworkServiceAccountAvailable(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsSessionActive(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetChangePlayerID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LeaveGame(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetElapsedSessionTime(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsMatchMaking(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RequestInternetConnection(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SendChat(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function KickPlayer(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsCloudLaunching(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function MatchMake(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function HostGame(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function AttemptConnectionToCrossPlayLobbyService(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetCapability(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function ProfanityFilter(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsSessionInCloseState(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasKickVotedStarted(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasVotedToKick(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasCapability(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function CanViewFriendProfile(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsInSession(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function ResetHasShownNetworkDisconnectError(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGameHostPlayerID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasSingleFriendInvite(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ForceResync(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsPlayerConnected(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `FriendsInstance`: FriendsInstance
     */
    export function GetFriends(): FriendsInstance;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsCloudMatchStarted(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function PSPlusAvailability(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function BroadcastGameConfig(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsCloudJoinsBlocked(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function CloudQuitGame(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsCrossPlayLobbyServiceAvailable(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function CheckServerForCloudNotifications(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsCloudTurnPlayer(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsSessionClosing(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetLocalNetworkMode(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DisplayPossibleNetworkError(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LogIntoCrossPlayLobbyService(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RequestSnapshot(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetNetworkPlatform(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetTransportType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsEveryoneConnected(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsInGameStartedState(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGameConfigurationSaveType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsGameHost(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetServerHostName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetNetSessionHostPlayerID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsPlayerKicked(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function TriggerTestSync(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetJoinCode(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetSessionID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function InvitePlayTogetherUsers(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsInternetMultiplayerInitialized(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsMultiplayerRestrictionEnabled(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetLastJoinedHostName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function CloudEndTurn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsGameCoreActive(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LaunchGame(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function PresentPSPlusCommerceDialog(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function BroadcastPlayerInfo(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsUpdateRequired(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsNpReachable(): boolean;
}

/**
 * **Contexts**: UI
 */
declare namespace Options
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGraphicsOption(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetUserOption(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetDisplayHeight(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAvailableDisplayModes(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsUIUpscaleAllowed(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAppOption(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetGraphicsOption(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SaveOptions(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAudioOption(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGraphicsDefault(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ResetOptions(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetUserOption(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RevertOptions(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RevertResolutionChanges(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsMultiNodeGPU(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetAppOption(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAppInMainMenuState(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ApplyGraphicsOptions(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetAudioOption(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetDisplayWidth(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAvailableDisplayAdapters(): void;
}

/**
 * **Contexts**: UI
 */
declare namespace UI
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
    export function IsUnitSelected(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetFixedTiltMode(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasOutdatedDriver(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `TypedDataVariantParameters`: TypedDataVariantParameters
     */
    export function GetGameParameters(): TypedDataVariantParameters;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LinePlotUnit(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function CanShowModal(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShowFullscreenMap(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LoadSoundBankGroup(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetMapZoom(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function Is2KCloudAvailable(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetMapZoom(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     * 
     * ---
     * Prints a message to MapSearch.log.
     */
    export function MapSearch_LogEnd(message: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetLeaderPosition(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `worldX`: number
     * - `worldY`: number
     * - `worldZ`: number
     */
    export function GridToWorld(mapX: number, mapY: number): LuaMultiReturn<[number, number, number]>;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function WorldWrapEnabled(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetNormalEraSoundSwitchValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RequestPlayerOperation(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetTextControl(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetARXTagsContentByClass(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function MakeSaveGameMetaData(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetHeadSelectedDistrict(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function AddNumberToPath(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetARXDeviceType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function OnNaturalWonderRevealed(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     * 
     * ---
     * Same as Autoprofiler.RunCommand; runs a command in the debug console
     * @param command See https://docs.google.com/document/d/1nb2VnsaCdLU4arKtzU0kHv5WtMRT3c6krpl9nOam3XU
     */
    export function DebugCommand(command: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearTemporaryPlotVisibility(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetLockedWorldRect(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetMapLookAtWorldTarget(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LookAtPlotScreenPosition(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetLookAtTimeScale(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SelectClosestReadyUnit(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsInFrontEnd(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetLastSaveName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function HasARX(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SelectUnitID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetLeaderSceneControl(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function PlayLeaderSceneEffect(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetWorldFromNormalizedScreenPos_NoWrap(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SkipNextAutoEndTurn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function TouchEnableChanged(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function ReferenceCurrentEvent(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function MapSearch_LogBegin(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetHeadSelectedCity(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ApplyFileQueryCivImage(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function AddTemporaryPlotVisibility(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function HighlightPlots(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetSoundStateValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function IsCityIDSelected(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAmbientTimeOfDaySpeed(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function AssertMsg(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SelectNextReadyUnit(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function HasSentTurnComplete(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsWorldRenderViewAvailable(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetPlayerColorValues(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetAmbientTimeOfDaySpeed(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetCursorPlotID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAppVersion(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DeselectCityID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SpinMap(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function EnableTimeOfDayOverride(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RequestAction(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function StopInGameMusic(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsARXDisplayPortrait(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsFileListQueryComplete(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DeselectUnit(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsResyncLoadInProgress(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LinePlotPlot(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function EnqueueNotificationSound(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetCursorPlotCoord(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function CloseAllFileListQueries(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SelectPrevReadyUnit(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function ReferenceEventID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function CanShowPopup(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RebuildSelectionList(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ApplyFileQueryLeaderImage(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetMinimapSize(x: number, y: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DeselectAllUnits(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function ArePlayerColorsConflicting(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetLookAtTimeScale(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsInMarketingMode(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetColorValueFromHexLiteral(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetPushDataIDSeen(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function CloseFileListQuery(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetColorValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RefreshColorSet(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetExitOnClose(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function AreCloudSavesEnabled(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetPauseEventID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetWorldRenderView(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsInGame(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function CanEndTurn(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetManualSaveUsageSize(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DeselectAll(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetFixedTiltAngle(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function CanStartPlayerOperation(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function QuerySaveGameList(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function ShouldCivPlayModMusic(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function HotReloadSounds(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAmbientTimeOfDayAnimating(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAnyModalInterfaceVisible(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsTurnTimerElapsed(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function FocusMap(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function CheckUserSetup(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DeselectCity(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetMaxMSAACount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetPlotCoordFromWorld(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function CanHaveMSAAQuality(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LookAtPosition(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetSaveGameModificationTimeRaw(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsGameCoreBusy(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetPushData(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LinearToSRGB(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetLineControl(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function TruncatePathLevels(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SelectNextCity(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetPathLevels(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function SetPushDataIDClosed(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function SetRestoreMapZoom(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DarkenLightenColor(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function LeaderQualityAllowsMotionBlur(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function PanMap(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DeselectDistrict(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetSoundSwitchValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsVendorNVIDIA(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetMinimapWorldRect(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetPlotCoordFromNormalizedScreenPos(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetWorldFromNormalizedScreenPos(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ToggleGrid(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAmbientTimeOfDay(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function CalculateEdgeSplineSegments(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetRegionCenter(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetColorChannels(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function QueryGlobalParameterInt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RestoreMapZoom(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetColors(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function UnloadSoundBankGroup(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasUnknownDevice(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function StopModCivLeaderMusic(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function PauseModCivMusic(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetLeaderImageControl(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsPlayersLeaderAnimated(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DeselectUnitID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsVendorAMD(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function HasFeature(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SelectUnit(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function FillPlaylistWithAllCivs(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SelectNextUnit(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SelectDistrict(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function HasUnsupportedDevice(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetSaveLocationPath(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAmbienceClipDistance(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetAmbientTimeOfDayAnimating(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SelectCity(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetSelectedUnitUIArt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetPlayerColors(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetDefaultCloudSaveLocation(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function PlayModCivLeaderMusic(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetWorldRenderView(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ReleaseEventID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RebuildColorDB(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsDistrictIDSelected(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function PlaySound(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsMovementPathOn(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsFullscreenMapEnabled(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetSaveGameMetaData(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetCursorNearestPlotEdge(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetCivilizationSoundSwitchValueByLeader(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetAmbienceClipDistance(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAnyPopupInterfaceVisible(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetElapsedTime(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function LeaderQualityRequiresRestart(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetEraSoundSwitchValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function Screenshot(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ResumeModCivMusic(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ReleasePauseEvent(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsFixedTiltModeOn(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GridToHex(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ApplyFileQueryPreviewImage(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearControl(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetRegionClusterPositions(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetARXTagContentByID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetCycleAdvanceTimer(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetVolumes(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DeselectAllCities(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAtMaxSaveCount(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetARXTagPropertyByID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DragMap(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsFinalRelease(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsProcessingMessages(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function AddWorldViewText(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function PartitionRegions(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetHeadSelectedUnit(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RemoveTemporaryPlotVisibility(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SelectDistrictID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearAllControls(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetInterfaceMode(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function StartStopMenuMusic(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SkipSong(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetMinimapImageControl(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function DataError(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LookAtPlot(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetARXTagsPropertyByClass(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DeleteSavedGame(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetInterfaceMode(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SelectPrevCity(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetInterfaceModeParameter(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DisableTimeOfDayOverride(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function SanitizeText(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function SRGBToLinear(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function PlayLeaderAnimation(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetAmbientTimeOfDay(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LineUnitUnit(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsInterfaceTypeVisibile(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function PartitionPath(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SelectCityID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetCivilizationSoundSwitchValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function IsDistrictSelected(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function TextPlot(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetNormalizedScreenPosFromPlotCoord(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAspyrAppVersion(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsUnitIDSelected(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetWorldZ(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function HexToGrid(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetMapZoomCurveModifier(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SelectPrevUnit(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsCitySelected(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DeselectAllDistricts(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function HexToWorld(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LookAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetGamepadCursorPlotID(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAnyInterfaceInGroupVisible(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsLeaderAnimated(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function QueryGlobalParameterFloat(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ToggleMovementPath(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DeselectDistrictID(): void;
}

/**
 * **Contexts**: UI
 */
declare namespace UILens
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function UnFocusCity(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetAdjacencyBonusDistict(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearLayerHexes(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetOverlay(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsPlayerLensSetToActive(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ToggleLayerOn(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsLensActive(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearHexes(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetLayerHexesColoredArea(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsLayerTogglable(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SaveActiveLens(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function CreateLensLayerHash(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetDesaturation(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetLayerHexesPath(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RestoreActiveLens(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function CreatePressureWaves(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetLayerGrowthHex(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearHex(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function HideOverlays(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearPressureWaves(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShowOverlays(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsLayerOn(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetActive(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ToggleLayerOff(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function UnFocusHex(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function FocusCity(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function FocusHex(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetLayerHexesArea(): void;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace Path
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetExtension(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function NormalizePath(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function UsesExtension(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetFileNameWithoutExtension(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetDirectoryName(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetFileName(): void;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace Locale
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `langInfo`: AnyTable
     */
    export function GetCurrentLanguage(): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsUTF8(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function Compare(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsASCII(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsNilOrWhitespace(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function StripTags(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsNilOrEmpty(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function LookupLanguage(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function Compose(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function ToOrdinal(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetLanguageDisplayName(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function ToUpper(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetAudioLanguages(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function ToSpellout(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `romanNumerals`: string
     */
    export function ToRomanNumeral(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SplitString(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SubString(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsValidKey(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function ToLower(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetLanguageCoverage(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function ToNumber(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function EndsWith(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetLanguages(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Replaces occurances of LOC_ tags with localized text from the Localization DB.
     * 
     * Returns: 
     * - `localizedText`: string
     */
    export function Lookup(text: string): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function ToPercent(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function Length(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function Bundle(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasTextKey(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function StartsWith(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `text`: string
     */
    export function LookupBundle(name: string): string;
}

/**
 * **Contexts**: UI
 */
declare namespace Benchmark
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RunAIBenchmark(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RunExp2GraphicsBenchmark(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RunExp2AIBenchmark(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RunGraphicsBenchmark(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsEnabled(): boolean;
}

/**
 * **Contexts**: UI
 */
declare namespace Input
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetActiveLayout(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetCallback(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearGesture(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearGestures(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetActionContext(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetActionCategory(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function PushActiveContext(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetActiveContext(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function StopRecordingGestures(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsRecordingGestures(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetActiveContext(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function BindAction(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShouldShowActionKeybinding(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function BeginRecordingGestures(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetRecordedGestureCount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetActionId(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetMessageType(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetActionDescription(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetKey(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function PopContext(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetActionCount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function HasGesture(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetActionName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetActionEnabled(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGestureDisplayString(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGestureDisplayIcons(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetActiveLayout(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearRecordedGestures(): void;
}

/**
 * **Contexts**: UI
 * 
 * System for placing and managing assets in the game world
 */
declare namespace AssetPreview
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
    export function GetDistrictBuildingList(districtID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DestroyAll(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearLandmarkAt(x: number, y: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetInstanceInfoByID(instanceID: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetInstancePosition(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearLandmarkSystem(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetInstanceAnimation(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function CreateDistrictAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetDistrictBaseList(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetLandmarkCount(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number — Number of 3D asset XLP entries
     */
    export function GetAssetCount(): number;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SpoofLandmarkAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetLandmarkAssetList(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetInstanceCount(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SpoofBuildingAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetUnitList(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `hash`: number
     */
    export function MakeHash(text: string): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `name`: string
     */
    export function GetCivName(civilizationHash: number): string;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetInstanceScale(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAppealName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetInstanceInfoByIndex(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetInstanceSequenceLock(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function Destroy(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function Create(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearUnitSystem(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SpoofCityCivAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function CreateBuildingAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SpoofUnitAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetInstanceAutoDestroy(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetInstanceCulling(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetInstanceOrientation(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SpoofCityAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SpoofDistrictBaseAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetLandmarkName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetDistrictName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetAssetName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetEraName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DestroyAt(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetInstanceAssetState(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetDistrictCount(): void;
}

/**
 * **Contexts**: UI
 */
declare namespace AutoProfiler
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetLookAtCount(count: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function GetWaitForLandmarks(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `testName`: string
     */
    export function GetTestName(): string;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetLookAtFrames(frames: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `frames`: number
     */
    export function GetLookAtFrames(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `GPUStallThreshold`: number
     */
    export function GetGPUStallThreshold(): number;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetFilePath(filePath: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetGPUStallThreshold(GPUStallThreshold: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     * 
     * ---
     * Runs a debug console command.
     * @param command commands
     */
    export function RunCommand(command: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `state`: string
     */
    export function GetStateString(): string;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function Start(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetTestName(testName: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetWaitForLandmarks(waitForLandmarks: boolean): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetCameraZoom(zoom: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function GetWaitForTerrain(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsIdle(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `zoom`: number
     */
    export function GetCameraZoom(): number;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetWaitForTerrain(waitForTerrain: boolean): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `testTimeRemaining`: number
     */
    export function GetTimeRemaining(): number;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function AddColumn(summaryColumnName: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `count`: number
     */
    export function GetLookAtCount(): number;
}

/**
 * **Contexts**: UI
 */
declare namespace UITree
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `civics`: AnyTable
     */
    export function GetAvailableCivics(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `techs`: AnyTable
     */
    export function GetAvailableTechs(): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `layoutType`: string
     */
    export function GetLayoutType(): string;
}

/**
 * **Contexts**: UI
 */
declare namespace FiraxisLive
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function CheckForCloudNotifications(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsMy2KAccountLinked(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsMy2KConnected(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsMy2KLoggedIn(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsFiraxisLiveLoggedIn(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function My2KNewUserResponse(email: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function My2KLegalResponse(agreeList: AnyTable): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsPlatformOrFullAccount(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function My2KMessageResponse(dialogID: number, unknown: boolean): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearCloudGames(gamesListType: 0 /*Public games*/ | 1 /*Personal games*/ | 2 /*Completed games*/): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetAutoCloudNotificationChecks(autoCloudNotifCheck: boolean): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function My2KUnlinkAccount(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function My2KNewUserResponseCancel(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsFiraxisLiveConnected(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function My2KBeginLogin(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetUIReady(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function My2KCreateNewUser(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function My2KLoginUser(email: string, password: string, unknown: boolean): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsFullyLoggedIn(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsKandoConnected(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function My2KEmailResponse(email: string, unknown: boolean): void;
}

/**
 * **Contexts**: UI
 */
declare namespace Matchmaking
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function AcceptCloudGameInvite(matchID: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsRefreshingGameList(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsGameListAtEnd(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetBrowseOffset(amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetBrowseMode(gamesListType: 0 /*Public games*/ | 1 /*Personal games*/ | 2 /*Completed games*/): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RefreshGameList(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `servers`: {serverName: string, serverID: number}[]
     */
    export function GetGameList(): {serverName: string, serverID: number}[];
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `server`: {serverName: string, serverID: number}
     */
    export function GetGameListEntry(lobbyID: number): {serverName: string, serverID: number};
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function StopRefreshingGameList(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function InitLobby(lobbyType: LobbyTypes): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetGameListType(gamesListType: 0 /*Public games*/ | 1 /*Personal games*/ | 2 /*Completed games*/, searchType: 0 /*Search internet*/ | 1 /*Search LAN*/ | 2 /*Search friends*/ | 3 /*Search favorites*/ | 4 /*Search history*/ | 5 /*Search crossplay*/): void;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace Automation
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `saveName`: string
     */
    export function GenerateSaveName(): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `value`: any
     */
    export function GetSetParameter(paramSet: string, param: string): any;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function LogDateAndTime(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SetLocalParameter(localParam: string, value: any): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `value`: any
     */
    export function GetLocalParameter(localParam: string, unknown: any): any;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `unixTimeStamp`: number
     */
    export function GetTime(): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SetInputHandler(inputHandler: Function): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SetAutoStartEnabled(isEnabled: boolean): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function RemoveInputHandler(inputHandler: Function): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAutoStartEnabled(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsPaused(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     * 
     * ---
     * Prints a message to Automation.log, there is no known limit on length.
     */
    export function Log(message: string): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function ClearParameterSet(paramSet: string): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SetSetParameter(paramSet: string, param: string, value: any): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `value`: any
     */
    export function GetStartupParameter(startupParam: string): any;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SetParameterSet(paramSet: string, params: AnyTable): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function LogDivider(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SendTestComplete(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SetActive(isActive: boolean): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `randInt`: number
     */
    export function GetRandomNumber(roof: number): number;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsActive(): boolean;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function Pause(isPaused: boolean): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `params`: AnyTable
     */
    export function GetParameterSet(paramSet: string): AnyTable;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `saveName`: string
     */
    export function GetLastGeneratedSaveName(): string;
}

/**
 * **Contexts**: UI
 */
declare namespace ContextPtr
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetHide(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetSizeX(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsHidden(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetShutdown(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function SetSizeY(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetInputHandler(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function ClearRefreshHandler(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function ChangeParent(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function DestroyChild(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetAutoSize(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function ClearRequestRefresh(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetInitHandler(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsVisible(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetHideHandler(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetPopupParameters(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function CallParentShowHideHandler(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearUpdate(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetParent(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function BuildInstance(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetRefreshHandler(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetPostInit(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetUpdate(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RequestRefresh(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetShowHandler(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function ReprocessAnchoring(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function LookUpControl(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function BuildInstanceForControl(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetShowHideHandler(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetAppRegainedFocusHandler(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LoadNewContext(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetAppLostFocusHandler(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsHotLoad(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetParentByType(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetID(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearUpdateGamepad(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function BuildInstanceForControlAtIndex(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function Reload(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetShutdownGamepad(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function UnifyClickAndTap(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearContextParameters(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetUpdateGamepad(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearPopupParameters(this: any, ): void;
}

/**
 * **Contexts**: UI
 */
declare namespace UserConfiguration
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShowMapLabelsRivers(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsCityRangeAttackTurnBlocking(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function GetShowCivicsTreeKey(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsQuickMovement(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `chatTextSize`: number
     */
    export function GetChatTextValue(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAutoUnitCycle(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShowMapLabelsVolcanoes(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShowMapGrid(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShowMapLabelsOceans(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShowMapLabelsNaturalWonders(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LockValue(userConfig: string, isLocked: boolean): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsEdgePanEnabled(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShowMapResources(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function GetPlayByCloudEndTurnBehavior(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function UnitConfirmationLevel(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetCivicsTreeSearchString(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetLockedValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAutoEndTurn(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShowMapLabelsDeserts(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShowMapLabelsSeas(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetShowTechTreeKey(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function CommitToOptions(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function LayoutOverride(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SaveCheckpoint(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShowMapLabelsMountainRanges(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetPlayByCloudClientReadyBehavior(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetShowCivicsTreeKey(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetRibbonStats(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShowMapLabelsLakes(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetCivicsTreeFilterIndex(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetClockFormat(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetTechTreeSearchString(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetTechTreeSearchString(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetTechTreeFilterIndex(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetTechTreeFilterIndex(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetCivicsTreeFilterIndex(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShowMapYield(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function NoBasicHelp(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsValueLocked(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetShowCivicsTreeGovernment(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetCivicsTreeSearchString(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RestoreCheckpoint(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetValue(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetShowCivicsTreeGovernment(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetPlotTooltipDelay(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsQuickCombat(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAutoProdQueueEnabled(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function TutorialLevel(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetShowTechTreeKey(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShowMapLabelsNationalParks(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ReplaceDragWithClick(): void;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace ReportingEvents
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function Send(event: string, params: AnyTable): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SendLuaEvent(luaEvent: string, params: AnyTable): void;
}

/**
 * **Contexts**: Gameplay
 */
declare namespace AreaBuilder
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function Calculate(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function Recalculate(): void;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace Calendar
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function MakeDateStr(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `yearDateStr`: string
     */
    export function MakeYearStr(turn: number): string;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetTurnYearForGame(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetTurnMonthForGame(): void;
}

/**
 * **Contexts**: UI
 * 
 * System for adjusting the art state of units.
 */
declare namespace SimUnitSystem
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetVisMemberDamage(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `visArtState`: AnyTable
     */
    export function GetVisMemberArtState(Unit: Unit, memberID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetVisMemberHeading(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetVisHexHeading(Unit: Unit, heading: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetVisMemberAnimationState(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ChangeVisMemberArtAttachment(Unit: Unit, unitMemberID: number, artAttachmentID: number, amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetVisFormation(Unit: Unit, heading: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `visState`: AnyTable
     */
    export function GetVisMemberState(Unit: Unit, unitMemberID: number): AnyTable;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `heading`: number
     */
    export function GetVisHeading(Unit: Unit): number;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetAnimationState(Unit: Unit, entranceAnim: string, exitAnim: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ChangeVisMemberArtAttachmentTint(Unit: Unit, unitMemberID: number, artAttachmentID: number, amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `count`: number
     */
    export function GetVisMemberCount(Unit: Unit): number;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetVisMemberPitchRoll(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `heading`: number
     */
    export function GetVisHexHeading(Unit: Unit): number;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ChangeVisMemberArtVariation(Unit: Unit, unitMemberID: number, amount: number): void;
}

/**
 * **Contexts**: UI
 */
declare namespace Search
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function AddData(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearData(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function Search(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function CreateContext(): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function Optimize(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasContext(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function DestroyContext(): void;
}

/**
 * **Contexts**: Gameplay
 */
declare namespace StartPositioner
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function PlaceOceanStartCivs(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetMajorCivStartPlots(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetNumMinorCivStarts(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetTotalOceanStartCandidates(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetOceanStartTile(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetMinorCivStartPlots(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetMinorCivStartInfo(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetMajorCivStartInfo(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function MarkMajorRegionUsed(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetPlotFertility(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetNumMajorCivStarts(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function DivideMapIntoMajorRegions(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     */
    export function DivideMapIntoMinorRegions(): void;
}

/**
 * **Contexts**: Gameplay
 */
declare namespace Fractal
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `Frac`: Frac
     */
    export function Create(): Frac;
    /**
     * **Contexts**: Gameplay
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `Frac`: Frac
     */
    export function CreateRifts(): Frac;
}

/**
 * **Contexts**: UI
 */
declare namespace DirtyComponentsManager
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     * 
     * ---
     * Returns: 
     * - `DirtyComponents`: DirtyComponents
     */
    export function Create(): DirtyComponents;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function Destroy(DirtyComponents: DirtyComponents): void;
}

/**
 * **Contexts**: UI
 */
declare namespace Definitions
{
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `hash`: number
     */
    export function GetTypeHash(definitionType: DefinitionTypes, typeName: string): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `typeName`: string
     */
    export function GetTypeName(definitionType: DefinitionTypes, hash: number): string;
}

/**
 * **Contexts**: Gameplay
 */
declare namespace Areas
{
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `amount`: number
     */
    export function GetLandCount(): number;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function Members(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function FindCount(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function GetArea(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function FindBiggestArea(): void;
    /**
     * **Contexts**: Gameplay
     * 
     * *Query*
     */
    export function MembersAux(): void;
}

/**
 * **Contexts**: UI
 */
declare namespace WorldView
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
    export function HasAssetForFeature(featureIndex: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function PlayEffectAtXY(effect: string, x: number, y: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetVFXImport(effect: string, amount: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasAssetForDistrict(districtIndex: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasAssetForWonder(buildingIndex: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasAssetForResource(resourceIndex: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasAssetForUnit(unitIndex: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasAssetForBuilding(buildingIndex: number): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasAssetFor(): boolean;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace GameSummary
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
    export function GetDataSetCount(): number;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `desc`: string
     */
    export function GetDataSetDisplayDescription(): string;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function HasDataSetValues(): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetDataSetName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetDataSetValues(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function CoalesceDataSet(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetDataSetDisplayName(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetDataSetVisible(): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetDataSetValue(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetDataPoints(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetOrCreateDataSet(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function FindDataSet(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetCityObject(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetDataSets(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetObjects(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetOrCreateDataPoint(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SetDataPoint(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetLastDataSetValue(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function LookupDataSet(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function AdjustDataSetValue(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function UpdateDataPoint(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function LookupDataPoint(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function SetRulesetType(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetPlayerObject(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function CreateObject(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function SetDataSetValue(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function GetRulesetTypes(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Query*
     */
    export function FindDataPoint(): void;
}

/**
 * **Contexts**: Gameplay, UI
 */
declare namespace serialize
{
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function unpersist(): void;
    /**
     * **Contexts**: Gameplay, UI
     * 
     * *Action*
     */
    export function persist(): void;
}

/**
 * **Contexts**: UI
 */
declare namespace UIManager
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function DisablePopupQueue(this: any, unknown: boolean): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetFilePath(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetUICursor(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetControlUnderMouse(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsModal(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function DequeuePopup(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetLastTimeDelta(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function ShowDelayedPopups(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetFontFamilyFromStyle(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetHash(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function PopModal(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetNormalizedMousePos(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     * 
     * ---
     * Prints a message to UserInterface.log, will be truncated if too long.
     */
    export function Log(this: any, message: string): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetRootContexts(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsPopupQueueDisabled(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function PushModal(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetMousePos(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function SetGlobalInputHandler(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetMouseOverControls(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function QueuePopup(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetModalContexts(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetPopupStack(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsGamepadActive(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetMouseOverWorld(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsInPopupQueue(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function SetClipboardString(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearPopupChangeHandler(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetScreenSizeVal(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetPopupChangeHandler(this: any, ): void;
}

/**
 * **Contexts**: UI
 */
declare namespace TouchManager
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
    export function IsInGesture(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetTouchPointCount(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsTouchToolTipDisabled(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGestureDistance(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetToolTipPoint(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function DisableTouchToolTip(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function WasInAnyGesture(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsAnyGestureStarted(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function SetGestureStartDistanceThreshold(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetTouchPointMaxDeltaFromStart(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function WasAnyGestureStarted(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetTouchPointIDByIndex(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function WasInGesture(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetGestureStartDistanceThreshold(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetTouchPointLocation(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsInAnyGesture(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetTouchPointDeltaFromStart(this: any, ): void;
}

/**
 * **Contexts**: UI
 */
declare namespace EffectsManager
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function PauseAllEffects(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function PlayEffectOneTime(this: any, Control: Control, effect: string, options?: AnyTable): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ResumeAllEffects(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function PlayEffect(this: any, Control: Control, effect: string, options?: AnyTable): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function StopEffect(this: any, Control: Control): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function StopAllEffects(this: any, ): void;
}

/**
 * **Contexts**: UI
 */
declare namespace IconManager
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function UpdateIcon(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function FindIconAtlasForType(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function FindIconAtlas(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function UpdateIconFromPlayerID(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function FindIconAtlasNearestSize(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function UpdateIconSimple(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetLeaderTooltip(this: any, ): void;
}

/**
 * **Contexts**: UI
 */
declare namespace UITutorialManager
{
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ShowControlsByID(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function HideControlsByID(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetActiveAlways(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function EnableOverlay(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function GetHash(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function HideAll(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearPersistantInputControls(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function EnableControlsByIdOrTag(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     */
    export function IsOverlayEnabled(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsActive(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function AddControlToAlwaysReceiveInput(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RemoveControlToAlwaysReceiveInput(this: any, ): void;
}

/**
 * **Contexts**: UI
 */
declare namespace TTManager
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
    export function IsGamepadToolTipOn(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - boolean
     */
    export function IsTooltipShowing(this: any, ): boolean;
    /**
     * **Contexts**: UI
     * 
     * *Query*
     * 
     * ---
     * Returns: 
     * - `seconds`: number
     */
    export function GetToolTipDelay(this: any, ): number;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function AddToolTipDisplayCallback(this: any, callbackFunc: Function): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function ClearCurrent(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function GetTypeControlTable(this: any, tooltipName: string, controlTable: AnyTable): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function RemoveToolTipDisplayCallback(this: any, callbackFunc: Function): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetGamepadToolTipOn(this: any, isOn: boolean): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetToolTipDelay(this: any, seconds: number): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetToolTipString(this: any, ): void;
    /**
     * **Contexts**: UI
     * 
     * *Action*
     */
    export function SetToolTipType(this: any, ): void;
}

