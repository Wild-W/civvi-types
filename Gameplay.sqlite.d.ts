/** SQLite type */
declare type TEXT = string;
/** SQLite type */
declare type INTEGER = number;
/** 
 * SQLite type
 * 
 * ---
 * - `0` — `FALSE`
 * - `1` — `TRUE`
 */
declare type BOOLEAN = 0|1;
/** SQLite type */
declare type REAL = number;
/** 
 * SQLite type
 * 
 * ---
 * `LIKE "LOC_%"` */
declare type LocalizedText = string;
/** SQLite type */
declare type float = number;


declare type Gameplay_NavigationProperties = {
	BaseTable: TEXT,
	PropertyName: TEXT,
	TargetTable: TEXT,
	IsCollection: INTEGER,
	Query: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Adjacency_YieldChanges = {
	ID: TEXT,
	Description: TEXT,
	YieldType: TEXT,
	YieldChange: INTEGER,
	TilesRequired: INTEGER,
	OtherDistrictAdjacent: BOOLEAN,
	AdjacentSeaResource: BOOLEAN,
	AdjacentTerrain: TEXT,
	AdjacentFeature: TEXT,
	AdjacentRiver: BOOLEAN,
	AdjacentWonder: BOOLEAN,
	AdjacentNaturalWonder: BOOLEAN,
	AdjacentImprovement: TEXT,
	AdjacentDistrict: TEXT,
	PrereqCivic: TEXT,
	PrereqTech: TEXT,
	ObsoleteCivic: TEXT,
	ObsoleteTech: TEXT,
	AdjacentResource: BOOLEAN,
	AdjacentResourceClass: TEXT,
	Self: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Adjacent_AppealYieldChanges = {
	DistrictType: TEXT,
	YieldType: TEXT,
	MaximumValue: INTEGER,
	BuildingType: TEXT,
	MinimumValue: INTEGER,
	YieldChange: INTEGER,
	Description: TEXT,
	Unimproved: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Agendas = {
	AgendaType: TEXT,
	OperationList: TEXT,
	Name: TEXT,
	Description: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AgendaPreferredLeaders = {
	AgendaType: TEXT,
	LeaderType: TEXT,
	PercentageChance: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AgendaTraits = {
	AgendaType: TEXT,
	TraitType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AiBuildSpecializations = {
	SpecializationType: TEXT,
	BuildingYield: TEXT,
	IncludePopulation: BOOLEAN,
	IncludeDefense: BOOLEAN,
	IncludeMilitaryUnits: BOOLEAN,
	IncludeTradeUnits: BOOLEAN,
	PrioritizationYield: TEXT,
	PriorityOffset: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AiEvents = {
	EventType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AiFavoredItems = {
	ListType: TEXT,
	Item: TEXT,
	Favored: BOOLEAN,
	Value: INTEGER,
	StringVal: TEXT,
	MinDifficulty: TEXT,
	MaxDifficulty: TEXT,
	TooltipString: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AiLists = {
	ListType: TEXT,
	LeaderType: TEXT,
	AgendaType: TEXT,
	System: TEXT,
	MinDifficulty: TEXT,
	MaxDifficulty: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AiListTypes = {
	ListType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AiOperationDefs = {
	OperationName: TEXT,
	TargetType: TEXT,
	TargetParameter: INTEGER,
	EnemyType: TEXT,
	BehaviorTree: TEXT,
	Priority: INTEGER,
	MaxTargetDistInRegion: INTEGER,
	MaxTargetDistInArea: INTEGER,
	MaxTargetDistInWorld: INTEGER,
	MaxTargetStrength: INTEGER,
	MaxTargetDefense: INTEGER,
	MinOddsOfSuccess: REAL,
	SelfStart: BOOLEAN,
	MustBeAtWar: BOOLEAN,
	MustHaveNukes: BOOLEAN,
	MustHaveUnits: INTEGER,
	OperationType: TEXT,
	AllowTargetUpdate: BOOLEAN,
	TargetLuaScript: TEXT,
	ActiveEmergency: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AiOperationLimits = {
	ListType: TEXT,
	OperationType: TEXT,
	BaseValue: INTEGER,
	DeltaValue: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AiOperationLists = {
	ListType: TEXT,
	BaseList: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AiOperationTeams = {
	TeamName: TEXT,
	OperationName: TEXT,
	MinUnits: INTEGER,
	MaxUnits: INTEGER,
	InitialStrengthAdvantage: REAL,
	OngoingStrengthAdvantage: REAL,
	SafeRallyPoint: BOOLEAN,
	Condition: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AiOperationTypes = {
	OperationType: TEXT,
	Value: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AiScoutUses = {
	ScoutUseType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AiTeams = {
	TeamName: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AllowedMoves = {
	AllowedMoveType: TEXT,
	Value: INTEGER,
	IsHomeland: BOOLEAN,
	IsTactical: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AllowedOperations = {
	ListType: TEXT,
	OperationDef: TEXT,
	RemoveRef: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AppealHousingChanges = {
	DistrictType: TEXT,
	MinimumValue: INTEGER,
	AppealChange: INTEGER,
	Description: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BarbarianAttackForces = {
	AttackForceType: TEXT,
	MinTargetDifficulty: TEXT,
	MaxTargetDifficulty: TEXT,
	SpawnRate: INTEGER,
	MeleeTag: TEXT,
	NumMeleeUnits: INTEGER,
	RangeTag: TEXT,
	NumRangeUnits: INTEGER,
	SiegeTag: TEXT,
	NumSiegeUnits: INTEGER,
	SupportTag: TEXT,
	NumSupportUnits: INTEGER,
	RaidingForce: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BarbarianTribes = {
	TribeType: TEXT,
	IsCoastal: BOOLEAN,
	RequiredResource: TEXT,
	ResourceRange: INTEGER,
	PercentRangedUnits: INTEGER,
	TurnsToWarriorSpawn: INTEGER,
	ScoutTag: TEXT,
	MeleeTag: TEXT,
	RangedTag: TEXT,
	SiegeTag: TEXT,
	DefenderTag: TEXT,
	SupportTag: TEXT,
	ScoutingBehaviorTree: TEXT,
	RaidingBehaviorTree: TEXT,
	RaidingBoldness: INTEGER,
	CityAttackOperation: TEXT,
	CityAttackBoldness: INTEGER,
	Name: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BarbarianTribe_ExtraUnits = {
	TribeType: TEXT,
	UnitType: TEXT,
	Number: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BarbarianTribe_MapConditions = {
	MapConditionSetType: TEXT,
	TerrainType: TEXT,
	FeatureType: TEXT,
	ResourceType: TEXT,
	Range: INTEGER,
	Invert: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BarbarianTribe_MapConditionSets = {
	MapConditionSetType: TEXT,
	TribeType: TEXT,
	Test: TEXT,
	Priority: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BarbarianTribe_UnitConditions = {
	TribeType: TEXT,
	UnitType: TEXT,
	ReplacesUnitType: TEXT,
	MaxPerTribe: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BarbarianTribeForces = {
	AttackForceType: TEXT,
	TribeType: TEXT,
	SpecificTribeType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BarbarianTribeNames = {
	TribeNameType: TEXT,
	TribeType: TEXT,
	NumMilitary: INTEGER,
	NumScouts: INTEGER,
	PercentRangedUnits: INTEGER,
	TurnsToWarriorSpawn: INTEGER,
	TribeDisplayName: TEXT,
	ScoutingBehaviorTree: TEXT,
	RaidingBehaviorTree: TEXT,
	RaidingBoldness: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BehaviorTrees = {
	TreeName: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BehaviorTreeNodes = {
	TreeName: TEXT,
	NodeId: INTEGER,
	JumpTo: INTEGER,
	NodeType: TEXT,
	PrimaryKey: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Beliefs = {
	BeliefType: TEXT,
	Name: TEXT,
	Description: TEXT,
	BeliefClassType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BeliefClasses = {
	BeliefClassType: TEXT,
	Name: TEXT,
	MaxInReligion: INTEGER,
	AdoptionOrder: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BeliefModifiers = {
	BeliefType: TEXT,
	ModifierID: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BonusMinorStartingUnits = {
	Unit: TEXT,
	Era: TEXT,
	Quantity: INTEGER,
	OnDistrictCreated: BOOLEAN,
	District: TEXT,
	MinDifficulty: TEXT,
	DifficultyDelta: REAL,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Boosts = {
	BoostID: INTEGER,
	TechnologyType: TEXT,
	CivicType: TEXT,
	Boost: INTEGER,
	TriggerId: INTEGER,
	TriggerDescription: TEXT,
	TriggerLongDescription: TEXT,
	Unit1Type: TEXT,
	BoostClass: TEXT,
	Unit2Type: TEXT,
	BuildingType: TEXT,
	ImprovementType: TEXT,
	BoostingTechType: TEXT,
	ResourceType: TEXT,
	NumItems: INTEGER,
	DistrictType: TEXT,
	RequiresResource: BOOLEAN,
	RequirementSetId: TEXT,
	GovernmentSlotType: TEXT,
	BoostingCivicType: TEXT,
	GovernmentTierType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BoostHandlers = {
	HandlerId: TEXT,
	TechBoostType: TEXT,
	BehaviorTree: TEXT,
	OperationName: TEXT,
	LuaScript: TEXT,
	UniquenessTag: TEXT,
	WinnowFunction: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BoostNames = {
	BoostType: TEXT,
	BoostValue: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Buildings = {
	BuildingType: TEXT,
	Name: TEXT,
	PrereqTech: TEXT,
	PrereqCivic: TEXT,
	Cost: INTEGER,
	MaxPlayerInstances: INTEGER,
	MaxWorldInstances: INTEGER,
	Capital: BOOLEAN,
	PrereqDistrict: TEXT,
	AdjacentDistrict: TEXT,
	Description: TEXT,
	RequiresPlacement: BOOLEAN,
	RequiresRiver: BOOLEAN,
	OuterDefenseHitPoints: INTEGER,
	Housing: INTEGER,
	Entertainment: INTEGER,
	AdjacentResource: TEXT,
	Coast: BOOLEAN,
	EnabledByReligion: BOOLEAN,
	AllowsHolyCity: BOOLEAN,
	PurchaseYield: TEXT,
	MustPurchase: BOOLEAN,
	Maintenance: INTEGER,
	IsWonder: BOOLEAN,
	TraitType: TEXT,
	OuterDefenseStrength: INTEGER,
	CitizenSlots: INTEGER,
	MustBeLake: BOOLEAN,
	MustNotBeLake: BOOLEAN,
	RegionalRange: INTEGER,
	AdjacentToMountain: BOOLEAN,
	ObsoleteEra: TEXT,
	RequiresReligion: BOOLEAN,
	GrantFortification: INTEGER,
	DefenseModifier: INTEGER,
	InternalOnly: BOOLEAN,
	RequiresAdjacentRiver: BOOLEAN,
	Quote: TEXT,
	QuoteAudio: TEXT,
	MustBeAdjacentLand: BOOLEAN,
	AdvisorType: TEXT,
	AdjacentCapital: BOOLEAN,
	AdjacentImprovement: TEXT,
	CityAdjacentTerrain: TEXT,
	UnlocksGovernmentPolicy: BOOLEAN,
	GovernmentTierRequirement: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Building_CitizenYieldChanges = {
	BuildingType: TEXT,
	YieldType: TEXT,
	YieldChange: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Building_GreatPersonPoints = {
	BuildingType: TEXT,
	GreatPersonClassType: TEXT,
	PointsPerTurn: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Building_GreatWorks = {
	BuildingType: TEXT,
	GreatWorkSlotType: TEXT,
	NumSlots: INTEGER,
	ThemingUniquePerson: BOOLEAN,
	ThemingSameObjectType: BOOLEAN,
	ThemingUniqueCivs: BOOLEAN,
	ThemingSameEras: BOOLEAN,
	ThemingYieldMultiplier: INTEGER,
	ThemingTourismMultiplier: INTEGER,
	NonUniquePersonYield: INTEGER,
	NonUniquePersonTourism: INTEGER,
	ThemingBonusDescription: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Building_RequiredFeatures = {
	BuildingType: TEXT,
	FeatureType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Building_ValidFeatures = {
	BuildingType: TEXT,
	FeatureType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Building_ValidTerrains = {
	BuildingType: TEXT,
	TerrainType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Building_YieldChanges = {
	BuildingType: TEXT,
	YieldType: TEXT,
	YieldChange: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Building_YieldDistrictCopies = {
	BuildingType: TEXT,
	OldYieldType: TEXT,
	NewYieldType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Building_YieldsPerEra = {
	BuildingType: TEXT,
	YieldType: TEXT,
	YieldChange: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BuildingConditions = {
	BuildingType: TEXT,
	UnlocksFromEffect: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BuildingModifiers = {
	BuildingType: TEXT,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BuildingPrereqs = {
	Building: TEXT,
	PrereqBuilding: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_BuildingReplaces = {
	CivUniqueBuildingType: TEXT,
	ReplacesBuildingType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Calendars = {
	CalendarType: TEXT,
	Description: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CityEvents = {
	EventType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CityNames = {
	ID: INTEGER,
	CivilizationType: TEXT,
	LeaderType: TEXT,
	ContinentType: TEXT,
	CityName: TEXT,
	SortIndex: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Civics = {
	CivicType: TEXT,
	Name: TEXT,
	Cost: INTEGER,
	Repeatable: BOOLEAN,
	Description: TEXT,
	EraType: TEXT,
	BarbarianFree: BOOLEAN,
	UITreeRow: INTEGER,
	AdvisorType: TEXT,
	EmbarkAll: BOOLEAN,
	EmbarkUnitType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Civics_XP2 = {
	CivicType: TEXT,
	RandomPrereqs: BOOLEAN,
	HiddenUntilPrereqComplete: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivicModifiers = {
	CivicType: TEXT,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivicPrereqs = {
	Civic: TEXT,
	PrereqCivic: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivicQuotes = {
	CivicType: TEXT,
	Quote: TEXT,
	QuoteAudio: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivicRandomCosts = {
	CivicType: TEXT,
	Cost: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Civilizations = {
	CivilizationType: TEXT,
	Name: LocalizedText,
	Description: TEXT,
	Adjective: TEXT,
	RandomCityNameDepth: INTEGER,
	StartingCivilizationLevelType: TEXT,
	Ethnicity: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilizationAudioTags = {
	CivilizationType: TEXT,
	MusicOverride: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilizationCitizenNames = {
	CivilizationType: TEXT,
	CitizenName: TEXT,
	Female: BOOLEAN,
	Modern: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilizationInfo = {
	CivilizationType: TEXT,
	Header: TEXT,
	Caption: TEXT,
	SortIndex: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilizationLeaders = {
	LeaderType: TEXT,
	CivilizationType: TEXT,
	CapitalName: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilizationLevels = {
	CivilizationLevelType: TEXT,
	CanFoundCities: BOOLEAN,
	CanAnnexTilesWithCulture: BOOLEAN,
	CanAnnexTilesWithGold: BOOLEAN,
	CanAnnexTilesWithReceivedInfluence: BOOLEAN,
	CanEarnGreatPeople: BOOLEAN,
	CanGiveInfluence: BOOLEAN,
	CanReceiveInfluence: BOOLEAN,
	StartingTilesForCity: INTEGER,
	CanBuildWonders: BOOLEAN,
	IgnoresUnitStrategicResourceRequirements: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilizationTraits = {
	CivilizationType: TEXT,
	TraitType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilopediaPages = {
	SectionId: TEXT,
	PageId: TEXT,
	PageGroupId: TEXT,
	PageLayoutId: TEXT,
	Name: TEXT,
	Tooltip: TEXT,
	SortIndex: INTEGER,
	TextKeyPrefix: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilopediaPageChapterHeaders = {
	SectionId: TEXT,
	PageId: TEXT,
	ChapterId: TEXT,
	Header: LocalizedText,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilopediaPageChapterParagraphs = {
	SectionId: TEXT,
	PageId: TEXT,
	ChapterId: TEXT,
	Paragraph: LocalizedText,
	SortIndex: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilopediaPageExcludes = {
	SectionId: TEXT,
	PageId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilopediaPageGroups = {
	SectionId: TEXT,
	PageGroupId: TEXT,
	Name: TEXT,
	Tooltip: TEXT,
	VisibleIfEmpty: BOOLEAN,
	SortIndex: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilopediaPageGroupExcludes = {
	SectionId: TEXT,
	PageGroupId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilopediaPageGroupQueries = {
	RowId: INTEGER,
	SectionId: TEXT,
	SQL: TEXT,
	PageGroupIdColumn: TEXT,
	NameColumn: TEXT,
	TooltipColumn: TEXT,
	VisibleIfEmptyColumn: TEXT,
	SortIndexColumn: TEXT,
	SortIndex: INTEGER,
	Index: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilopediaPageLayouts = {
	PageLayoutId: TEXT,
	ScriptTemplate: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilopediaPageLayoutChapters = {
	PageLayoutId: TEXT,
	ChapterId: TEXT,
	SortIndex: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilopediaPageQueries = {
	RowId: INTEGER,
	SectionId: TEXT,
	SQL: TEXT,
	PageIdColumn: TEXT,
	PageGroupIdColumn: TEXT,
	PageLayoutIdColumn: TEXT,
	NameColumn: TEXT,
	TooltipColumn: TEXT,
	TextKeyPrefixColumn: TEXT,
	SortIndexColumn: TEXT,
	SortIndex: INTEGER,
	Index: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilopediaPageSearchTerms = {
	SectionId: TEXT,
	PageId: TEXT,
	Term: LocalizedText,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilopediaPageSearchTermQueries = {
	RowId: INTEGER,
	SQL: TEXT,
	SectionIdColumn: TEXT,
	PageIdColumn: TEXT,
	SearchTermColumn: TEXT,
	Index: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilopediaSections = {
	SectionId: TEXT,
	Name: TEXT,
	Icon: TEXT,
	SortIndex: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilopediaSectionExcludes = {
	SectionId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CivilopediaTranslateCharacters = {
	RowID: INTEGER,
	Character: TEXT,
	TranslateCharacter: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Continents = {
	ContinentType: TEXT,
	Description: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CorporationNames = {
	ID: INTEGER,
	NameType: TEXT,
	TextKey: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DataTypes = {
	TypeName: TEXT,
	DataId: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DealItems = {
	DealItemType: TEXT,
	Name: TEXT,
	Description: TEXT,
	AllowDurationTrade: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Defeats = {
	DefeatType: TEXT,
	Name: TEXT,
	Blurb: TEXT,
	RequirementSetId: TEXT,
	EnabledByDefault: BOOLEAN,
	OneMoreTurn: BOOLEAN,
	Global: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Difficulties = {
	DifficultyType: TEXT,
	Name: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomacyInfo = {
	Type: TEXT,
	BackgroundImage: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomaticActions = {
	DiplomaticActionType: TEXT,
	Name: TEXT,
	Description: TEXT,
	CivilopediaKey: TEXT,
	InitiatorPrereqCivic: TEXT,
	InitiatorPrereqTech: TEXT,
	TargetPrereqCivic: TEXT,
	TargetPrereqTech: TEXT,
	InitiatorObsoleteCivic: TEXT,
	Cost: INTEGER,
	RequiresCapitalPath: BOOLEAN,
	RequiresConvertedCity: BOOLEAN,
	RequiresOccupiedCity: BOOLEAN,
	RequiresOccupiedFriendlyCity: BOOLEAN,
	RequiresWarOnAlliedCityState: BOOLEAN,
	RequiresLeadXEras: INTEGER,
	RequiresArchaeologyIntrusion: BOOLEAN,
	RequiresAdjacentEmpires: BOOLEAN,
	RequiresEspionageIntrusion: BOOLEAN,
	NoCurrentDelegation: BOOLEAN,
	NoCurrentEmbassy: BOOLEAN,
	NoCurrentOpenBorders: BOOLEAN,
	NoCurrentDenunciation: BOOLEAN,
	NoCurrentDOF: BOOLEAN,
	NoCurrentResearchAgreement: BOOLEAN,
	NoCurrentDefensivePact: BOOLEAN,
	Agreement: BOOLEAN,
	WarmongerPercent: INTEGER,
	CaptureWarmongerPercent: INTEGER,
	RazeWarmongerPercent: INTEGER,
	UIGroup: TEXT,
	DenouncementTurnsRequired: INTEGER,
	RequiresAlliance: BOOLEAN,
	RequiresTeamMembership: BOOLEAN,
	Duration: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomaticStartStates = {
	PlayerCivLevel: TEXT,
	OpponentCivLevel: TEXT,
	DiplomaticStateType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomaticStates = {
	StateType: TEXT,
	Name: TEXT,
	DiplomaticYieldBonus: INTEGER,
	RelationshipLevel: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomaticStateActions = {
	StateType: INTEGER,
	DiplomaticActionType: INTEGER,
	AiAllowed: BOOLEAN,
	Worth: INTEGER,
	Cost: INTEGER,
	TransitionToState: TEXT,
	TeamOnly: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomaticStateTransitions = {
	BaseState: TEXT,
	TransitionState: TEXT,
	RequireTransitionMax: INTEGER,
	ThrottleTurns: INTEGER,
	AllowTransitionMin: INTEGER,
	RequireTransitionMin: INTEGER,
	AllowTransitionMax: INTEGER,
	AllowTransitionCheck: TEXT,
	OnTransitionAction: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomaticTriggers = {
	TriggerType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomaticTriggeredTransitions = {
	TriggerType: TEXT,
	CivilizationLevel: TEXT,
	OpponentCivilizationLevel: TEXT,
	TransitionState: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomaticTriggers_RequiredStates = {
	TriggerType: TEXT,
	RequiredState: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomaticVisibilitySources = {
	VisibilitySourceType: TEXT,
	Description: TEXT,
	ActionDescription: TEXT,
	GossipString: TEXT,
	Trader: BOOLEAN,
	Delegate: BOOLEAN,
	Ally: BOOLEAN,
	Spy: BOOLEAN,
	PrereqTech: TEXT,
	TraitType: TEXT,
	GreatPersonIndividualType: TEXT,
	FromCitizen: BOOLEAN,
	LevelRequired: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Districts = {
	DistrictType: TEXT,
	Name: TEXT,
	PrereqTech: TEXT,
	PrereqCivic: TEXT,
	Coast: BOOLEAN,
	Description: TEXT,
	Cost: INTEGER,
	RequiresPlacement: BOOLEAN,
	RequiresPopulation: BOOLEAN,
	NoAdjacentCity: BOOLEAN,
	CityCenter: BOOLEAN,
	Aqueduct: BOOLEAN,
	InternalOnly: BOOLEAN,
	ZOC: BOOLEAN,
	FreeEmbark: BOOLEAN,
	HitPoints: INTEGER,
	CaptureRemovesBuildings: BOOLEAN,
	CaptureRemovesCityDefenses: BOOLEAN,
	PlunderType: TEXT,
	PlunderAmount: INTEGER,
	TradeEmbark: BOOLEAN,
	MilitaryDomain: TEXT,
	CostProgressionModel: TEXT,
	CostProgressionParam1: INTEGER,
	TraitType: TEXT,
	Appeal: INTEGER,
	Housing: INTEGER,
	Entertainment: INTEGER,
	OnePerCity: BOOLEAN,
	AllowsHolyCity: BOOLEAN,
	Maintenance: INTEGER,
	AirSlots: INTEGER,
	CitizenSlots: INTEGER,
	TravelTime: INTEGER,
	CityStrengthModifier: INTEGER,
	AdjacentToLand: BOOLEAN,
	CanAttack: BOOLEAN,
	AdvisorType: TEXT,
	CaptureRemovesDistrict: BOOLEAN,
	MaxPerPlayer: REAL,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_District_Adjacencies = {
	DistrictType: TEXT,
	YieldChangeId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_District_CitizenGreatPersonPoints = {
	DistrictType: TEXT,
	GreatPersonClassType: TEXT,
	PointsPerTurn: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_District_CitizenYieldChanges = {
	DistrictType: TEXT,
	YieldType: TEXT,
	YieldChange: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_District_GreatPersonPoints = {
	DistrictType: TEXT,
	GreatPersonClassType: TEXT,
	PointsPerTurn: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_District_RequiredFeatures = {
	DistrictType: TEXT,
	FeatureType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_District_TradeRouteYields = {
	DistrictType: TEXT,
	YieldType: TEXT,
	YieldChangeAsOrigin: REAL,
	YieldChangeAsDomesticDestination: REAL,
	YieldChangeAsInternationalDestination: REAL,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_District_ValidTerrains = {
	DistrictType: TEXT,
	TerrainType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DistrictModifiers = {
	DistrictType: TEXT,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DistrictReplaces = {
	CivUniqueDistrictType: TEXT,
	ReplacesDistrictType: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DuplicateCivilizations = {
	CivilizationType: TEXT,
	OtherCivilizationType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DuplicateLeaders = {
	LeaderType: TEXT,
	OtherLeaderType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DynamicModifiers = {
	ModifierType: TEXT,
	CollectionType: TEXT,
	EffectType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Eras = {
	EraType: TEXT,
	Name: TEXT,
	Description: TEXT,
	ChronologyIndex: INTEGER,
	WarmongerPoints: INTEGER,
	GreatPersonBaseCost: INTEGER,
	EraTechBackgroundTexture: TEXT,
	EraCivicBackgroundTexture: TEXT,
	WarmongerLevelDescription: TEXT,
	EmbarkedUnitStrength: INTEGER,
	EraTechBackgroundTextureOffsetX: INTEGER,
	EraCivicBackgroundTextureOffsetX: INTEGER,
	TechTreeLayoutMethod: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_EventPopupData = {
	Type: TEXT,
	Title: TEXT,
	Description: TEXT,
	BackgroundImage: TEXT,
	ForegroundImage: TEXT,
	Effects: TEXT,
	ImageText: TEXT,
	FilterCondition: TEXT,
	EffectType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ExcludedAdjacencies = {
	TraitType: TEXT,
	YieldChangeId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ExcludedDistricts = {
	DistrictType: TEXT,
	TraitType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ExcludedGreatPersonClasses = {
	GreatPersonClassType: TEXT,
	TraitType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ExclusiveAgendas = {
	AgendaOne: TEXT,
	AgendaTwo: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_FavoredReligions = {
	LeaderType: TEXT,
	CivilizationType: TEXT,
	ReligionType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Features = {
	FeatureType: TEXT,
	Name: TEXT,
	Description: TEXT,
	Quote: TEXT,
	Coast: BOOLEAN,
	NoCoast: BOOLEAN,
	NoRiver: BOOLEAN,
	NoAdjacentFeatures: BOOLEAN,
	RequiresRiver: BOOLEAN,
	MovementChange: INTEGER,
	SightThroughModifier: INTEGER,
	Impassable: BOOLEAN,
	NaturalWonder: BOOLEAN,
	RemoveTech: TEXT,
	Removable: BOOLEAN,
	AddCivic: TEXT,
	DefenseModifier: INTEGER,
	AddsFreshWater: BOOLEAN,
	Appeal: INTEGER,
	MinDistanceLand: INTEGER,
	MaxDistanceLand: INTEGER,
	NotNearFeature: BOOLEAN,
	Lake: BOOLEAN,
	Tiles: INTEGER,
	Adjacent: BOOLEAN,
	NoResource: BOOLEAN,
	DoubleAdjacentTerrainYield: BOOLEAN,
	NotCliff: BOOLEAN,
	MinDistanceNW: INTEGER,
	CustomPlacement: TEXT,
	Forest: BOOLEAN,
	AntiquityPriority: INTEGER,
	QuoteAudio: TEXT,
	Settlement: BOOLEAN,
	FollowRulesInWB: BOOLEAN,
	DangerValue: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Feature_AdjacentFeatures = {
	FeatureType: TEXT,
	FeatureTypeAdjacent: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Feature_AdjacentTerrains = {
	FeatureType: TEXT,
	TerrainType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Feature_AdjacentYields = {
	FeatureType: TEXT,
	YieldType: TEXT,
	YieldChange: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Feature_NotAdjacentTerrains = {
	FeatureType: TEXT,
	TerrainType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Feature_NotNearFeatures = {
	FeatureType: TEXT,
	FeatureTypeAvoid: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Feature_Removes = {
	FeatureType: TEXT,
	YieldType: TEXT,
	Yield: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Feature_UnitMovements = {
	FeatureType: TEXT,
	AllowPassthrough: BOOLEAN,
	AllowDestination: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Feature_ValidTerrains = {
	FeatureType: TEXT,
	TerrainType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Feature_YieldChanges = {
	FeatureType: TEXT,
	YieldType: TEXT,
	YieldChange: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Flavors = {
	FlavorType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GameCapabilities = {
	GameCapability: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GameCapabilityDependencies = {
	ID: INTEGER,
	GameCapability: INTEGER,
	DependsOnCapability: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GameEffects = {
	Type: TEXT,
	CommonName: TEXT,
	Description: TEXT,
	Tags: TEXT,
	GameCapabilities: TEXT,
	ContextInterfaces: TEXT,
	SubjectInterfaces: TEXT,
	SupportsRemove: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GameEffectArguments = {
	Type: TEXT,
	Name: TEXT,
	CommonName: TEXT,
	Description: TEXT,
	ArgumentType: TEXT,
	DefaultValue: TEXT,
	Required: BOOLEAN,
	MinValue: TEXT,
	MaxValue: TEXT,
	DatabaseKind: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GameModifiers = {
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GameSpeeds = {
	GameSpeedType: TEXT,
	Name: TEXT,
	Description: TEXT,
	CostMultiplier: INTEGER,
	CivicUnlockMaxCost: INTEGER,
	CivicUnlockPerTurnDrop: INTEGER,
	CivicUnlockMinCost: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GameSpeed_Durations = {
	GameSpeedScalingType: TEXT,
	NumberOfTurnsOnStandard: INTEGER,
	NumberOfTurnsScaled: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GameSpeed_Scalings = {
	GameSpeedScalingType: TEXT,
	GameSpeedType: TEXT,
	ScalingType: TEXT,
	DefaultCostMultiplier: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GameSpeed_Turns = {
	GameSpeedType: TEXT,
	MonthIncrement: INTEGER,
	TurnsPerIncrement: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GlobalParameters = {
	Name: TEXT,
	Value: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GoodyHuts = {
	GoodyHutType: TEXT,
	ImprovementType: TEXT,
	Weight: INTEGER,
	ShowMoment: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GoodyHutSubTypes = {
	GoodyHut: TEXT,
	SubTypeGoodyHut: TEXT,
	Description: TEXT,
	Weight: INTEGER,
	ModifierID: TEXT,
	UpgradeUnit: BOOLEAN,
	Turn: INTEGER,
	Experience: BOOLEAN,
	Heal: INTEGER,
	Relic: BOOLEAN,
	Trader: BOOLEAN,
	MinOneCity: BOOLEAN,
	RequiresUnit: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Gossips = {
	GossipType: TEXT,
	VisibilityLevel: INTEGER,
	Description: TEXT,
	Message: TEXT,
	Filter: BOOLEAN,
	ErasUntilObsolete: INTEGER,
	LevelRequired: INTEGER,
	GroupType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Governments = {
	GovernmentType: TEXT,
	Name: TEXT,
	PrereqCivic: TEXT,
	InherentBonusDesc: TEXT,
	AccumulatedBonusShortDesc: TEXT,
	AccumulatedBonusDesc: TEXT,
	OtherGovernmentIntolerance: INTEGER,
	InfluencePointsPerTurn: INTEGER,
	InfluencePointsThreshold: INTEGER,
	InfluenceTokensPerThreshold: INTEGER,
	BonusType: TEXT,
	PolicyToUnlock: TEXT,
	Tier: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Government_SlotCounts = {
	GovernmentType: TEXT,
	GovernmentSlotType: TEXT,
	NumSlots: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GovernmentBonusNames = {
	GovernmentBonusType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GovernmentModifiers = {
	GovernmentType: TEXT,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GovernmentSlots = {
	GovernmentSlotType: TEXT,
	Name: TEXT,
	AllowsAnyPolicy: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GovernmentTiers = {
	TierType: TEXT,
	Sorting: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GreatPersonClasses = {
	GreatPersonClassType: TEXT,
	Name: TEXT,
	UnitType: TEXT,
	DistrictType: TEXT,
	MaxPlayerInstances: INTEGER,
	PseudoYieldType: TEXT,
	IconString: TEXT,
	ActionIcon: TEXT,
	AvailableInTimeline: BOOLEAN,
	GenerateDuplicateIndividuals: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GreatPersonIndividuals = {
	GreatPersonIndividualType: TEXT,
	Name: TEXT,
	GreatPersonClassType: TEXT,
	EraType: TEXT,
	ActionCharges: INTEGER,
	ActionRequiresOwnedTile: BOOLEAN,
	ActionRequiresUnownedTile: BOOLEAN,
	ActionRequiresAdjacentMountain: BOOLEAN,
	ActionRequiresAdjacentOwnedTile: BOOLEAN,
	ActionRequiresAdjacentBarbarianUnit: BOOLEAN,
	ActionRequiresOnOrAdjacentNaturalWonder: BOOLEAN,
	ActionRequiresOnOrAdjacentFeatureType: TEXT,
	ActionRequiresIncompleteWonder: BOOLEAN,
	ActionRequiresIncompleteSpaceRaceProject: BOOLEAN,
	ActionRequiresVisibleLuxury: BOOLEAN,
	ActionRequiresNoMilitaryUnit: BOOLEAN,
	ActionRequiresPlayerRelicSlot: BOOLEAN,
	ActionRequiresMilitaryUnitDomain: TEXT,
	ActionRequiresUnitMilitaryFormation: TEXT,
	ActionRequiresNearbyUnitWithTagA: TEXT,
	ActionRequiresNearbyUnitWithTagB: TEXT,
	ActionRequiresLandMilitaryUnitWithinXTiles: INTEGER,
	ActionRequiresEnemyMilitaryUnitWithinXTiles: INTEGER,
	ActionRequiresCityGreatWorkObjectType: TEXT,
	ActionRequiresCompletedDistrictType: TEXT,
	ActionRequiresMissingBuildingType: TEXT,
	ActionRequiresGoldCost: INTEGER,
	ActionNameTextOverride: TEXT,
	ActionEffectTextOverride: TEXT,
	ActionEffectTileHighlighting: BOOLEAN,
	BirthNameTextOverride: TEXT,
	BirthEffectTextOverride: TEXT,
	AreaHighlightRadius: INTEGER,
	Gender: TEXT,
	ActionRequiresEnemyTerritory: BOOLEAN,
	ActionRequiresCityStateTerritory: BOOLEAN,
	ActionRequiresNonHostileTerritory: BOOLEAN,
	ActionRequiresSuzerainTerritory: BOOLEAN,
	ActionRequiresUnitCanGainExperience: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GreatPersonIndividualActionModifiers = {
	GreatPersonIndividualType: TEXT,
	ModifierId: TEXT,
	AttachmentTargetType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GreatPersonIndividualBirthModifiers = {
	GreatPersonIndividualType: TEXT,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GreatPersonIndividualIconModifiers = {
	GreatPersonIndividualType: TEXT,
	OverrideUnitIcon: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GreatWorks = {
	GreatWorkType: TEXT,
	GreatWorkObjectType: TEXT,
	GreatPersonIndividualType: TEXT,
	Name: TEXT,
	Audio: TEXT,
	Image: TEXT,
	Quote: TEXT,
	Tourism: INTEGER,
	EraType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GreatWorks_ImprovementType = {
	GreatWorkType: TEXT,
	ImprovementType: TEXT,
	ResourceType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GreatWork_ValidSubTypes = {
	GreatWorkSlotType: TEXT,
	GreatWorkObjectType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GreatWork_YieldChanges = {
	GreatWorkType: TEXT,
	YieldType: TEXT,
	YieldChange: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GreatWorkModifiers = {
	GreatWorkType: TEXT,
	ModifierID: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GreatWorkObjectTypes = {
	GreatWorkObjectType: TEXT,
	Value: INTEGER,
	PseudoYieldType: TEXT,
	Name: TEXT,
	IconString: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GreatWorkSlotTypes = {
	GreatWorkSlotType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Happinesses = {
	HappinessType: TEXT,
	Name: TEXT,
	MinimumAmenityScore: INTEGER,
	MaximumAmenityScore: INTEGER,
	GrowthModifier: REAL,
	NonFoodYieldModifier: REAL,
	RebellionPoints: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_HeroClasses = {
	HeroClassType: TEXT,
	Name: LocalizedText,
	Description: LocalizedText,
	UnitType: TEXT,
	CreationProjectType: TEXT,
	ArtifactGreatWorkType: TEXT,
	EpicGreatWorkType: TEXT,
	DiscoveryMinEraType: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_HeroClassProgressions = {
	HeroClassType: TEXT,
	EraType: TEXT,
	CombatStrength: INTEGER,
	RangedCombatStrength: INTEGER,
	AbilityCharges: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_HeroClassUnitCommands = {
	HeroClassType: TEXT,
	UnitCommandType: TEXT,
	Passive: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_HistoricalAgendas = {
	LeaderType: TEXT,
	AgendaType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_HistoricRankings = {
	HistoricLeader: TEXT,
	Quote: TEXT,
	Score: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Improvements = {
	ImprovementType: TEXT,
	Name: TEXT,
	BarbarianCamp: BOOLEAN,
	PrereqTech: TEXT,
	PrereqCivic: TEXT,
	Buildable: BOOLEAN,
	Description: TEXT,
	RemoveOnEntry: BOOLEAN,
	DispersalGold: INTEGER,
	PlunderType: TEXT,
	PlunderAmount: INTEGER,
	Goody: BOOLEAN,
	TilesPerGoody: INTEGER,
	GoodyRange: INTEGER,
	Icon: TEXT,
	TraitType: TEXT,
	Housing: INTEGER,
	TilesRequired: INTEGER,
	SameAdjacentValid: BOOLEAN,
	RequiresRiver: INTEGER,
	EnforceTerrain: BOOLEAN,
	BuildInLine: BOOLEAN,
	CanBuildOutsideTerritory: BOOLEAN,
	BuildOnFrontier: BOOLEAN,
	AirSlots: INTEGER,
	DefenseModifier: INTEGER,
	GrantFortification: INTEGER,
	MinimumAppeal: INTEGER,
	Coast: BOOLEAN,
	YieldFromAppeal: TEXT,
	WeaponSlots: INTEGER,
	ReligiousUnitHealRate: INTEGER,
	Appeal: INTEGER,
	OnePerCity: BOOLEAN,
	YieldFromAppealPercent: INTEGER,
	ValidAdjacentTerrainAmount: INTEGER,
	Domain: TEXT,
	AdjacentSeaResource: BOOLEAN,
	RequiresAdjacentBonusOrLuxury: BOOLEAN,
	MovementChange: INTEGER,
	Workable: BOOLEAN,
	ImprovementOnRemove: TEXT,
	GoodyNotify: BOOLEAN,
	NoAdjacentSpecialtyDistrict: BOOLEAN,
	RequiresAdjacentLuxury: BOOLEAN,
	AdjacentToLand: BOOLEAN,
	Removable: BOOLEAN,
	OnlyOpenBorders: BOOLEAN,
	Capturable: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Improvement_Adjacencies = {
	ImprovementType: TEXT,
	YieldChangeId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Improvement_BonusYieldChanges = {
	Id: INTEGER,
	ImprovementType: TEXT,
	YieldType: TEXT,
	BonusYieldChange: INTEGER,
	PrereqTech: TEXT,
	PrereqCivic: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Improvement_InvalidAdjacentFeatures = {
	ImprovementType: TEXT,
	FeatureType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Improvements_MODE = {
	ImprovementType: TEXT,
	Industry: BOOLEAN,
	Corporation: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Improvement_Tourism = {
	ImprovementType: TEXT,
	TourismSource: TEXT,
	PrereqCivic: TEXT,
	PrereqTech: TEXT,
	ScalingFactor: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Improvement_ValidAdjacentResources = {
	ImprovementType: TEXT,
	ResourceType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Improvement_ValidAdjacentTerrains = {
	ImprovementType: TEXT,
	TerrainType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Improvement_ValidBuildUnits = {
	ImprovementType: TEXT,
	UnitType: TEXT,
	ConsumesCharge: BOOLEAN,
	ValidRepairOnly: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Improvement_ValidFeatures = {
	ImprovementType: TEXT,
	FeatureType: TEXT,
	PrereqTech: TEXT,
	PrereqCivic: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Improvement_ValidResources = {
	ImprovementType: TEXT,
	ResourceType: TEXT,
	MustRemoveFeature: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Improvement_ValidTerrains = {
	ImprovementType: TEXT,
	TerrainType: TEXT,
	PrereqTech: TEXT,
	PrereqCivic: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Improvement_YieldChanges = {
	ImprovementType: TEXT,
	YieldType: TEXT,
	YieldChange: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Improvement_YieldsOutsideTerritories = {
	ImprovementType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ImprovementModifiers = {
	ImprovementType: TEXT,
	ModifierID: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_InterfaceModes = {
	ModeType: TEXT,
	Description: TEXT,
	Help: TEXT,
	DisabledHelp: TEXT,
	Icon: TEXT,
	VisibleInUI: BOOLEAN,
	CursorType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Kinds = {
	Kind: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Leaders = {
	LeaderType: TEXT,
	Name: TEXT,
	OperationList: TEXT,
	IsBarbarianLeader: BOOLEAN,
	InheritFrom: TEXT,
	SceneLayers: INTEGER,
	Sex: TEXT,
	SameSexPercentage: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_LeaderInfo = {
	LeaderType: TEXT,
	Header: TEXT,
	Caption: TEXT,
	SortIndex: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_LeaderQuotes = {
	LeaderType: TEXT,
	Quote: TEXT,
	QuoteAudio: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_LeaderTraits = {
	LeaderType: TEXT,
	TraitType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_LoadingInfo = {
	LeaderType: TEXT,
	ForegroundImage: TEXT,
	BackgroundImage: TEXT,
	EraText: TEXT,
	LeaderText: TEXT,
	PlayDawnOfManAudio: BOOLEAN,
	DawnOfManLeaderId: TEXT,
	DawnOfManEraId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_MajorStartingUnits = {
	Unit: TEXT,
	Era: TEXT,
	District: TEXT,
	Quantity: INTEGER,
	NotStartTile: BOOLEAN,
	OnDistrictCreated: BOOLEAN,
	AiOnly: BOOLEAN,
	MinDifficulty: TEXT,
	DifficultyDelta: REAL,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Maps = {
	MapSizeType: TEXT,
	Name: TEXT,
	Description: TEXT,
	DefaultPlayers: INTEGER,
	FogTilesPerBarbarianCamp: INTEGER,
	NumNaturalWonders: INTEGER,
	UnitNameModifier: INTEGER,
	TargetNumCities: INTEGER,
	GridWidth: INTEGER,
	GridHeight: INTEGER,
	TerrainGrainChange: INTEGER,
	FeatureGrainChange: INTEGER,
	ResearchPercent: INTEGER,
	NumCitiesUnhealthPercent: INTEGER,
	NumCitiesPolicyCostMod: INTEGER,
	NumCitiesTechCostMod: INTEGER,
	EstimatedNumCities: INTEGER,
	PlateValue: INTEGER,
	Continents: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Map_GreatPersonClasses = {
	MapSizeType: TEXT,
	GreatPersonClassType: TEXT,
	MaxWorldInstances: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_MapRainfalls = {
	MapRainfallType: TEXT,
	Name: TEXT,
	Description: TEXT,
	AverageAmountPerYear: INTEGER,
	Scale: REAL,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_MapResourceDistributions = {
	MapResourceDistributionType: TEXT,
	Name: TEXT,
	Description: TEXT,
	Scale: REAL,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_MapSeaLevels = {
	MapSeaLevelType: TEXT,
	Name: TEXT,
	Description: TEXT,
	Scale: REAL,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_MapStartPositions = {
	Map: TEXT,
	Plot: INTEGER,
	Type: TEXT,
	Value: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_MapTemperatures = {
	MapTemperatureType: TEXT,
	Name: TEXT,
	Description: TEXT,
	AverageStartingTemperature: REAL,
	Scale: REAL,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_MapWorldAges = {
	MapWorldAgeType: TEXT,
	Name: TEXT,
	Description: TEXT,
	YearsOld: REAL,
	Scale: REAL,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Modifiers = {
	ModifierId: TEXT,
	ModifierType: TEXT,
	RunOnce: BOOLEAN,
	NewOnly: BOOLEAN,
	Permanent: BOOLEAN,
	Repeatable: BOOLEAN,
	OwnerRequirementSetId: TEXT,
	SubjectRequirementSetId: TEXT,
	OwnerStackLimit: INTEGER,
	SubjectStackLimit: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ModifierArguments = {
	ModifierId: TEXT,
	Name: TEXT,
	Type: TEXT,
	Value: TEXT,
	Extra: TEXT,
	SecondExtra: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ModifierStrings = {
	ModifierId: TEXT,
	Context: TEXT,
	Text: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Months = {
	MonthType: TEXT,
	Description: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_MutuallyExclusiveBuildings = {
	Building: TEXT,
	MutuallyExclusiveBuilding: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_MutuallyExclusiveDistricts = {
	District: TEXT,
	MutuallyExclusiveDistrict: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NodeDataDefinitions = {
	DataName: TEXT,
	DefnId: INTEGER,
	DataType: TEXT,
	NodeType: TEXT,
	Required: BOOLEAN,
	RequiredGroup: BOOLEAN,
	Output: BOOLEAN,
	Modified: BOOLEAN,
	UserData: BOOLEAN,
	Automatic: BOOLEAN,
	Tagged: BOOLEAN,
	EnumList: TEXT,
	UniqueId: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NodeDefinitions = {
	NodeType: TEXT,
	NodeId: INTEGER,
	ShapeId: INTEGER,
	Description: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Notifications = {
	NotificationType: TEXT,
	Message: TEXT,
	Summary: TEXT,
	SeverityType: TEXT,
	ExpiresEndOfTurn: BOOLEAN,
	ExpiresEndOfNextTurn: BOOLEAN,
	SubType: TEXT,
	AutoNotify: BOOLEAN,
	GroupType: TEXT,
	Icon: TEXT,
	AutoActivate: BOOLEAN,
	VisibleInUI: BOOLEAN,
	ShowIconSinglePlayer: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ObsoletePolicies = {
	PolicyType: TEXT,
	ObsoletePolicy: TEXT,
	RequiresAvailableGreatPersonClass: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_OpTeamRequirements = {
	TeamName: TEXT,
	AiType: TEXT,
	MinNumber: INTEGER,
	MaxNumber: INTEGER,
	MinPercentage: REAL,
	MaxPercentage: REAL,
	ReconsiderWhilePreparing: BOOLEAN,
	AiTypeDependence: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_PlotEvalConditions = {
	ConditionType: TEXT,
	Value: INTEGER,
	PoorValue: INTEGER,
	PoorTooltipString: TEXT,
	GoodValue: INTEGER,
	GoodTooltipString: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Policies = {
	PolicyType: TEXT,
	Description: TEXT,
	PrereqCivic: TEXT,
	PrereqTech: TEXT,
	Name: TEXT,
	GovernmentSlotType: TEXT,
	RequiresGovernmentUnlock: BOOLEAN,
	ExplicitUnlock: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_PolicyModifiers = {
	PolicyType: TEXT,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Projects = {
	ProjectType: TEXT,
	Name: TEXT,
	ShortName: TEXT,
	Description: TEXT,
	PopupText: TEXT,
	Cost: INTEGER,
	CostProgressionModel: TEXT,
	CostProgressionParam1: INTEGER,
	PrereqTech: TEXT,
	PrereqCivic: TEXT,
	PrereqDistrict: TEXT,
	RequiredBuilding: TEXT,
	VisualBuildingType: TEXT,
	SpaceRace: BOOLEAN,
	OuterDefenseRepair: BOOLEAN,
	MaxPlayerInstances: INTEGER,
	AmenitiesWhileActive: INTEGER,
	PrereqResource: TEXT,
	AdvisorType: TEXT,
	WMD: BOOLEAN,
	UnlocksFromEffect: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Project_GreatPersonPoints = {
	ProjectType: TEXT,
	GreatPersonClassType: TEXT,
	Points: INTEGER,
	PointProgressionModel: TEXT,
	PointProgressionParam1: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Projects_MODE = {
	ProjectType: TEXT,
	PrereqImprovement: TEXT,
	ResourceType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Project_YieldConversions = {
	ProjectType: TEXT,
	YieldType: TEXT,
	PercentOfProductionRate: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ProjectCompletionModifiers = {
	ProjectType: TEXT,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ProjectPrereqs = {
	ProjectType: TEXT,
	PrereqProjectType: TEXT,
	MinimumPlayerInstances: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_PseudoYields = {
	PseudoYieldType: TEXT,
	DefaultValue: REAL,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Quests = {
	QuestType: TEXT,
	Name: TEXT,
	InstanceName: TEXT,
	Description: TEXT,
	InstanceDescription: TEXT,
	Reward: TEXT,
	InstanceReward: TEXT,
	IconString: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomAgendas = {
	AgendaType: TEXT,
	GameLimit: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Religions = {
	ReligionType: TEXT,
	Name: TEXT,
	IconString: TEXT,
	Pantheon: BOOLEAN,
	RequiresCustomName: BOOLEAN,
	Color: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Requirements = {
	RequirementId: TEXT,
	RequirementType: TEXT,
	Likeliness: INTEGER,
	Impact: INTEGER,
	Inverse: BOOLEAN,
	Reverse: BOOLEAN,
	Persistent: BOOLEAN,
	ProgressWeight: INTEGER,
	Triggered: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RequirementArguments = {
	RequirementId: TEXT,
	Name: TEXT,
	Type: TEXT,
	Value: TEXT,
	Extra: TEXT,
	SecondExtra: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RequirementSetRequirements = {
	RequirementSetId: TEXT,
	RequirementId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RequirementSets = {
	RequirementSetId: TEXT,
	RequirementSetType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RequirementStrings = {
	RequirementId: TEXT,
	Context: TEXT,
	Text: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Resources = {
	ResourceType: TEXT,
	Name: TEXT,
	ResourceClassType: TEXT,
	Happiness: INTEGER,
	NoRiver: BOOLEAN,
	RequiresRiver: BOOLEAN,
	Frequency: INTEGER,
	Clumped: BOOLEAN,
	PrereqTech: TEXT,
	PrereqCivic: TEXT,
	PeakEra: TEXT,
	RevealedEra: INTEGER,
	LakeEligible: BOOLEAN,
	AdjacentToLand: BOOLEAN,
	SeaFrequency: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Resource_Conditions = {
	ResourceType: TEXT,
	UnlocksFromEffect: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Resource_Distribution = {
	Continents: INTEGER,
	Scarce: INTEGER,
	Average: INTEGER,
	Plentiful: INTEGER,
	PercentAdjusted: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Resource_Harvests = {
	ResourceType: TEXT,
	YieldType: TEXT,
	Amount: INTEGER,
	PrereqTech: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Resource_SeaLuxuries = {
	MapArgument: INTEGER,
	Duel: INTEGER,
	Tiny: INTEGER,
	Small: INTEGER,
	Standard: INTEGER,
	Large: INTEGER,
	Huge: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Resource_SeaStrategics = {
	MapArgument: INTEGER,
	Duel: INTEGER,
	Tiny: INTEGER,
	Small: INTEGER,
	Standard: INTEGER,
	Large: INTEGER,
	Huge: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Resource_TradeRouteYields = {
	ResourceType: TEXT,
	YieldType: TEXT,
	YieldChange: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Resource_ValidFeatures = {
	ResourceType: TEXT,
	FeatureType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Resource_ValidTerrains = {
	ResourceType: TEXT,
	TerrainType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Resource_YieldChanges = {
	ResourceType: TEXT,
	YieldType: TEXT,
	YieldChange: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ResourceCorporations = {
	ResourceType: TEXT,
	ResourceEffect: TEXT,
	ResourceEffectTExt: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ResourceIndustries = {
	ResourceType: TEXT,
	ResourceEffect: TEXT,
	ResourceEffectTExt: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Routes = {
	RouteType: TEXT,
	Name: TEXT,
	Description: TEXT,
	MovementCost: REAL,
	SupportsBridges: BOOLEAN,
	PlacementValue: INTEGER,
	PlacementRequiresRoutePresent: BOOLEAN,
	PlacementRequiresOwnedTile: BOOLEAN,
	PrereqEra: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Route_ValidBuildUnits = {
	RouteType: TEXT,
	UnitType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_SavingTypes = {
	SavingType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ScenarioSpecificCommand = {
	TraitName: TEXT,
	CommandName: TEXT,
	TargetHeuristic: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ScoringCategories = {
	CategoryType: TEXT,
	Name: TEXT,
	Multiplier: REAL,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ScoringLineItems = {
	LineItemType: TEXT,
	Name: TEXT,
	Category: TEXT,
	Multiplier: REAL,
	ScaleByCost: BOOLEAN,
	Civics: BOOLEAN,
	Cities: BOOLEAN,
	Districts: BOOLEAN,
	Population: BOOLEAN,
	GreatPeople: BOOLEAN,
	Techs: BOOLEAN,
	Wonders: BOOLEAN,
	Religion: BOOLEAN,
	Pillage: BOOLEAN,
	Trade: BOOLEAN,
	GoldPerTurn: BOOLEAN,
	TieBreakerPriority: INTEGER,
	ScoringScenario1: BOOLEAN,
	ScoringScenario2: BOOLEAN,
	ScoringScenario3: BOOLEAN,
	EraScore: BOOLEAN,
	Converted: BOOLEAN,
	Buildings: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Seasons = {
	SeasonType: TEXT,
	Description: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_SettlementPreferences = {
	PreferenceType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ShapeDefinitions = {
	ShapeName: TEXT,
	ShapeId: INTEGER,
	MinChildren: INTEGER,
	MaxChildren: INTEGER,
	Description: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_StartBiasFeatures = {
	CivilizationType: TEXT,
	FeatureType: TEXT,
	Tier: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_StartBiasResources = {
	CivilizationType: TEXT,
	ResourceType: TEXT,
	Tier: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_StartBiasRivers = {
	CivilizationType: TEXT,
	Tier: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_StartBiasTerrains = {
	CivilizationType: TEXT,
	TerrainType: TEXT,
	Tier: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_StartEras = {
	EraType: TEXT,
	Gold: INTEGER,
	Faith: INTEGER,
	FirstTurnCivicChange: BOOLEAN,
	StartingPopulationCapital: INTEGER,
	StartingPopulationOtherCities: INTEGER,
	GrowthRate: INTEGER,
	ProductionRate: INTEGER,
	DistrictProductionRate: INTEGER,
	StartingMeleeStrengthMajor: INTEGER,
	StartingMeleeStrengthMinor: INTEGER,
	ObsoleteReligion: BOOLEAN,
	Tiles: INTEGER,
	Year: INTEGER,
	IgnoreGoodyHutTurn: BOOLEAN,
	StartingRangedStrengthMajor: INTEGER,
	StartingRangedStrengthMinor: INTEGER,
	StartingAmenitiesCapital: INTEGER,
	StartingHousingCapital: INTEGER,
	StartingAmenitiesOtherCities: INTEGER,
	StartingHousingOtherCities: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_StartingBoostedCivics = {
	Civic: TEXT,
	Era: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_StartingBoostedTechnologies = {
	Technology: TEXT,
	Era: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_StartingBuildings = {
	Building: TEXT,
	Era: TEXT,
	District: TEXT,
	MinorOnly: BOOLEAN,
	MinDifficulty: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_StartingCivics = {
	Civic: TEXT,
	Era: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_StartingGovernments = {
	Government: TEXT,
	Era: TEXT,
	Change: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Strategies = {
	StrategyType: TEXT,
	VictoryType: TEXT,
	NumConditionsNeeded: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Strategy_Priorities = {
	StrategyType: TEXT,
	ListType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Strategy_YieldPriorities = {
	StrategyType: TEXT,
	YieldType: TEXT,
	PseudoYieldType: TEXT,
	PercentageDelta: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_StrategyConditions = {
	StrategyType: TEXT,
	ConditionFunction: TEXT,
	StringValue: TEXT,
	ThresholdValue: INTEGER,
	Forbidden: BOOLEAN,
	Disqualifier: BOOLEAN,
	Exclusive: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Tags = {
	Tag: TEXT,
	Vocabulary: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_TargetTypes = {
	TargetType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Technologies = {
	TechnologyType: TEXT,
	Name: TEXT,
	Cost: INTEGER,
	Repeatable: BOOLEAN,
	EmbarkUnitType: TEXT,
	EmbarkAll: BOOLEAN,
	Description: TEXT,
	EraType: TEXT,
	Critical: BOOLEAN,
	BarbarianFree: BOOLEAN,
	UITreeRow: INTEGER,
	AdvisorType: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Technologies_XP2 = {
	TechnologyType: TEXT,
	RandomPrereqs: BOOLEAN,
	HiddenUntilPrereqComplete: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_TechnologyModifiers = {
	TechnologyType: TEXT,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_TechnologyPrereqs = {
	Technology: TEXT,
	PrereqTech: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_TechnologyQuotes = {
	TechnologyType: TEXT,
	Quote: TEXT,
	QuoteAudio: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_TechnologyRandomCosts = {
	TechnologyType: TEXT,
	Cost: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Terrains = {
	TerrainType: TEXT,
	Name: TEXT,
	Mountain: BOOLEAN,
	Hills: BOOLEAN,
	Water: BOOLEAN,
	InfluenceCost: INTEGER,
	MovementCost: INTEGER,
	ShallowWater: BOOLEAN,
	SightModifier: INTEGER,
	SightThroughModifier: INTEGER,
	Impassable: BOOLEAN,
	DefenseModifier: INTEGER,
	Appeal: INTEGER,
	AntiquityPriority: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Terrain_YieldChanges = {
	TerrainType: TEXT,
	YieldType: TEXT,
	YieldChange: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_TerrainClasses = {
	TerrainClassType: TEXT,
	Name: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_TerrainClass_Terrains = {
	TerrainClassType: TEXT,
	TerrainType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Traits = {
	TraitType: TEXT,
	Name: LocalizedText,
	Description: LocalizedText,
	InternalOnly: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_TraitModifiers = {
	TraitType: TEXT,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_TreeData = {
	DefnId: INTEGER,
	NodeId: INTEGER,
	TreeName: TEXT,
	Tag: TEXT,
	DefaultData: TEXT,
	ParentTag: TEXT,
	UniqueId: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_TriggeredBehaviorTrees = {
	TriggerType: TEXT,
	TreeName: TEXT,
	OperationName: TEXT,
	AIEvent: TEXT,
	Priority: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_TurnPhases = {
	ID: INTEGER,
	TurnPhaseType: TEXT,
	PhaseOrder: INTEGER,
	TurnMode: TEXT,
	ActiveSegmentType: TEXT,
	InactiveSegmentType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_TurnSegments = {
	TurnSegmentType: TEXT,
	Name: TEXT,
	Sound: TEXT,
	AllowStrategicCommands: BOOLEAN,
	AllowTacticalCommands: BOOLEAN,
	TimeLimit_Base: INTEGER,
	TimeLimit_PerCity: INTEGER,
	TimeLimit_PerUnit: INTEGER,
	AllowTurnUnready: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_TurnTimers = {
	TurnTimerType: TEXT,
	Name: TEXT,
	Description: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Types = {
	Type: TEXT,
	Hash: INTEGER,
	Kind: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_TypeProperties = {
	Type: TEXT,
	Name: TEXT,
	Value: TEXT,
	PropertyType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_TypeTags = {
	Type: TEXT,
	Tag: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Units = {
	UnitType: TEXT,
	Name: TEXT,
	BaseSightRange: INTEGER,
	BaseMoves: INTEGER,
	Combat: INTEGER,
	RangedCombat: INTEGER,
	Range: INTEGER,
	Bombard: INTEGER,
	Domain: TEXT,
	FormationClass: TEXT,
	Cost: INTEGER,
	PopulationCost: INTEGER,
	FoundCity: BOOLEAN,
	FoundReligion: BOOLEAN,
	MakeTradeRoute: BOOLEAN,
	EvangelizeBelief: BOOLEAN,
	LaunchInquisition: BOOLEAN,
	RequiresInquisition: BOOLEAN,
	BuildCharges: INTEGER,
	ReligiousStrength: INTEGER,
	ReligionEvictPercent: INTEGER,
	SpreadCharges: INTEGER,
	ReligiousHealCharges: INTEGER,
	ExtractsArtifacts: BOOLEAN,
	Description: TEXT,
	Flavor: TEXT,
	CanCapture: BOOLEAN,
	CanRetreatWhenCaptured: BOOLEAN,
	TraitType: TEXT,
	AllowBarbarians: BOOLEAN,
	CostProgressionModel: TEXT,
	CostProgressionParam1: INTEGER,
	PromotionClass: TEXT,
	InitialLevel: INTEGER,
	NumRandomChoices: INTEGER,
	PrereqTech: TEXT,
	PrereqCivic: TEXT,
	PrereqDistrict: TEXT,
	PrereqPopulation: INTEGER,
	LeaderType: TEXT,
	CanTrain: BOOLEAN,
	StrategicResource: TEXT,
	PurchaseYield: TEXT,
	MustPurchase: BOOLEAN,
	Maintenance: INTEGER,
	Stackable: BOOLEAN,
	AirSlots: INTEGER,
	CanTargetAir: BOOLEAN,
	PseudoYieldType: TEXT,
	ZoneOfControl: BOOLEAN,
	AntiAirCombat: INTEGER,
	Spy: BOOLEAN,
	WMDCapable: BOOLEAN,
	ParkCharges: INTEGER,
	IgnoreMoves: BOOLEAN,
	TeamVisibility: BOOLEAN,
	ObsoleteTech: TEXT,
	ObsoleteCivic: TEXT,
	MandatoryObsoleteTech: TEXT,
	MandatoryObsoleteCivic: TEXT,
	AdvisorType: TEXT,
	EnabledByReligion: BOOLEAN,
	TrackReligion: BOOLEAN,
	DisasterCharges: INTEGER,
	UseMaxMeleeTrainedStrength: BOOLEAN,
	ImmediatelyName: BOOLEAN,
	CanEarnExperience: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Unit_BuildingPrereqs = {
	Unit: TEXT,
	PrereqBuilding: TEXT,
	NumSupported: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Units_MODE = {
	UnitType: TEXT,
	ActionCharges: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Unit_RebellionTags = {
	Tag: TEXT,
	RebellionLevel: INTEGER,
	NumCreated: INTEGER,
	ForbiddenTag: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitAbilities = {
	UnitAbilityType: TEXT,
	Name: LocalizedText,
	Description: LocalizedText,
	Inactive: BOOLEAN,
	ShowFloatTextWhenEarned: BOOLEAN,
	Permanent: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitAbilityModifiers = {
	UnitAbilityType: TEXT,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitAiInfos = {
	UnitType: TEXT,
	AiType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitAiTypes = {
	AiType: TEXT,
	TypeValue: INTEGER,
	Priority: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitCaptures = {
	CapturedUnitType: TEXT,
	BecomesUnitType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitCommands = {
	CommandType: TEXT,
	Description: TEXT,
	Help: TEXT,
	DisabledHelp: TEXT,
	Icon: TEXT,
	Sound: TEXT,
	VisibleInUI: BOOLEAN,
	HoldCycling: BOOLEAN,
	CategoryInUI: TEXT,
	InterfaceMode: TEXT,
	PrereqTech: TEXT,
	PrereqCivic: TEXT,
	MaxEra: INTEGER,
	HotkeyId: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitFormationClasses = {
	FormationClassType: TEXT,
	Name: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitNames = {
	ID: INTEGER,
	NameType: TEXT,
	TextKey: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitOperations = {
	OperationType: TEXT,
	Description: TEXT,
	Help: TEXT,
	DisabledHelp: TEXT,
	Icon: TEXT,
	Sound: TEXT,
	VisibleInUI: BOOLEAN,
	HoldCycling: BOOLEAN,
	CategoryInUI: TEXT,
	InterfaceMode: TEXT,
	PrereqTech: TEXT,
	PrereqCivic: TEXT,
	Turns: INTEGER,
	BaseProbability: INTEGER,
	LevelProbChange: INTEGER,
	EnemyProbChange: INTEGER,
	EnemyLevelProbChange: INTEGER,
	TargetDistrict: TEXT,
	HotkeyId: TEXT,
	Offensive: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitPromotions = {
	UnitPromotionType: TEXT,
	Name: LocalizedText,
	Description: LocalizedText,
	Level: INTEGER,
	Specialization: TEXT,
	PromotionClass: TEXT,
	Column: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitPromotionClasses = {
	PromotionClassType: TEXT,
	Name: LocalizedText,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitPromotionModifiers = {
	UnitPromotionType: INTEGER,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitPromotionPrereqs = {
	UnitPromotion: TEXT,
	PrereqUnitPromotion: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitReplaces = {
	CivUniqueUnitType: TEXT,
	ReplacesUnitType: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Units_Presentation = {
	UnitType: TEXT,
	UIFlagOffset: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitUpgrades = {
	Unit: TEXT,
	UpgradeUnit: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Victories = {
	VictoryType: TEXT,
	Name: TEXT,
	Blurb: TEXT,
	RequirementSetId: TEXT,
	EnabledByDefault: BOOLEAN,
	Description: TEXT,
	Icon: TEXT,
	OneMoreTurn: BOOLEAN,
	CriticalPercentage: INTEGER,
	RequiresMultipleTeams: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Visibilities = {
	VisibilityType: TEXT,
	Name: TEXT,
	RevealAgendas: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Vocabularies = {
	Vocabulary: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Wars = {
	WarType: TEXT,
	Name: TEXT,
	Description: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_WMDs = {
	WeaponType: TEXT,
	Name: TEXT,
	BlastRadius: INTEGER,
	FalloutDuration: INTEGER,
	AffectPopulation: BOOLEAN,
	AffectImprovements: BOOLEAN,
	AffectBuildings: BOOLEAN,
	AffectUnits: BOOLEAN,
	AffectResources: BOOLEAN,
	AffectRoutes: BOOLEAN,
	ICBMStrikeRange: INTEGER,
	Maintenance: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Yields = {
	YieldType: TEXT,
	Name: TEXT,
	IconString: TEXT,
	OccupiedCityChange: REAL,
	DefaultValue: REAL,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Colors = {
	Type: TEXT,
	Color: TEXT,
	Red: float,
	Green: float,
	Blue: float,
	Alpha: float,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_PlayerColors = {
	Type: TEXT,
	Usage: TEXT,
	PrimaryColor: TEXT,
	SecondaryColor: TEXT,
	TextColor: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomacyStatements = {
	Type: TEXT,
	SubType: TEXT,
	Initiator: TEXT,
	Leader: TEXT,
	Mood: TEXT,
	StatementText: TEXT,
	ReasonText: TEXT,
	LeaderAnimation: TEXT,
	SceneEffect: TEXT,
	Selections: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomacySelections = {
	Type: TEXT,
	Leader: TEXT,
	Mood: TEXT,
	Sort: INTEGER,
	Key: TEXT,
	Text: TEXT,
	Tooltip: TEXT,
	DiplomaticActionType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomacyMoodTypes = {
	Type: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomacyStatementTypes = {
	Type: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomacyStatementSubTypes = {
	Type: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_LeaderAnimations = {
	Leader: TEXT,
	Name: TEXT,
	Sequence: TEXT,
	Initial: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AgendaTags = {
	AgendaTagType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Alliances = {
	AllianceType: TEXT,
	Name: TEXT,
	Description: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_AllianceEffects = {
	LevelRequirement: INTEGER,
	AllianceType: TEXT,
	ModifierID: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Building_BuildChargeProductions = {
	BuildingType: TEXT,
	UnitType: TEXT,
	PercentProductionPerCharge: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Building_ResourceCosts = {
	BuildingType: TEXT,
	ResourceType: TEXT,
	StartProductionCost: INTEGER,
	PerTurnMaintenanceCost: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Building_TourismBombs_XP2 = {
	BuildingType: TEXT,
	TourismBombValue: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Buildings_XP2 = {
	BuildingType: TEXT,
	RequiredPower: INTEGER,
	ResourceTypeConvertedToPower: TEXT,
	PreventsFloods: BOOLEAN,
	PreventsDrought: BOOLEAN,
	BlocksCoastalFlooding: BOOLEAN,
	CostMultiplierPerTile: INTEGER,
	CostMultiplierPerSeaLevel: INTEGER,
	Bridge: BOOLEAN,
	CanalWonder: BOOLEAN,
	EntertainmentBonusWithPower: INTEGER,
	NuclearReactor: BOOLEAN,
	Pillage: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Building_YieldChangesBonusWithPower = {
	BuildingType: TEXT,
	YieldType: TEXT,
	YieldChange: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CoastalLowlands = {
	CoastalLowlandType: TEXT,
	Name: TEXT,
	Description: TEXT,
	FloodedEvent: TEXT,
	SubmergedEvent: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CommemorationModifiers = {
	CommemorationType: TEXT,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CommemorationTypes = {
	CommemorationType: TEXT,
	CategoryDescription: LocalizedText,
	GoldenAgeBonusDescription: LocalizedText,
	NormalAgeBonusDescription: LocalizedText,
	DarkAgeBonusDescription: LocalizedText,
	MinimumGameEra: TEXT,
	MaximumGameEra: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ComplimentModifiers = {
	CommemorationType: TEXT,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_CongressAiChanges = {
	ResolutionType: TEXT,
	DiscussionType: TEXT,
	YieldType: TEXT,
	PseudoYieldType: TEXT,
	Value: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DeforestationEffects = {
	DeforestationEffectType: TEXT,
	Name: TEXT,
	MaxAverageDeforestation: REAL,
	CO2PercentModifier: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DeforestationLevels = {
	DeforestationType: TEXT,
	Name: TEXT,
	Description: TEXT,
	MaxDeforestationPercent: INTEGER,
	DeforestationPointsPerTurn: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomaticActions_XP1 = {
	DiplomaticActionType: TEXT,
	RequiresGoldenAgeCommemorationType: TEXT,
	AllianceType: TEXT,
	RequiresBrokenPromise: BOOLEAN,
	RequiresDifferentLateGovernment: BOOLEAN,
	RequiresAllianceSoonToEnd: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomaticActions_XP2 = {
	DiplomaticActionType: TEXT,
	FavorCost: INTEGER,
	GrievanceCost: INTEGER,
	PromiseType: TEXT,
	RequiredPromise: TEXT,
	GrievancesForRefusal: INTEGER,
	GrievancesPerIncursion: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_DiplomaticVisibilitySources_XP1 = {
	VisibilitySourceType: TEXT,
	TradePostTrait: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Discussions = {
	DiscussionType: TEXT,
	ProposalType: TEXT,
	Name: TEXT,
	Description: TEXT,
	EmergencyType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_District_BuildChargeProductions = {
	DistrictType: TEXT,
	UnitType: TEXT,
	PercentProductionPerCharge: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Districts_XP2 = {
	DistrictType: TEXT,
	OnePerRiver: BOOLEAN,
	PreventsFloods: BOOLEAN,
	PreventsDrought: BOOLEAN,
	Canal: BOOLEAN,
	AttackRange: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_EmergencyAlliances = {
	EmergencyType: TEXT,
	Trigger: TEXT,
	TargetRequirementSet: TEXT,
	GoalTrigger: TEXT,
	MemberRequirementSet: TEXT,
	Duration: INTEGER,
	RemovesWarState: BOOLEAN,
	ShareVis: BOOLEAN,
	OpenBorders: BOOLEAN,
	KillFriendship: BOOLEAN,
	WarOnTarget: BOOLEAN,
	InformTarget: BOOLEAN,
	LockoutTime: INTEGER,
	EmergencyText: TEXT,
	GoalText: TEXT,
	Name: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Emergencies_XP2 = {
	EmergencyType: TEXT,
	Hostile: BOOLEAN,
	NoTarget: BOOLEAN,
	UIType: TEXT,
	UIBackgroundPrefix: TEXT,
	NoCongress: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_EmergencyBuffs = {
	ModifierID: TEXT,
	EmergencyType: TEXT,
	Description: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_EmergencyGoalTexts = {
	GoalType: TEXT,
	GoalDescription: TEXT,
	ShortGoalDescription: TEXT,
	TentativeGoalDescription: TEXT,
	ShortTargetGoalDescription: TEXT,
	ListGoal: TEXT,
	TargetListGoal: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_EmergencyRewards = {
	ModifierID: TEXT,
	EmergencyType: TEXT,
	OnSuccess: BOOLEAN,
	Description: TEXT,
	FirstPlace: BOOLEAN,
	TopTier: BOOLEAN,
	BottomTier: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_EmergencyScoreSources = {
	ScoreSourceType: TEXT,
	EmergencyType: TEXT,
	Description: TEXT,
	ScoreAmount: INTEGER,
	FromProject: TEXT,
	MilitaryInEnemyTerritory: BOOLEAN,
	ReligiousInEnemyTerritory: BOOLEAN,
	AttackedEnemyCity: BOOLEAN,
	FromGold: BOOLEAN,
	KilledEnemyUnit: BOOLEAN,
	SpreadReligion: BOOLEAN,
	ReligionAttackedEnemy: BOOLEAN,
	ReligiousUnitsInEnemyTerritory: BOOLEAN,
	FromGreatPerson: TEXT,
	FromFavor: BOOLEAN,
	FromBuilding: TEXT,
	FromDistrict: TEXT,
	FromCO2Footprint: BOOLEAN,
	FromAtWar: BOOLEAN,
	FromBadCO2Footprint: BOOLEAN,
	FromSacrificedUnitStrength: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_EmergencyTexts = {
	Type: TEXT,
	Flavor: TEXT,
	Description: TEXT,
	ExtraEffects: TEXT,
	ExtraRewards: TEXT,
	ExtraFailureRewards: TEXT,
	DescriptionShorter: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Eras_XP1 = {
	EraType: TEXT,
	GameEraMinimumTurns: INTEGER,
	GameEraMaximumTurns: INTEGER,
	LiberatedEnvoys: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Eras_XP2 = {
	EraType: TEXT,
	GrievanceDecayRate: INTEGER,
	TensionDecayRate: INTEGER,
	TradeRouteMinimumEndTurnChange: INTEGER,
	EraScoreThresholdShift: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Feature_Floodplains = {
	FeatureType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Features_XP2 = {
	FeatureType: TEXT,
	Volcano: BOOLEAN,
	ValidWonderPlacement: BOOLEAN,
	ValidDistrictPlacement: BOOLEAN,
	Eruptable: BOOLEAN,
	ValidForReplacement: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GoodyHutSubTypes_XP2 = {
	SubTypeGoodyHut: TEXT,
	CityState: BOOLEAN,
	StrategicResources: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Governments_XP2 = {
	GovernmentType: TEXT,
	Favor: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Governors = {
	GovernorType: TEXT,
	Name: LocalizedText,
	Description: LocalizedText,
	IdentityPressure: INTEGER,
	Title: LocalizedText,
	ShortTitle: LocalizedText,
	TransitionStrength: INTEGER,
	AssignCityState: BOOLEAN,
	Image: TEXT,
	PortraitImage: TEXT,
	PortraitImageSelected: TEXT,
	TraitType: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Governors_XP2 = {
	GovernorType: TEXT,
	AssignToMajor: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GovernorsCannotAssign = {
	GovernorType: TEXT,
	CannotAssign: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GovernorModifiers = {
	GovernorType: TEXT,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GovernorPromotions = {
	GovernorPromotionType: TEXT,
	Name: TEXT,
	Description: TEXT,
	Level: INTEGER,
	Column: INTEGER,
	BaseAbility: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GovernorPromotionConditions = {
	GovernorPromotionType: TEXT,
	HiddenWithoutPrereqs: BOOLEAN,
	EarliestGameEra: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GovernorPromotionModifiers = {
	GovernorPromotionType: TEXT,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GovernorPromotionPrereqs = {
	GovernorPromotionType: TEXT,
	PrereqGovernorPromotion: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GovernorPromotionSets = {
	GovernorType: TEXT,
	GovernorPromotion: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GovernorReplaces = {
	UniqueGovernorType: TEXT,
	ReplacesGovernorType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_GreatWorks_MODE = {
	GreatWorkType: TEXT,
	RequiredGovernor: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Happinesses_XP1 = {
	HappinessType: TEXT,
	IdentityPerTurnChange: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Improvements_XP2 = {
	ImprovementType: TEXT,
	AllowImpassableMovement: BOOLEAN,
	BuildOnAdjacentPlot: BOOLEAN,
	PreventsDrought: BOOLEAN,
	DisasterResistant: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Leaders_XP2 = {
	LeaderType: TEXT,
	OceanStart: BOOLEAN,
	MinorCivBonusType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_LoyaltyLevels = {
	LoyaltyLevelType: TEXT,
	YieldChange: REAL,
	GrowthChange: REAL,
	Name: TEXT,
	Description: TEXT,
	LoyaltyMax: INTEGER,
	LoyaltyMin: INTEGER,
	IdentityChange: REAL,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Maps_XP2 = {
	MapSizeType: TEXT,
	CO2For1DegreeTempRise: INTEGER,
	DesertPlotCountToLabel: INTEGER,
	MountainPlotCountToLabel: INTEGER,
	SeaPlotCountToLabel: INTEGER,
	LakePlotCountToLabel: INTEGER,
	OceanPlotCountToLabel: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_MinorCivBonuses = {
	MinorCivBonusType: TEXT,
	Name: LocalizedText,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Moments = {
	MomentType: TEXT,
	Name: LocalizedText,
	Description: LocalizedText,
	InstanceDescription: LocalizedText,
	InterestLevel: INTEGER,
	EraScore: INTEGER,
	RepeatTurnCooldown: INTEGER,
	CommemorationType: TEXT,
	MinimumGameEra: TEXT,
	MaximumGameEra: TEXT,
	BackgroundTexture: TEXT,
	IconTexture: TEXT,
	MomentIllustrationType: TEXT,
	ObsoleteEra: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_MomentDataTypes = {
	MomentDataType: TEXT,
	Name: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_MomentIllustrations = {
	MomentIllustrationType: TEXT,
	MomentDataType: TEXT,
	GameDataType: TEXT,
	Texture: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_MomentIllustrationTypes = {
	MomentIllustrationType: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NamedDeserts = {
	NamedDesertType: TEXT,
	Name: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NamedDesertCivilizations = {
	NamedDesertType: TEXT,
	CivilizationType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NamedLakes = {
	NamedLakeType: TEXT,
	Name: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NamedLakeCivilizations = {
	NamedLakeType: TEXT,
	CivilizationType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NamedMountains = {
	NamedMountainType: TEXT,
	Name: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NamedMountainCivilizations = {
	NamedMountainType: TEXT,
	CivilizationType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NamedOceans = {
	NamedOceanType: TEXT,
	Name: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NamedOceanCivilizations = {
	NamedOceanType: TEXT,
	CivilizationType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NamedRivers = {
	NamedRiverType: TEXT,
	Name: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NamedRiverCivilizations = {
	NamedRiverType: TEXT,
	CivilizationType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NamedSeas = {
	NamedSeaType: TEXT,
	Name: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NamedSeaCivilizations = {
	NamedSeaType: TEXT,
	CivilizationType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NamedVolcanoes = {
	NamedVolcanoType: TEXT,
	Name: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_NamedVolcanoCivilizations = {
	NamedVolcanoType: TEXT,
	CivilizationType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Policy_GovernmentExclusives_XP2 = {
	PolicyType: TEXT,
	GovernmentType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Policies_XP1 = {
	PolicyType: TEXT,
	MinimumGameEra: TEXT,
	MaximumGameEra: TEXT,
	RequiresDarkAge: BOOLEAN,
	RequiresGoldenAge: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_PrevailingWinds = {
	MinimumLatitude: INTEGER,
	MaximumLatitude: INTEGER,
	DirectionType: TEXT,
	Weight: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Project_BuildingCosts = {
	ProjectType: TEXT,
	ConsumedBuildingType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Project_ResourceCosts = {
	ProjectType: TEXT,
	ResourceType: TEXT,
	StartProductionCost: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Projects_XP1 = {
	ProjectType: TEXT,
	IdentityPerCitizenChange: REAL,
	UnlocksFromEffect: BOOLEAN,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Projects_XP2 = {
	ProjectType: TEXT,
	RequiredPowerWhileActive: INTEGER,
	ReligiousPressureModifier: INTEGER,
	UnlocksFromEffect: BOOLEAN,
	RequiredBuilding: TEXT,
	CreateBuilding: TEXT,
	FullyPoweredWhileActive: BOOLEAN,
	MaxSimultaneousInstances: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ProposalBlockers = {
	ProposalBlockerType: TEXT,
	Description: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ProposalTypes = {
	ProposalType: TEXT,
	Icon: INTEGER,
	Name: TEXT,
	Description: TEXT,
	BigVersion: BOOLEAN,
	Sort: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomAgendas_XP2 = {
	AgendaType: TEXT,
	AgendaTag: TEXT,
	RequiresReligion: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomAgendaCivicTags = {
	CivicType: TEXT,
	AgendaTag: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomAgendaEraTags = {
	EraType: TEXT,
	AgendaTag: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomAgendasForCivic = {
	CivicType: TEXT,
	NumAgendas: INTEGER,
	VisibilityType: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomAgendasInEra = {
	EraType: TEXT,
	NumAgendas: INTEGER,
	VisibilityType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomEvents = {
	RandomEventType: TEXT,
	Name: TEXT,
	Description: TEXT,
	LongDescription: TEXT,
	EffectString: TEXT,
	Severity: INTEGER,
	NaturalWonder: TEXT,
	IceLoss: INTEGER,
	HaltsStormFertility: BOOLEAN,
	HaltsFloodFertility: BOOLEAN,
	FertilityRemovalChance: INTEGER,
	ClimateChangePoints: INTEGER,
	ChanceIncreasePerDegree: INTEGER,
	Hexes: INTEGER,
	Movement: INTEGER,
	Duration: INTEGER,
	Spacing: INTEGER,
	IconLarge: TEXT,
	IconSmall: TEXT,
	MinTurnAtRisk: INTEGER,
	MitigatedYieldReduction: INTEGER,
	EffectOperatorType: TEXT,
	UnitTriggered: BOOLEAN,
	Global: BOOLEAN,
	AvoidTerritory: BOOLEAN,
	TargetCities: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomEvent_Damages = {
	RandomEventType: TEXT,
	DamageType: TEXT,
	Percentage: INTEGER,
	MinHP: INTEGER,
	MaxHP: INTEGER,
	CoastalLowlandPercentage: INTEGER,
	FalloutDuration: INTEGER,
	ExtraRangePercentage: INTEGER,
	MinTurn: INTEGER,
	MaxTurn: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomEvent_DamagedUnits = {
	RandomEventType: TEXT,
	UnitType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomEvent_Features = {
	RandomEventType: TEXT,
	FeatureType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomEvent_Frequencies = {
	RandomEventType: TEXT,
	RealismSettingType: TEXT,
	OccurrencesPerGame: REAL,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomEvent_Improvement_Placements = {
	RandomEventType: TEXT,
	ImprovementType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomEvent_Notifications = {
	RandomEventType: TEXT,
	Summary: TEXT,
	MinTurn: INTEGER,
	MaxTurn: INTEGER,
	Title: TEXT,
	CompilationRadius: INTEGER,
	NotificationType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomEvent_PillagedBuildings = {
	RandomEventType: TEXT,
	BuildingType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomEvent_PillagedDistricts = {
	RandomEventType: TEXT,
	DistrictType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomEvent_PillagedImprovements = {
	RandomEventType: TEXT,
	ImprovementType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomEvent_Presentation = {
	RandomEventType: TEXT,
	Animation: TEXT,
	Sound: TEXT,
	Callback: TEXT,
	VFX: TEXT,
	ForceShowVFX: TEXT,
	MFX: TEXT,
	SequenceType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomEvent_Terrains = {
	RandomEventType: TEXT,
	TerrainType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RandomEvent_Yields = {
	RandomEventType: TEXT,
	YieldType: TEXT,
	FeatureType: TEXT,
	Percentage: INTEGER,
	ReplaceFeature: BOOLEAN,
	Amount: INTEGER,
	Turn: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_RealismSettings = {
	RealismSettingType: TEXT,
	Name: TEXT,
	PercentVolcanoesActive: INTEGER,
	ExtraRange: BOOLEAN,
	ClimateChangePoints: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Resolutions = {
	ResolutionType: TEXT,
	TargetKind: TEXT,
	Name: TEXT,
	Effect1Description: TEXT,
	Effect2Description: TEXT,
	ValidationLua: TEXT,
	AITargetChooser: TEXT,
	AILuaTargetChooser: TEXT,
	InjectionOnly: BOOLEAN,
	EarliestEra: TEXT,
	LatestEra: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_ResolutionEffects = {
	ResolutionEffectId: INTEGER,
	ResolutionType: TEXT,
	WhichEffect: INTEGER,
	ModifierId: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Resource_Consumption = {
	ResourceType: TEXT,
	Accumulate: BOOLEAN,
	PowerProvided: INTEGER,
	CO2perkWh: INTEGER,
	BaseExtractionRate: INTEGER,
	ImprovedExtractionRate: INTEGER,
	ObsoleteTech: TEXT,
	StockpileCap: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Route_ResourceCosts = {
	RouteType: TEXT,
	ResourceType: TEXT,
	BuildWithUnitCost: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Routes_XP2 = {
	RouteType: TEXT,
	BuildOnlyWithUnit: BOOLEAN,
	BuildWithUnitChargeCost: INTEGER,
	PrereqTech: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_SecretSocieties = {
	SecretSocietyType: TEXT,
	Name: LocalizedText,
	Description: LocalizedText,
	DiscoveryText: LocalizedText,
	MembershipText: LocalizedText,
	GovernorType: TEXT,
	DiscoverAtBarbarianCampBaseChance: INTEGER,
	DiscoverAtCityStateBaseChance: INTEGER,
	DiscoverAtGoodyHutBaseChance: INTEGER,
	DiscoverAtNaturalWonderBaseChance: INTEGER,
	SmallIcon: TEXT,
	IconString: TEXT,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_StartEras_XP2 = {
	EraType: TEXT,
	DiploVP: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Unit_RockbandResults_XP2 = {
	ResultType: TEXT,
	Name: TEXT,
	Description: TEXT,
	AlbumSales: INTEGER,
	TourismBomb: INTEGER,
	ExtraPromotion: BOOLEAN,
	Dies: BOOLEAN,
	GainsLevel: BOOLEAN,
	BaseProbability: INTEGER,
	PerformanceStars: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Units_XP2 = {
	UnitType: TEXT,
	ResourceMaintenanceAmount: INTEGER,
	ResourceCost: INTEGER,
	ResourceMaintenanceType: TEXT,
	TourismBomb: INTEGER,
	CanEarnExperience: BOOLEAN,
	TourismBombPossible: BOOLEAN,
	CanFormMilitaryFormation: BOOLEAN,
	MajorCivOnly: BOOLEAN,
	CanCauseDisasters: BOOLEAN,
	CanSacrificeUnits: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitOperations_XP2 = {
	OperationType: TEXT,
	IsDisabled: BOOLEAN,
	CO2Production: INTEGER,
	Hash: INTEGER,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_UnitRetreats_XP1 = {
	UnitRetreatType: TEXT,
	BuildingType: TEXT,
	UnitType: TEXT,
	ImprovementType: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_Visibilities_XP2 = {
	VisibilityType: TEXT,
	EspionageViewCapital: BOOLEAN,
	EspionageViewAll: BOOLEAN,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}

declare type Gameplay_VotingBlockers = {
	VotingBlockerType: TEXT,
	NoUpvote: BOOLEAN,
	NoDownvote: BOOLEAN,
	Description: TEXT,
	Index: INTEGER,
	RowId: INTEGER,
	rowid: INTEGER,
}