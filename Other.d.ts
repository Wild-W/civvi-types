/** @noSelfInFile **/

declare const PlayersVisibility: PlayerVisibility[];
declare const PlayerConfigurations: PlayerConfiguration[];
declare const Players: Player[];
/** Array of arrays of playerIDs. */
declare const Teams: number[][];
declare const MapModData: {};
/** Name of the lua context (state), likely your file's name. */
declare const StateName: string;
declare const Controls: Record<string, Control>;
declare function StrategicView_ClearReferenceMap(): void;
declare function StrategicView_SetReferenceMap(referenceMap: string): void;
declare function StrategicView_SetReferenceMapAlpha(normalizedAlpha: number): void;
/** Unknown return value. */
declare function ReferenceCurrentGameCoreEvent(): number;
/** Don't use, it will probably crash your game. */
declare function LookUpControl(): void;
/** Returns the normalized (decimal 0-1) alpha value. */
declare function StrategicView_GetReferenceMapAlpha(): number;
/** Only returns false, no matter what. */
declare function IsNull(value: any): false;
/** Returns the number of game ticks accumulated in the current session. */
declare function GetTickCount(): number;
/** Returns an error message traceback. */
declare function traceback(): string;
declare function TypeInfo(table: LuaTable): LuaMetatable<typeof table, any>;
/** Alternative to pairs. */
declare function hpairs(table: LuaTable): LuaPairsIterable<typeof table, any>;
/**
 * Copies the literal contents of a file or files with the given name into this file
 * and executes them.
 * 
 * Returns:
 * - An array of the file-paths to files with the given name.
 * @param fileName Does not need to end in ".lua".
 * */
declare function include(fileName: string): string[];