/**
 * **Contexts**: Gameplay, UI
 */
declare enum DealProposalAction
{
    /**
    * **Contexts**: Gameplay, UI
    */
    EQUALIZE = 6,
    /**
    * **Contexts**: Gameplay, UI
    */
    INSPECT = 7,
    /**
    * **Contexts**: Gameplay, UI
    */
    ACCEPTED = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    REJECTED_PERMANENT = 12,
    /**
    * **Contexts**: Gameplay, UI
    */
    EQUALIZE_FAILED = 10,
    /**
    * **Contexts**: Gameplay, UI
    */
    CLOSED = 8,
    /**
    * **Contexts**: Gameplay, UI
    */
    REJECTED = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADJUSTED = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    DEMANDED = 5,
    /**
    * **Contexts**: Gameplay, UI
    */
    PENDING = 9,
    /**
    * **Contexts**: Gameplay, UI
    */
    PROPOSED = 4,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum GamepadEvents
{
    /**
    * **Contexts**: Gameplay, UI
    */
    ButtonUp = 10,
    /**
    * **Contexts**: Gameplay, UI
    */
    ButtonDown = 9,
    /**
    * **Contexts**: Gameplay, UI
    */
    JoystickMotion = 11,
}

/**
 * **Contexts**: UI
 */
declare enum KickVoteReasonType
{
    /**
    * **Contexts**: UI
    */
    KICKVOTE_NONE = 0,
    /**
    * **Contexts**: UI
    */
    KICKVOTE_GRIEFING = 2,
    /**
    * **Contexts**: UI
    */
    KICKVOTE_AFK = 1,
    /**
    * **Contexts**: UI
    */
    KICKVOTE_CHEATING = 3,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum GameDefines
{
    /**
    * **Contexts**: Gameplay, UI
    */
    MAX_PLAYERS = 64,
    /**
    * **Contexts**: Gameplay, UI
    */
    MAX_MAJOR_CIVS = 22,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum Gestures
{
    /**
    * **Contexts**: Gameplay, UI
    */
    Holding = 128,
    /**
    * **Contexts**: Gameplay, UI
    */
    Dragging = 32,
    /**
    * **Contexts**: Gameplay, UI
    */
    Any = 480,
    /**
    * **Contexts**: Gameplay, UI
    */
    Stretching = 64,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum PushDataSearchOptions
{
    /**
    * **Contexts**: Gameplay, UI
    */
    IsUnseen = 8,
    /**
    * **Contexts**: Gameplay, UI
    */
    IsOpen = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    IsClosed = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    IsSeen = 4,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum Mouse
{
    /**
    * **Contexts**: Gameplay, UI
    */
    eWheel = 8,
    /**
    * **Contexts**: Gameplay, UI
    */
    eMouseExit = 10,
    /**
    * **Contexts**: Gameplay, UI
    */
    eRClick = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    eDblTap = 7,
    /**
    * **Contexts**: Gameplay, UI
    */
    eMDblClick = 5,
    /**
    * **Contexts**: Gameplay, UI
    */
    eLDblClick = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    eMClick = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    eMouseEnter = 9,
    /**
    * **Contexts**: Gameplay, UI
    */
    eTap = 6,
    /**
    * **Contexts**: Gameplay, UI
    */
    eLClick = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    eRDblClick = 4,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum BatteryEvents
{
    /**
    * **Contexts**: Gameplay, UI
    */
    BatteryChargingUpdate = 47,
    /**
    * **Contexts**: Gameplay, UI
    */
    BatteryUpdate = 46,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare const Keys: KeysConstructor;

type Keys = KeysConstructor[keyof KeysConstructor];

declare interface KeysConstructor
{
    /**
    * **Contexts**: Gameplay, UI
    */
    0: 27,
    /**
    * **Contexts**: Gameplay, UI
    */
    1: 28,
    /**
    * **Contexts**: Gameplay, UI
    */
    2: 29,
    /**
    * **Contexts**: Gameplay, UI
    */
    3: 30,
    /**
    * **Contexts**: Gameplay, UI
    */
    4: 31,
    /**
    * **Contexts**: Gameplay, UI
    */
    5: 32,
    /**
    * **Contexts**: Gameplay, UI
    */
    6: 33,
    /**
    * **Contexts**: Gameplay, UI
    */
    7: 34,
    /**
    * **Contexts**: Gameplay, UI
    */
    8: 35,
    /**
    * **Contexts**: Gameplay, UI
    */
    9: 36,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_BACK: 147,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_RESET: 233,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_NONAME: 252,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_BROWSER_FAVORITES: 171,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_SNAPSHOT: 98,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_LSHOULDER: 133,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_LTRIGGER: 134,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_BROWSER_HOME: 172,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F9: 61,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F23: 75,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_VOLUME_UP: 185,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_ACCEPT: 30,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_DECIMAL: 50,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_RIGHT: 141,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_ICO_00: 228,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_RSHIFT: 112,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_CLEAR: 254,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_BACK: 104,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_ALT: 108,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_VOLUME_DOWN: 184,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F5: 57,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_ENLW: 244,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_HANJA: 25,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_NUMPAD7: 44,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F1: 53,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_INSERT: 77,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_FJ_MASSHOU: 147,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_NUMPAD0: 37,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_RMENU: 114,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F6: 58,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_AUTO: 243,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_LEFT: 140,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_LCONTROL: 110,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_COMMA: 89,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_3: 93,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_BROWSER_STOP: 169,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_NUMPAD1: 38,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_PA1: 235,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_KANA: 21,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_FJ_TOUROKU: 148,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_2: 92,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_NUMPAD3: 40,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_SPACE: 100,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_JUNJA: 23,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F7: 59,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_RIGHT: 85,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_RWIN: 119,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_MODECHANGE: 31,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F14: 66,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_NUMPAD9: 46,
    /**
    * **Contexts**: Gameplay, UI
    */
    A: 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    C: 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    B: 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    E: 5,
    /**
    * **Contexts**: Gameplay, UI
    */
    D: 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    G: 7,
    /**
    * **Contexts**: Gameplay, UI
    */
    F: 6,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_LEFT: 83,
    /**
    * **Contexts**: Gameplay, UI
    */
    H: 8,
    /**
    * **Contexts**: Gameplay, UI
    */
    K: 11,
    /**
    * **Contexts**: Gameplay, UI
    */
    J: 10,
    /**
    * **Contexts**: Gameplay, UI
    */
    M: 13,
    /**
    * **Contexts**: Gameplay, UI
    */
    L: 12,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_LTHUMB_PRESS: 148,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_MEDIA_PLAY_PAUSE: 189,
    /**
    * **Contexts**: Gameplay, UI
    */
    Q: 17,
    /**
    * **Contexts**: Gameplay, UI
    */
    P: 16,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_EXSEL: 248,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_HANGUL: 21,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_MENU: 108,
    /**
    * **Contexts**: Gameplay, UI
    */
    T: 20,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_A: 128,
    /**
    * **Contexts**: Gameplay, UI
    */
    V: 22,
    /**
    * **Contexts**: Gameplay, UI
    */
    Y: 25,
    /**
    * **Contexts**: Gameplay, UI
    */
    X: 24,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_NUMPAD5: 42,
    /**
    * **Contexts**: Gameplay, UI
    */
    Z: 26,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_102: 226,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_BACKTAB: 245,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_TAB: 101,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_PLUS: 88,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_CAPITAL: 115,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_START: 146,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_BROWSER_BACK: 166,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_NUMPAD6: 43,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_RETURN: 102,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_FJ_JISHO: 146,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_SUBTRACT: 49,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F11: 63,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_MINUS: 90,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F18: 70,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_SHIFT: 106,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_SLEEP: 95,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_X: 130,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_PERIOD: 91,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_CONVERT: 28,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_STICK_RIGHT: 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_RTHUMB_PRESS: 149,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_RCONTROL: 113,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_KANJI: 25,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_HANGEUL: 21,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_LMENU: 111,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_5: 95,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F15: 67,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_ATTN: 246,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_VOLUME_MUTE: 183,
    /**
    * **Contexts**: Gameplay, UI
    */
    I: 9,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_TOOLTIP_REFRESH: 190,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F22: 74,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_SCROLL: 117,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_ESCAPE: 103,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_DOWN: 86,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F12: 64,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_DELETE: 80,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_7: 97,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_UP: 138,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_NEC_EQUAL: 146,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_LWIN: 118,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_PA2: 236,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_FJ_ROYA: 150,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F3: 55,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_BROWSER_REFRESH: 168,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_RSHOULDER: 132,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_B: 129,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_ICO_CLEAR: 230,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_8: 223,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_LAUNCH_MAIL: 180,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F24: 76,
    /**
    * **Contexts**: Gameplay, UI
    */
    S: 19,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_NEXT: 82,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_DOWN: 139,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_MEDIA_NEXT_TRACK: 186,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_CRSEL: 247,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_NUMPAD2: 39,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_6: 96,
    /**
    * **Contexts**: Gameplay, UI
    */
    U: 21,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F13: 65,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F2: 54,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_LAUNCH_APP2: 183,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_PA1: 253,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_BROWSER_SEARCH: 170,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_HOME: 78,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_LSHIFT: 109,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_MEDIA_STOP: 188,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_NONCONVERT: 29,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_4: 94,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_Y: 131,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_ADD: 48,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_PROCESSKEY: 229,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_ICO_HELP: 227,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_RTRIGGER: 136,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F16: 68,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_MEDIA_PREV_TRACK: 187,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_JUMP: 234,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_UP: 84,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_PA3: 237,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_WSCTRL: 238,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_NUMPAD8: 45,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_FJ_LOYA: 149,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F21: 73,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F4: 56,
    /**
    * **Contexts**: Gameplay, UI
    */
    O: 15,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_LAUNCH_MEDIA_SELECT: 181,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_CUSEL: 239,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_ZOOM: 251,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_FINISH: 241,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_COPY: 242,
    /**
    * **Contexts**: Gameplay, UI
    */
    N: 14,
    /**
    * **Contexts**: Gameplay, UI
    */
    R: 18,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_1: 87,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_BROWSER_FORWARD: 167,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_PRIOR: 79,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_END: 81,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_NUMLOCK: 116,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_PAUSE: 99,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F8: 60,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_AX: 225,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_PACKET: 231,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_CONTROL: 107,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_LAUNCH_APP1: 182,
    /**
    * **Contexts**: Gameplay, UI
    */
    PAD_STICK_LEFT: 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_MULTIPLY: 47,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_FINAL: 24,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F10: 62,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_OEM_ATTN: 240,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_APPS: 120,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F17: 69,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_SEPARATOR: 122,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_PLAY: 250,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_EREOF: 249,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F19: 71,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_NUMPAD4: 41,
    /**
    * **Contexts**: Gameplay, UI
    */
    W: 23,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_F20: 72,
    /**
    * **Contexts**: Gameplay, UI
    */
    VK_DIVIDE: 51,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum MouseEvents
{
    /**
    * **Contexts**: Gameplay, UI
    */
    LButtonDoubleClick = 15,
    /**
    * **Contexts**: Gameplay, UI
    */
    MButtonDoubleClick = 21,
    /**
    * **Contexts**: Gameplay, UI
    */
    MouseLast = 29,
    /**
    * **Contexts**: Gameplay, UI
    */
    MButtonDown = 19,
    /**
    * **Contexts**: Gameplay, UI
    */
    PointerDown = 35,
    /**
    * **Contexts**: Gameplay, UI
    */
    RButtonDoubleClick = 18,
    /**
    * **Contexts**: Gameplay, UI
    */
    PointerUpdate = 34,
    /**
    * **Contexts**: Gameplay, UI
    */
    RButtonUp = 17,
    /**
    * **Contexts**: Gameplay, UI
    */
    PointerUp = 36,
    /**
    * **Contexts**: Gameplay, UI
    */
    MouseWheel = 28,
    /**
    * **Contexts**: Gameplay, UI
    */
    RButtonDown = 16,
    /**
    * **Contexts**: Gameplay, UI
    */
    PointerEnter = 38,
    /**
    * **Contexts**: Gameplay, UI
    */
    MouseMove = 12,
    /**
    * **Contexts**: Gameplay, UI
    */
    LButtonDown = 13,
    /**
    * **Contexts**: Gameplay, UI
    */
    PointerLeave = 39,
    /**
    * **Contexts**: Gameplay, UI
    */
    LButtonUp = 14,
    /**
    * **Contexts**: Gameplay, UI
    */
    MouseFirst = 12,
    /**
    * **Contexts**: Gameplay, UI
    */
    MButtonUp = 20,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DealValidationResult
{
    /**
    * **Contexts**: Gameplay, UI
    */
    INVALID = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    VALID = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    MISSING_DEPENDENCY = 2,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum KeyEvents
{
    /**
    * **Contexts**: Gameplay, UI
    */
    KeyUp = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    WM_KEYDOWN = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    WM_KEYUP = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    KeyDown = 0,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum SaveFileTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    GAME_STATE = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    GAME_CONFIGURATION = 1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum ButtonStates
{
    /**
    * **Contexts**: Gameplay, UI
    */
    eSelectedDisabledState = 7,
    /**
    * **Contexts**: Gameplay, UI
    */
    eDown = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    eSelectedOver = 5,
    /**
    * **Contexts**: Gameplay, UI
    */
    eSelectedNormal = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    eSelectedDown = 6,
    /**
    * **Contexts**: Gameplay, UI
    */
    eOver = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    eDisabled = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    eNormal = 0,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum GovernmentBonusTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNMENTBONUS_FAITH_PURCHASES = -1034861575,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNMENTBONUS_GOLD_PURCHASES = 1966128485,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNMENTBONUS_OVERALL_PRODUCTION = -1046477358,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNMENTBONUS_ENVOYS = -378754727,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNMENTBONUS_UNIT_PRODUCTION = 1029697954,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNMENTBONUS_COMBAT_EXPERIENCE = -937828189,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_GOVERNMENTBONUS = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNMENTBONUS_DISTRICT_PRODUCTION = 18011027,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNMENTBONUS_DISTRICT_PROJECTS = -1124165192,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNMENTBONUS_WONDER_CONSTRUCTION = 1498660760,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNMENTBONUS_GREAT_PEOPLE = -126853888,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum ReportingStatusTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    GOSSIP = -552441153,
    /**
    * **Contexts**: Gameplay, UI
    */
    DEFAULT = 103780558,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum MainMenuStateDoneData
{
    /**
    * **Contexts**: Gameplay, UI
    */
    eBeginGame = 0,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum QueueInsertMode
{
    /**
    * **Contexts**: Gameplay, UI
    */
    PREPEND = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    APPEND = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    EXCLUSIVE = 0,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum SaveLocations
{
    /**
    * **Contexts**: Gameplay, UI
    */
    FIRAXIS_CLOUD = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    LOCAL_STORAGE = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    STEAM_CLOUD = 2,
}

/**
 * **Contexts**: UI
 */
declare enum BoostSources
{
    /**
    * **Contexts**: UI
    */
    BOOST_SOURCE_RESEARCH_AGREEMENT = 5,
    /**
    * **Contexts**: UI
    */
    BOOST_SOURCE_GREAT_PERSON = 3,
    /**
    * **Contexts**: UI
    */
    NO_BOOST_SOURCE = -1,
    /**
    * **Contexts**: UI
    */
    BOOST_SOURCE_ESPIONAGE = 4,
    /**
    * **Contexts**: UI
    */
    BOOST_SOURCE_TRADING_POST = 8,
    /**
    * **Contexts**: UI
    */
    BOOST_SOURCE_BARBARIAN_CLAN_STEAL = 9,
    /**
    * **Contexts**: UI
    */
    BOOST_SOURCE_WONDER = 2,
    /**
    * **Contexts**: UI
    */
    BOOST_SOURCE_TRIGGER = 0,
    /**
    * **Contexts**: UI
    */
    BOOST_SOURCE_TEAMMATE = 6,
    /**
    * **Contexts**: UI
    */
    BOOST_SOURCE_GOODYHUT = 1,
    /**
    * **Contexts**: UI
    */
    BOOST_SOURCE_CAPTURED_CITY = 7,
}

/**
 * **Contexts**: UI
 */
declare enum InterfaceModeTypes
{
    /**
    * **Contexts**: UI
    */
    RESTORE_UNIT_MOVES = -1601251582,
    /**
    * **Contexts**: UI
    */
    SACRIFICE_SELECTION = -57145246,
    /**
    * **Contexts**: UI
    */
    PRIORITY_TARGET = 1504273883,
    /**
    * **Contexts**: UI
    */
    DEBUG = 372882022,
    /**
    * **Contexts**: UI
    */
    VIEW_MODAL_LENS = 4552534,
    /**
    * **Contexts**: UI
    */
    CITY_PLOT_SELECTION = 438733329,
    /**
    * **Contexts**: UI
    */
    COASTAL_RAID = 380199913,
    /**
    * **Contexts**: UI
    */
    FORM_CORPS = -24202438,
    /**
    * **Contexts**: UI
    */
    AIRLIFT = -1331449691,
    /**
    * **Contexts**: UI
    */
    REBASE = 1115649463,
    /**
    * **Contexts**: UI
    */
    AIR_ATTACK = -1611767772,
    /**
    * **Contexts**: UI
    */
    RANGE_ATTACK = -792658014,
    /**
    * **Contexts**: UI
    */
    BUILDING_PLACEMENT = -85343547,
    /**
    * **Contexts**: UI
    */
    PARADROP = -159775061,
    /**
    * **Contexts**: UI
    */
    ICBM_STRIKE = 1615466633,
    /**
    * **Contexts**: UI
    */
    SPY_CHOOSE_MISSION = 1070742220,
    /**
    * **Contexts**: UI
    */
    DISEMBARK = -630021262,
    /**
    * **Contexts**: UI
    */
    NONE = -1,
    /**
    * **Contexts**: UI
    */
    SELECTION = -1615000917,
    /**
    * **Contexts**: UI
    */
    MOVE_TO = -1008159109,
    /**
    * **Contexts**: UI
    */
    WMD_STRIKE = 409072336,
    /**
    * **Contexts**: UI
    */
    BUILD_IMPROVEMENT_ADJACENT = -110027413,
    /**
    * **Contexts**: UI
    */
    PLACE_MAP_PIN = 807898670,
    /**
    * **Contexts**: UI
    */
    TRANSFORM_UNIT = -798936508,
    /**
    * **Contexts**: UI
    */
    CITY_MANAGEMENT = -934432593,
    /**
    * **Contexts**: UI
    */
    FORM_ARMY = 1356399193,
    /**
    * **Contexts**: UI
    */
    ROUTE_TO = -985702248,
    /**
    * **Contexts**: UI
    */
    DEPLOY = -1756456604,
    /**
    * **Contexts**: UI
    */
    DISTRICT_PLACEMENT = -664236824,
    /**
    * **Contexts**: UI
    */
    NAVAL_GOLD_RAID = 1446743340,
    /**
    * **Contexts**: UI
    */
    MOVE_JUMP = 1627526106,
    /**
    * **Contexts**: UI
    */
    KILL_WEAKER_UNIT = -1834615361,
    /**
    * **Contexts**: UI
    */
    DISTRICT_RANGE_ATTACK = -228309745,
    /**
    * **Contexts**: UI
    */
    WB_SELECT_PLOT = 828515937,
    /**
    * **Contexts**: UI
    */
    MAKE_TRADE_ROUTE = -1756334557,
    /**
    * **Contexts**: UI
    */
    TELEPORT_TO_CITY = 175937486,
    /**
    * **Contexts**: UI
    */
    CINEMATIC = 397393512,
    /**
    * **Contexts**: UI
    */
    NATURAL_WONDER = 491433502,
    /**
    * **Contexts**: UI
    */
    EMBARK = -1837166573,
    /**
    * **Contexts**: UI
    */
    SPY_TRAVEL_TO_CITY = -1820340997,
    /**
    * **Contexts**: UI
    */
    CITY_SELECTION = -1771815636,
    /**
    * **Contexts**: UI
    */
    CITY_RANGE_ATTACK = 1538406634,
    /**
    * **Contexts**: UI
    */
    FULLSCREEN_MAP = -255747212,
    /**
    * **Contexts**: UI
    */
    ATTACK = 1119194277,
}

/**
 * **Contexts**: UI
 */
declare enum FireWireTypes
{
    /**
    * **Contexts**: UI
    */
    FIREWIRE_INVALID_ID = -1,
}

/**
 * **Contexts**: UI
 */
declare enum FalloutDamages
{
    /**
    * **Contexts**: UI
    */
    USE_FALLOUT_DEFAULT = -1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum ParameterTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    SUMMARY = -793992760,
    /**
    * **Contexts**: Gameplay, UI
    */
    LOCATION = -1941533124,
    /**
    * **Contexts**: Gameplay, UI
    */
    MESSAGE = -992646959,
}

/**
 * **Contexts**: UI
 */
declare enum JoinGameErrorType
{
    /**
    * **Contexts**: UI
    */
    JOINGAME_GAME_STARTED = 2,
    /**
    * **Contexts**: UI
    */
    JOINGAME_ROOM_FULL = 1,
    /**
    * **Contexts**: UI
    */
    JOINGAME_TOO_MANY_MATCHES = 3,
    /**
    * **Contexts**: UI
    */
    JOINGAME_NO_ERROR = 0,
}

/**
 * **Contexts**: UI
 */
declare enum KickVoteResultType
{
    /**
    * **Contexts**: UI
    */
    KICKVOTERESULT_TIME_ELAPSED = 2,
    /**
    * **Contexts**: UI
    */
    KICKVOTERESULT_VOTED_NO_KICK = 3,
    /**
    * **Contexts**: UI
    */
    KICKVOTERESULT_PENDING = 0,
    /**
    * **Contexts**: UI
    */
    KICKVOTERESULT_NOT_ENOUGH_PLAYERS = 1,
    /**
    * **Contexts**: UI
    */
    KICKVOTERESULT_VOTE_PASSED = 4,
}

/**
 * **Contexts**: UI
 * 
 * GameCore defined property keys for units, can be get/set using the methods GetProperty/SetProperty.
 */
declare enum UnitPropertyKeys
{
    /**
    * **Contexts**: UI
     * 
     * ---
     * Alternatively you can use "MaxHitPoints" as a property key.

Known limitation of setting MaxHitPoints is that units aren't capable of losing more than 100 of their max HP, so they'll be immortal if HP increases. You can still achieve a similar effect by increasing unit defense instead.

This issue does not occur in Pirates scenario, but the reason for which is unknown.
    */
    MaxHitPoints = 2101331729,
    /**
    * **Contexts**: UI
     * 
     * ---
     * Alternatively you can use "LIFESPAN" as a property key.

Setting lifespan to 0 or less will result in the unit dying next turn.
    */
    LifespanRemaining = -1318296071,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DealAgreementTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    OPEN_BORDERS = -242352742,
    /**
    * **Contexts**: Gameplay, UI
    */
    ALLIANCE = 1764885355,
    /**
    * **Contexts**: Gameplay, UI
    */
    JOINT_WAR = 594401930,
    /**
    * **Contexts**: Gameplay, UI
    */
    RESEARCH_AGREEMENT = 1618981909,
    /**
    * **Contexts**: Gameplay, UI
    */
    MAKE_PEACE = 547027585,
    /**
    * **Contexts**: Gameplay, UI
    */
    THIRD_PARTY_WAR = -1258934878,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DiplomacyInitiatorTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    AI = 1480878704,
    /**
    * **Contexts**: Gameplay, UI
    */
    NONE = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    HUMAN = -1379276614,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum AdjacencyBonusTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    ADJACENCY_NATURAL_WONDER = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADJACENCY_FEATURE = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADJACENCY_RESOURCE = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADJACENCY_WONDER = 9,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADJACENCY_TERRAIN = 8,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADJACENCY_SEA_RESOURCE = 7,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_ADJACENCY = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADJACENCY_RESOURCE_CLASS = 5,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADJACENCY_DISTRICT = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADJACENCY_IMPROVEMENT = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADJACENCY_RIVER = 6,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum InputLayoutTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    CONSOLE = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    PC = 0,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum RouteTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    NONE = -1,
}

/**
 * **Contexts**: UI
 */
declare enum HeroDiscoverySources
{
    /**
    * **Contexts**: UI
    */
    DISCOVERY_SOURCE_GOODY_HUT = 2,
    /**
    * **Contexts**: UI
    */
    NO_DISCOVERY_SOURCE = 0,
    /**
    * **Contexts**: UI
    */
    DISCOVERY_SOURCE_NEW_CONTINENT = 5,
    /**
    * **Contexts**: UI
    */
    DISCOVERY_SOURCE_CITY_STATE_INFLUENCE = 3,
    /**
    * **Contexts**: UI
    */
    DISCOVERY_SOURCE_ENCOUNTER = 7,
    /**
    * **Contexts**: UI
    */
    DISCOVERY_SOURCE_CITY_STATE_SUZERAIN = 4,
    /**
    * **Contexts**: UI
    */
    DISCOVERY_SOURCE_PROJECT = 1,
    /**
    * **Contexts**: UI
    */
    DISCOVERY_SOURCE_NATURAL_WONDER = 6,
}

/**
 * **Contexts**: UI
 */
declare enum TutorialLevel
{
    /**
    * **Contexts**: UI
    */
    LEVEL_NEW_TO_XP2 = 3,
    /**
    * **Contexts**: UI
    */
    LEVEL_CIV_FAMILIAR = 1,
    /**
    * **Contexts**: UI
    */
    LEVEL_TBS_FAMILIAR = 0,
    /**
    * **Contexts**: UI
    */
    NO_TUTORIAL = -1,
    /**
    * **Contexts**: UI
    */
    LEVEL_NEW_TO_XP1 = 2,
    /**
    * **Contexts**: UI
    */
    LEVEL_EXPERIENCED_PLAYER = 4,
}

/**
 * **Contexts**: UI
 */
declare enum GameStateTypes
{
    /**
    * **Contexts**: UI
    */
    GAMESTATE_PREGAME = -901772834,
    /**
    * **Contexts**: UI
    */
    GAMESTATE_LAUNCHED = -818482450,
    /**
    * **Contexts**: UI
    */
    GAMESTATE_LOAD_PREGAME = -2091470447,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum CityOperationResults
{
    /**
    * **Contexts**: Gameplay, UI
    */
    NONE = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    SUCCESS_CONDITIONS = 1706630660,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNITS = 354783260,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITIES = 734809777,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLOTS = 1933683541,
    /**
    * **Contexts**: Gameplay, UI
    */
    CAN_TRAIN_CORPS = 911365466,
    /**
    * **Contexts**: Gameplay, UI
    */
    FAILURE_REASONS = -2028665063,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_SUITABLE_LOCATION = 1123977288,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOUNTAIN_PLOTS = 745888826,
    /**
    * **Contexts**: Gameplay, UI
    */
    BLOCKED_PLOTS = -1234301467,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITIZENS = -520936852,
    /**
    * **Contexts**: Gameplay, UI
    */
    MODIFIERS = 628984671,
    /**
    * **Contexts**: Gameplay, UI
    */
    MAX_CITIZENS = 562450335,
    /**
    * **Contexts**: Gameplay, UI
    */
    LOCKED_CITIZENS = 507961694,
    /**
    * **Contexts**: Gameplay, UI
    */
    CAN_TRAIN_ARMY = 1533993579,
    /**
    * **Contexts**: Gameplay, UI
    */
    PURCHASABLE_PLOTS = -38888674,
}

/**
 * **Contexts**: UI
 */
declare enum CombatTypes
{
    /**
    * **Contexts**: UI
    */
    AIR = 1184946373,
    /**
    * **Contexts**: UI
    */
    BOMBARD = 1338578493,
    /**
    * **Contexts**: UI
    */
    MELEE = 748940753,
    /**
    * **Contexts**: UI
    */
    ICBM = 1640240290,
    /**
    * **Contexts**: UI
    */
    RANGED = 784649805,
    /**
    * **Contexts**: UI
    */
    RELIGIOUS = 1580168296,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum ARXDeviceTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    ANDROID_XLARGE = 6,
    /**
    * **Contexts**: Gameplay, UI
    */
    IPAD = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNKNOWN = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    ANDROID_LARGE = 5,
    /**
    * **Contexts**: Gameplay, UI
    */
    ANDROID_UNKNOWN = 7,
    /**
    * **Contexts**: Gameplay, UI
    */
    ANDROID_SMALL = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    IPHONE = 1,
}

/**
 * **Contexts**: UI
 */
declare enum TurnLimitTypes
{
    /**
    * **Contexts**: UI
    */
    NONE = -2137446946,
    /**
    * **Contexts**: UI
    */
    CUSTOM = 40503376,
    /**
    * **Contexts**: UI
    */
    GAMESPEED = -554045265,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum SaveDirectories
{
    /**
    * **Contexts**: Gameplay, UI
    */
    AUTOMATION = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    DEMO = 5,
    /**
    * **Contexts**: Gameplay, UI
    */
    TUTORIAL = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    DEFAULT = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    BENCHMARK = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    USER = 1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DiplomacyRelationshipTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    FRIENDSHIP = -2041297249,
    /**
    * **Contexts**: Gameplay, UI
    */
    ALLIED = 1158438366,
    /**
    * **Contexts**: Gameplay, UI
    */
    DENOUNCED = 345285035,
}

/**
 * **Contexts**: UI
 */
declare enum PlotHighlightTypes
{
    /**
    * **Contexts**: UI
    */
    PLACEMENT = -928433870,
    /**
    * **Contexts**: UI
    */
    MOVEMENT = -325315996,
    /**
    * **Contexts**: UI
    */
    ATTACK = 1541530529,
}

/**
 * **Contexts**: UI
 */
declare enum GameModeTypes
{
    /**
    * **Contexts**: UI
    */
    HOTSEAT = 208129763,
    /**
    * **Contexts**: UI
    */
    SINGLEPLAYER = -379035929,
    /**
    * **Contexts**: UI
    */
    PLAYBYCLOUD = 285185446,
    /**
    * **Contexts**: UI
    */
    LAN = 20463770,
    /**
    * **Contexts**: UI
    */
    INTERNET = 1161765858,
    /**
    * **Contexts**: UI
    */
    CROSSPLAY = -413661464,
}

/**
 * **Contexts**: UI
 */
declare enum TransportType
{
    /**
    * **Contexts**: UI
    */
    TRANSPORT_STEAM = 2,
    /**
    * **Contexts**: UI
    */
    TRANSPORT_RAIL = 3,
    /**
    * **Contexts**: UI
    */
    TRANSPORT_ENET = 1,
    /**
    * **Contexts**: UI
    */
    TRANSPORT_EOS = 4,
    /**
    * **Contexts**: UI
    */
    TRANSPORT_NONE = 0,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum ActivityTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    ACTIVITY_SLEEP = 38434027,
    /**
    * **Contexts**: Gameplay, UI
    */
    ACTIVITY_HEAL = -1298237662,
    /**
    * **Contexts**: Gameplay, UI
    */
    ACTIVITY_OPERATION = 1225574625,
    /**
    * **Contexts**: Gameplay, UI
    */
    ACTIVITY_INTERCEPT = 1609677791,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_ACTIVITY = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    ACTIVITY_AWAKE = 1797587246,
    /**
    * **Contexts**: Gameplay, UI
    */
    ACTIVITY_SENTRY = -793848223,
    /**
    * **Contexts**: Gameplay, UI
    */
    ACTIVITY_HOLD = 75236491,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DealItemTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    NONE = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNITS = 1059848129,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITIES = -746262857,
    /**
    * **Contexts**: Gameplay, UI
    */
    AGREEMENTS = -1950382900,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOLD = 99290615,
    /**
    * **Contexts**: Gameplay, UI
    */
    ALL = -990196750,
    /**
    * **Contexts**: Gameplay, UI
    */
    RESOURCES = -1069574269,
    /**
    * **Contexts**: Gameplay, UI
    */
    TECHNOLOGY = 1493145601,
    /**
    * **Contexts**: Gameplay, UI
    */
    GREATWORK = 2069453869,
    /**
    * **Contexts**: Gameplay, UI
    */
    CAPTIVE = -1666338544,
    /**
    * **Contexts**: Gameplay, UI
    */
    FAVOR = -1992090236,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum CivilizationLevelTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    CIVILIZATION_LEVEL_FREE_CITIES = 82227360,
    /**
    * **Contexts**: Gameplay, UI
    */
    CIVILIZATION_LEVEL_TRIBE = -648418268,
    /**
    * **Contexts**: Gameplay, UI
    */
    CIVILIZATION_LEVEL_CITY_STATE = -1034456971,
    /**
    * **Contexts**: Gameplay, UI
    */
    CIVILIZATION_LEVEL_FULL_CIV = 624367792,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_CIVILIZATION_LEVEL = -1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum PromiseTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    DONT_SPY_ON_ME = -1030182756,
    /**
    * **Contexts**: Gameplay, UI
    */
    DONT_SETTLE_NEAR_ME = -86028203,
    /**
    * **Contexts**: Gameplay, UI
    */
    DONT_DIG_UP_MY_ARTIFACTS = 323465375,
    /**
    * **Contexts**: Gameplay, UI
    */
    DONT_CONVERT_MY_CITIES = -279009087,
    /**
    * **Contexts**: Gameplay, UI
    */
    KEEP_TROOPS_AWAY_FROM_ME = 1176542209,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum CombatResultParameters
{
    /**
    * **Contexts**: Gameplay, UI
    */
    PREVIEW_TEXT_ANTI_AIR = 1094127062,
    /**
    * **Contexts**: Gameplay, UI
    */
    ALT_SOURCE_LOCATION = -77002069,
    /**
    * **Contexts**: Gameplay, UI
    */
    PREVIEW_TEXT_DEFENSES = -1400168025,
    /**
    * **Contexts**: Gameplay, UI
    */
    ATTACKER = 1431908133,
    /**
    * **Contexts**: Gameplay, UI
    */
    WMD_STATUS = 705738904,
    /**
    * **Contexts**: Gameplay, UI
    */
    PREVIEW_TEXT_RESOURCES = 1178738243,
    /**
    * **Contexts**: Gameplay, UI
    */
    COMBAT_STRENGTH = -1306278355,
    /**
    * **Contexts**: Gameplay, UI
    */
    PREVIEW_TEXT_ASSIST = -1335567287,
    /**
    * **Contexts**: Gameplay, UI
    */
    DEFENDER_CAPTURED = 954462304,
    /**
    * **Contexts**: Gameplay, UI
    */
    LOCATION = -1779249298,
    /**
    * **Contexts**: Gameplay, UI
    */
    ANTI_AIR = 493520281,
    /**
    * **Contexts**: Gameplay, UI
    */
    PREVIEW_TEXT_PROMOTION = 1748600892,
    /**
    * **Contexts**: Gameplay, UI
    */
    DEFENDER_RETALIATES = 598597112,
    /**
    * **Contexts**: Gameplay, UI
    */
    PREVIEW_TEXT_INTERCEPTOR = -1280547148,
    /**
    * **Contexts**: Gameplay, UI
    */
    WMD_TYPE = -1480090105,
    /**
    * **Contexts**: Gameplay, UI
    */
    WMD_STRIKE_RANGE = 469286896,
    /**
    * **Contexts**: Gameplay, UI
    */
    FINAL_DEFENSE_DAMAGE_TO = 126272016,
    /**
    * **Contexts**: Gameplay, UI
    */
    MAX_HIT_POINTS = -746205821,
    /**
    * **Contexts**: Gameplay, UI
    */
    COMBAT_TYPE = -2102924904,
    /**
    * **Contexts**: Gameplay, UI
    */
    FINAL_DAMAGE_TO = -958805242,
    /**
    * **Contexts**: Gameplay, UI
    */
    PREVIEW_TEXT_HEALTH = -548374316,
    /**
    * **Contexts**: Gameplay, UI
    */
    PREVIEW_TEXT_TERRAIN = 604717500,
    /**
    * **Contexts**: Gameplay, UI
    */
    EXPERIENCE_CHANGE = -1351684353,
    /**
    * **Contexts**: Gameplay, UI
    */
    PREVIEW_TEXT_OPPONENT = 1040442389,
    /**
    * **Contexts**: Gameplay, UI
    */
    ATTACKER_ADVANCED_DURING_VISUALIZATION = -5828522,
    /**
    * **Contexts**: Gameplay, UI
    */
    DAMAGE_FROM = -1522214634,
    /**
    * **Contexts**: Gameplay, UI
    */
    DAMAGE_MEMBERS = 187265508,
    /**
    * **Contexts**: Gameplay, UI
    */
    DEFENSE_DAMAGE_TO = 1838009406,
    /**
    * **Contexts**: Gameplay, UI
    */
    ID = 1472654640,
    /**
    * **Contexts**: Gameplay, UI
    */
    COMBAT_SUB_TYPE = 236175385,
    /**
    * **Contexts**: Gameplay, UI
    */
    MAX_DEFENSE_HIT_POINTS = -1263136305,
    /**
    * **Contexts**: Gameplay, UI
    */
    DAMAGE_TO = 1930175143,
    /**
    * **Contexts**: Gameplay, UI
    */
    ATTACKER_ADVANCES = 865706498,
    /**
    * **Contexts**: Gameplay, UI
    */
    INTERCEPTOR = 787125023,
    /**
    * **Contexts**: Gameplay, UI
    */
    ERA = 853003252,
    /**
    * **Contexts**: Gameplay, UI
    */
    DAMAGE_MEMBER_COUNT = 433239030,
    /**
    * **Contexts**: Gameplay, UI
    */
    LOCATION_PILLAGED = -278393875,
    /**
    * **Contexts**: Gameplay, UI
    */
    PREVIEW_TEXT_MODIFIER = 1015944983,
    /**
    * **Contexts**: Gameplay, UI
    */
    VISUALIZE = 432821635,
    /**
    * **Contexts**: Gameplay, UI
    */
    DEFENDER = -1632097141,
    /**
    * **Contexts**: Gameplay, UI
    */
    STRENGTH_MODIFIER = 1116922831,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum EraTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    NONE = -1,
}

/**
 * **Contexts**: UI
 */
declare enum ServerType
{
    /**
    * **Contexts**: UI
    */
    SERVER_TYPE_FIRAXIS_CLOUD = 6,
    /**
    * **Contexts**: UI
    */
    SERVER_TYPE_STEAM_DEDICATED = 4,
    /**
    * **Contexts**: UI
    */
    SERVER_TYPE_STEAM = 3,
    /**
    * **Contexts**: UI
    */
    SERVER_TYPE_CROSSPLAY = 7,
    /**
    * **Contexts**: UI
    */
    SERVER_TYPE_LAN = 1,
    /**
    * **Contexts**: UI
    */
    SERVER_TYPE_INTERNET = 2,
    /**
    * **Contexts**: UI
    */
    SERVER_TYPE_HOTSEAT = 5,
    /**
    * **Contexts**: UI
    */
    SERVER_TYPE_NONE = 0,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum ComponentType
{
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICT = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNIT = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITY = 2,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum UnitCommandResults
{
    /**
    * **Contexts**: Gameplay, UI
    */
    PROMOTIONS = 827475943,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNITS = 354783260,
    /**
    * **Contexts**: Gameplay, UI
    */
    FAILURE_REASONS = -2028665063,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNIT_TYPE = 1007545435,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLOTS = 1933683541,
}

/**
 * **Contexts**: UI
 */
declare enum LobbyTypes
{
    /**
    * **Contexts**: UI
    */
    LOBBY_FIRAXIS_CLOUD = 4,
    /**
    * **Contexts**: UI
    */
    LOBBY_SERVER = 3,
    /**
    * **Contexts**: UI
    */
    LOBBY_INTERNET = 2,
    /**
    * **Contexts**: UI
    */
    LOBBY_LAN = 1,
    /**
    * **Contexts**: UI
    */
    LOBBY_NONE = 0,
    /**
    * **Contexts**: UI
    */
    LOBBY_CROSSPLAY = 5,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum WarTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    HOLY_WAR = 166064814,
    /**
    * **Contexts**: Gameplay, UI
    */
    PROTECTORATE_WAR = 290135188,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_WAR = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    COLONIAL_WAR = 567508968,
    /**
    * **Contexts**: Gameplay, UI
    */
    TERRITORIAL_WAR = 1167699519,
    /**
    * **Contexts**: Gameplay, UI
    */
    FORMAL_WAR = 1941490022,
    /**
    * **Contexts**: Gameplay, UI
    */
    LIBERATION_WAR = -566258,
    /**
    * **Contexts**: Gameplay, UI
    */
    WAR_OF_RETRIBUTION = 954940652,
    /**
    * **Contexts**: Gameplay, UI
    */
    SURPRISE_WAR = 1133958949,
    /**
    * **Contexts**: Gameplay, UI
    */
    RECONQUEST_WAR = 1970445516,
    /**
    * **Contexts**: Gameplay, UI
    */
    DEFENSIVE_PACT = -82274681,
    /**
    * **Contexts**: Gameplay, UI
    */
    JOINT_WAR = 490727785,
    /**
    * **Contexts**: Gameplay, UI
    */
    SUZERAIN_WAR = 1348783716,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOLDEN_AGE_WAR = -682098451,
    /**
    * **Contexts**: Gameplay, UI
    */
    IDEOLOGICAL_WAR = -1420171028,
}

/**
 * **Contexts**: UI
 */
declare enum NetPlayerTypes
{
    /**
    * **Contexts**: UI
    */
    INVALID_PLAYERID = -1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum MapLayers
{
    /**
    * **Contexts**: Gameplay, UI
    */
    TRADE = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    PRIMARY = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    RELIGIOUS = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    ANY = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY = 2,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum SlotStatus
{
    /**
    * **Contexts**: Gameplay, UI
    */
    SS_OBSERVER = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    SS_TAKEN = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    SS_OPEN = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    SS_CLOSED = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    SS_COMPUTER = 1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum TradeItemDesirability
{
    /**
    * **Contexts**: Gameplay, UI
    */
    POOR = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISFAVORED = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    DESIRED = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    FORBIDDEN = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    NEUTRAL = 1,
}

/**
 * **Contexts**: Gameplay, UI
 * 
 * Additional unit commands can be found in GameInfo.UnitCommands.
 */
declare enum UnitCommandTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    NAME_UNIT = -1389442348,
    /**
    * **Contexts**: Gameplay, UI
    */
    TYPE = -1572680103,
    /**
    * **Contexts**: Gameplay, UI
    */
    CONDEMN_HERETIC = -597630620,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISPERSE_CLAN = 636192518,
    /**
    * **Contexts**: Gameplay, UI
    */
    STOP_AUTOMATION = -1667350332,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENTER_FORMATION = -913294208,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_NAME = -645889547,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT_ID = 1133126720,
    /**
    * **Contexts**: Gameplay, UI
    */
    RESOURCE_INSPIRE = 1587775839,
    /**
    * **Contexts**: Gameplay, UI
    */
    PROMOTE = -1259482049,
    /**
    * **Contexts**: Gameplay, UI
    */
    FORM_CORPS = 487801373,
    /**
    * **Contexts**: Gameplay, UI
    */
    AIRLIFT = 709929432,
    /**
    * **Contexts**: Gameplay, UI
    */
    EXECUTE_SCRIPT = 1299566337,
    /**
    * **Contexts**: Gameplay, UI
    */
    EXIT_FORMATION = -50443187,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_X = 1400339205,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARADROP = -665520077,
    /**
    * **Contexts**: Gameplay, UI
    */
    WONDER_PRODUCTION = 1718431111,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICT_PRODUCTION = -1192882305,
    /**
    * **Contexts**: Gameplay, UI
    */
    CANCEL = 533311341,
    /**
    * **Contexts**: Gameplay, UI
    */
    TRANSFORM_UNIT = -1536230479,
    /**
    * **Contexts**: Gameplay, UI
    */
    WAKE = 200562917,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLUNDER_TRADE_ROUTE = 1588023784,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_Y = 1248610884,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_PROMOTION_TYPE = -927495623,
    /**
    * **Contexts**: Gameplay, UI
    */
    NAVAL_GOLD_RAID = -1684503434,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOVE_JUMP = -1611127214,
    /**
    * **Contexts**: Gameplay, UI
    */
    KILL_WEAKER_UNIT = 433514076,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY_PLAYER = 1072684823,
    /**
    * **Contexts**: Gameplay, UI
    */
    FORM_ARMY = -1373423663,
    /**
    * **Contexts**: Gameplay, UI
    */
    RAID_CLAN = -1387473634,
    /**
    * **Contexts**: Gameplay, UI
    */
    AUTOMATE = 893276661,
    /**
    * **Contexts**: Gameplay, UI
    */
    UPGRADE = -750032448,
    /**
    * **Contexts**: Gameplay, UI
    */
    RESTORE_UNIT_MOVES = 1605907890,
    /**
    * **Contexts**: Gameplay, UI
    */
    PROJECT_PRODUCTION = -1276373037,
    /**
    * **Contexts**: Gameplay, UI
    */
    PRIORITY_TARGET = -1811256191,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT_PLAYER = -689016953,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY_ID = 2065823638,
    /**
    * **Contexts**: Gameplay, UI
    */
    GIFT = -1965031299,
    /**
    * **Contexts**: Gameplay, UI
    */
    DELETE = 1942820504,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum CityTransferTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    BY_COMBAT = -1173539618,
    /**
    * **Contexts**: Gameplay, UI
    */
    BY_LIBERATION = 361156668,
    /**
    * **Contexts**: Gameplay, UI
    */
    BY_GIFT = -1821839791,
    /**
    * **Contexts**: Gameplay, UI
    */
    BY_CULTURAL_IDENTITY = -738490196,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DiplomacyResponseTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    NONE = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    ACKNOWLEDGE = -889253693,
    /**
    * **Contexts**: Gameplay, UI
    */
    NEGATIVE = 373588173,
    /**
    * **Contexts**: Gameplay, UI
    */
    INITIAL = 2124225610,
    /**
    * **Contexts**: Gameplay, UI
    */
    POSITIVE = 1932720086,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum TurnNotifyFrequencyModes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    TurnNotify_MyTurn = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    TurnNotify_EveryTurn = 1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum NotificationParameterTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    CanUserDismiss = -1894402815,
}

/**
 * **Contexts**: UI
 */
declare enum PlayByCloudReadyBehaviorType
{
    /**
    * **Contexts**: UI
    */
    PBC_READY_EXIT_LOBBY = 2,
    /**
    * **Contexts**: UI
    */
    PBC_READY_ASK_ME = 0,
    /**
    * **Contexts**: UI
    */
    PBC_READY_DO_NOTHING = 1,
}

/**
 * **Contexts**: UI
 */
declare enum NetworkServicesAccountType
{
    /**
    * **Contexts**: UI
    */
    Anonymous = 1,
    /**
    * **Contexts**: UI
    */
    Platform = 3,
    /**
    * **Contexts**: UI
    */
    Full = 2,
    /**
    * **Contexts**: UI
    */
    Unknown = 0,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum SaveTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    WORLDBUILDER_MAP = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    SINGLE_PLAYER = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    HOTSEAT = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    NETWORK_MULTIPLAYER = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    TILED_MAP = 5,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum CursorTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    WAIT = 547071007,
    /**
    * **Contexts**: Gameplay, UI
    */
    NORMAL = -2047893672,
    /**
    * **Contexts**: Gameplay, UI
    */
    RANGE_ATTACK = -46722710,
}

/**
 * **Contexts**: UI
 */
declare enum SystemUpdateUI
{
    /**
    * **Contexts**: UI
    */
    UnloadUI = 3,
    /**
    * **Contexts**: UI
    */
    PostReloadUI = 2,
    /**
    * **Contexts**: UI
    */
    ReprocessAnchoring = 6,
    /**
    * **Contexts**: UI
    */
    TouchInputChanged = 9,
    /**
    * **Contexts**: UI
    */
    TouchTipBehaviorChanged = 10,
    /**
    * **Contexts**: UI
    */
    BulkHideUI = 7,
    /**
    * **Contexts**: UI
    */
    RestoreUI = 5,
    /**
    * **Contexts**: UI
    */
    ReloadUI = 1,
    /**
    * **Contexts**: UI
    */
    BulkShowUI = 8,
    /**
    * **Contexts**: UI
    */
    ScreenResize = 0,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum PopupPriority
{
    /**
    * **Contexts**: Gameplay, UI
    */
    Current = 9999,
    /**
    * **Contexts**: Gameplay, UI
    */
    Tutorial = 2000,
    /**
    * **Contexts**: Gameplay, UI
    */
    High = 1000,
    /**
    * **Contexts**: Gameplay, UI
    */
    InGameTopOptionsMenu = 5005,
    /**
    * **Contexts**: Gameplay, UI
    */
    HotSeatBackground = 5001,
    /**
    * **Contexts**: Gameplay, UI
    */
    Utmost = 5000,
    /**
    * **Contexts**: Gameplay, UI
    */
    WorldCongressPopup = 502,
    /**
    * **Contexts**: Gameplay, UI
    */
    PausePanel = 5002,
    /**
    * **Contexts**: Gameplay, UI
    */
    TutorialHigh = 2500,
    /**
    * **Contexts**: Gameplay, UI
    */
    PlayerChange = 5003,
    /**
    * **Contexts**: Gameplay, UI
    */
    WorldCongressIntro = 501,
    /**
    * **Contexts**: Gameplay, UI
    */
    Achievement = 4000,
    /**
    * **Contexts**: Gameplay, UI
    */
    WorldCongressBetweenTurns = 503,
    /**
    * **Contexts**: Gameplay, UI
    */
    Default = 10000,
    /**
    * **Contexts**: Gameplay, UI
    */
    Civilopedia = 3000,
    /**
    * **Contexts**: Gameplay, UI
    */
    EndGameMenu = 5004,
    /**
    * **Contexts**: Gameplay, UI
    */
    Low = 100,
    /**
    * **Contexts**: Gameplay, UI
    */
    MediumHigh = 700,
    /**
    * **Contexts**: Gameplay, UI
    */
    Medium = 500,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum CityCommandTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_DISTRICT_TYPE = 1605245423,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_PROJECT_TYPE = -1476156085,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_DATA0 = -688065564,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_MANAGE_CITIZEN = 1041406338,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT_ID = 1133126720,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_MODIFIERS = -1749939689,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_DATA3 = 1341497950,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_FLAGS = -967143770,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_YIELD_TYPE = 730511874,
    /**
    * **Contexts**: Gameplay, UI
    */
    SET_FOCUS = -1927260886,
    /**
    * **Contexts**: Gameplay, UI
    */
    RANGE_ATTACK = -1967338303,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_X = 1400339205,
    /**
    * **Contexts**: Gameplay, UI
    */
    NAME_CITY = -678358572,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY1_ID = -1013083917,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_DATA1 = -1577335950,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_Y1 = 1030453970,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT0_PLAYER = -689016953,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_MILITARY_FORMATION_TYPE = 2126768863,
    /**
    * **Contexts**: Gameplay, UI
    */
    WMD_STRIKE = 681683161,
    /**
    * **Contexts**: Gameplay, UI
    */
    SWAP_TILE_OWNER = -1198206025,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_SWAP_TILE_OWNER = -468835356,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_RANGED_ATTACK = -1480043130,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_WMD_TYPE = -1480090105,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY0_ID = 2065823638,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_Y0 = 1248610884,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_PLOT_PURCHASE = -780910418,
    /**
    * **Contexts**: Gameplay, UI
    */
    MANAGE = 729125427,
    /**
    * **Contexts**: Gameplay, UI
    */
    DESTROY = 2071124458,
    /**
    * **Contexts**: Gameplay, UI
    */
    PURCHASE = 1490793096,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY0_PLAYER = 1072684823,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_DATA2 = 955421384,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT1_PLAYER = 440692505,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT0_ID = 1133126720,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT_TYPE = -1899860717,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_Y = 1248610884,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_BUILDING_TYPE = -1254747886,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_X1 = 611339155,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_X0 = 1400339205,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT_PLAYER = -689016953,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_NAME = -645889547,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT1_ID = -80329947,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY1_PLAYER = -213524599,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum ResultFormat
{
    /**
    * **Contexts**: Gameplay, UI
    */
    DETAILED = -1332293475,
    /**
    * **Contexts**: Gameplay, UI
    */
    SUMMARY = 244475782,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DiplomaticTrustTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    INVALID_TRUST = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    TRUSTED = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRUSTED = 5,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNKNOWN_TRUST = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_TRUST = 6,
    /**
    * **Contexts**: Gameplay, UI
    */
    LOW_TRUST = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    BARELY_KNOWN = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    SOME_TRUST = 2,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum EventSubTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    DAMAGE = 516910101,
    /**
    * **Contexts**: Gameplay, UI
    */
    EVANGELIZE_BELIEF = 385235009,
    /**
    * **Contexts**: Gameplay, UI
    */
    COMPLETION = -860432962,
    /**
    * **Contexts**: Gameplay, UI
    */
    REMOVE_HERESY = 288665268,
    /**
    * **Contexts**: Gameplay, UI
    */
    FOUND_RELIGION = -1529151563,
    /**
    * **Contexts**: Gameplay, UI
    */
    FOUND_CITY = -1828126782,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADD = -1807561070,
    /**
    * **Contexts**: Gameplay, UI
    */
    TOURISM_BOMB = 1204466125,
    /**
    * **Contexts**: Gameplay, UI
    */
    REMOVE = 1736910153,
    /**
    * **Contexts**: Gameplay, UI
    */
    PILLAGE = -318354571,
    /**
    * **Contexts**: Gameplay, UI
    */
    ACCEPT_RELIGIOUS_HEAL = -1931863034,
    /**
    * **Contexts**: Gameplay, UI
    */
    CREATE_DISTRICT = -1318797236,
    /**
    * **Contexts**: Gameplay, UI
    */
    CREATE_GREAT_WORK = 306853151,
    /**
    * **Contexts**: Gameplay, UI
    */
    LAUNCH_INQUISITION = 1662217542,
    /**
    * **Contexts**: Gameplay, UI
    */
    GIVE_RELIGIOUS_HEAL = -61448258,
    /**
    * **Contexts**: Gameplay, UI
    */
    REMOVE_FEATURE = -1308035672,
    /**
    * **Contexts**: Gameplay, UI
    */
    VISIBILITY = -1511087680,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPREAD_RELIGION = -806509670,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLANT_FOREST = -289600180,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNIT = 366026264,
    /**
    * **Contexts**: Gameplay, UI
    */
    HARVEST_RESOURCE = 422313589,
    /**
    * **Contexts**: Gameplay, UI
    */
    PROJECT = -284569333,
    /**
    * **Contexts**: Gameplay, UI
    */
    CREATE_WONDER = -1565627832,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICT = 135083828,
    /**
    * **Contexts**: Gameplay, UI
    */
    CREATE_ROUTE = 1531636673,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLOT = 2010226114,
    /**
    * **Contexts**: Gameplay, UI
    */
    BUILDING = -660405657,
    /**
    * **Contexts**: Gameplay, UI
    */
    COMBAT = -2108236831,
    /**
    * **Contexts**: Gameplay, UI
    */
    PILLAGED = 1362298481,
    /**
    * **Contexts**: Gameplay, UI
    */
    CONVERT_BARBARIAN = 1892712414,
    /**
    * **Contexts**: Gameplay, UI
    */
    REPAIR = -2115826600,
    /**
    * **Contexts**: Gameplay, UI
    */
    CREATE_IMPROVEMENT = -414333283,
    /**
    * **Contexts**: Gameplay, UI
    */
    CREATE_TRADE_ROUTE = 1760038764,
    /**
    * **Contexts**: Gameplay, UI
    */
    CLEAR_CONTAMINATION = 1112582991,
    /**
    * **Contexts**: Gameplay, UI
    */
    EXTRACT_ARTIFACT = 1133412002,
}

/**
 * **Contexts**: UI
 */
declare enum NetworkResult
{
    /**
    * **Contexts**: UI
    */
    NETWORKRESULT_SIGNIN = 3,
    /**
    * **Contexts**: UI
    */
    NETWORKRESULT_NO_ROOM = 5,
    /**
    * **Contexts**: UI
    */
    NETWORKRESULT_PENDING = 2,
    /**
    * **Contexts**: UI
    */
    NETWORKRESULT_ERROR = 4,
    /**
    * **Contexts**: UI
    */
    NETWORKRESULT_OK = 1,
    /**
    * **Contexts**: UI
    */
    NETWORKRESULT_NONE = 0,
    /**
    * **Contexts**: UI
    */
    NETWORKRESULT_EXISTING_OPERATION_PENDING = 6,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DefinitionTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    YIELD = -1309771708,
    /**
    * **Contexts**: Gameplay, UI
    */
    SEA_LEVEL = -2022938822,
    /**
    * **Contexts**: Gameplay, UI
    */
    CLIMATE = -95488750,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLAYER = -1759624676,
    /**
    * **Contexts**: Gameplay, UI
    */
    FLAVOR = -1289614291,
    /**
    * **Contexts**: Gameplay, UI
    */
    TERRAIN = 147608148,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLAYER_COLOR = -1270513546,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNIT = 366026264,
    /**
    * **Contexts**: Gameplay, UI
    */
    RESOURCE = -2057463899,
    /**
    * **Contexts**: Gameplay, UI
    */
    ROUTE = 175054134,
    /**
    * **Contexts**: Gameplay, UI
    */
    MAP_SIZE = -1662660792,
    /**
    * **Contexts**: Gameplay, UI
    */
    BUILDING = -660405657,
    /**
    * **Contexts**: Gameplay, UI
    */
    IMPROVEMENT = -767798966,
    /**
    * **Contexts**: Gameplay, UI
    */
    CULTURE = 1980996878,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICT = 135083828,
    /**
    * **Contexts**: Gameplay, UI
    */
    AGENDA = 602599438,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNIT_PROMOTION = -2065483967,
    /**
    * **Contexts**: Gameplay, UI
    */
    HANDICAP = 204544264,
    /**
    * **Contexts**: Gameplay, UI
    */
    TEAM = 227193940,
    /**
    * **Contexts**: Gameplay, UI
    */
    CIVILIZATION = 309302318,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNMENT = 1595183200,
    /**
    * **Contexts**: Gameplay, UI
    */
    POLICY = -8766097,
    /**
    * **Contexts**: Gameplay, UI
    */
    FEATURE = -546474877,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLAYER_TRAIT = 1930941766,
    /**
    * **Contexts**: Gameplay, UI
    */
    TECH = 1339433561,
    /**
    * **Contexts**: Gameplay, UI
    */
    GAME_SPEED = -824614769,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum UnitOperationTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_TURN = -1484526924,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_RESOURCE_TYPE = -153243594,
    /**
    * **Contexts**: Gameplay, UI
    */
    CLEAR_CONTAMINATION = -1786598626,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT_ID = 1133126720,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_FLAGS = -967143770,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_OPERATION_TYPE = 1362976567,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ZOMBIFY = -1939380969,
    /**
    * **Contexts**: Gameplay, UI
    */
    BUILD_HARBOR = -684148266,
    /**
    * **Contexts**: Gameplay, UI
    */
    BUILD_ENCAMPMENT = 1207795161,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_RESOURCE0_TYPE = -153243594,
    /**
    * **Contexts**: Gameplay, UI
    */
    PILLAGE = 1216730916,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY0_PLAYER = 1072684823,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISEMBARK = 843993831,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_LISTENING_POST = -955496600,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_Y0 = 1248610884,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOVE_TO = 1477390184,
    /**
    * **Contexts**: Gameplay, UI
    */
    BUILD_IMPROVEMENT = 492889976,
    /**
    * **Contexts**: Gameplay, UI
    */
    BUILD_IMPROVEMENT_ADJACENT = 945035974,
    /**
    * **Contexts**: Gameplay, UI
    */
    ROUTE_TO = 1092273887,
    /**
    * **Contexts**: Gameplay, UI
    */
    HARVEST_RESOURCE = -201164084,
    /**
    * **Contexts**: Gameplay, UI
    */
    BUILD_HOLY_SITE = -1609725916,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY_ID = 2065823638,
    /**
    * **Contexts**: Gameplay, UI
    */
    UPGRADE = -765466194,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_X0 = 1400339205,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT_PLAYER = -689016953,
    /**
    * **Contexts**: Gameplay, UI
    */
    BUILD_ROUTE = 115772143,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT1_ID = -80329947,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY1_PLAYER = -213524599,
    /**
    * **Contexts**: Gameplay, UI
    */
    TYPE = 1531887484,
    /**
    * **Contexts**: Gameplay, UI
    */
    WAIT_FOR = -877463231,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_DISRUPT_ROCKETRY = -1021949976,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_GREAT_WORK_HEIST = 485545794,
    /**
    * **Contexts**: Gameplay, UI
    */
    BUILD_ENTERTAINMENT_COMPLEX = 1873442920,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_PROMOTION0_TYPE = 486998853,
    /**
    * **Contexts**: Gameplay, UI
    */
    FOUND_CITY = 1463004268,
    /**
    * **Contexts**: Gameplay, UI
    */
    MAKE_TRADE_ROUTE = -2089494188,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_STEAL_TECH_BOOST = -664243095,
    /**
    * **Contexts**: Gameplay, UI
    */
    REBASE = -1054550409,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_DIRECTIVE = 2105759047,
    /**
    * **Contexts**: Gameplay, UI
    */
    FORTIFY = -744032280,
    /**
    * **Contexts**: Gameplay, UI
    */
    COASTAL_RAID = -809912991,
    /**
    * **Contexts**: Gameplay, UI
    */
    RANGE_ATTACK = 164636970,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_X = 1400339205,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_GAIN_SOURCES = -311249027,
    /**
    * **Contexts**: Gameplay, UI
    */
    AIR_ATTACK = 526596894,
    /**
    * **Contexts**: Gameplay, UI
    */
    TELEPORT_TO_CITY = 509098169,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_TRAVEL_NEW_CITY = -1295211657,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_FABRICATE_SCANDAL = -1766334630,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_WMD0_TYPE = -603361542,
    /**
    * **Contexts**: Gameplay, UI
    */
    BUILD_THEATER_DISTRICT = 2145102682,
    /**
    * **Contexts**: Gameplay, UI
    */
    RETRAIN = 1105137311,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOVE_TO_UNIT = 1493464420,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_Y1 = 1030453970,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT0_PLAYER = -689016953,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_NEUTRALIZE_GOVERNOR = -1064658215,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_COUNTERSPY = -2005926703,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_SABOTAGE_PRODUCTION = 163704001,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY0_ID = 2065823638,
    /**
    * **Contexts**: Gameplay, UI
    */
    WMD_STRIKE = -1729320470,
    /**
    * **Contexts**: Gameplay, UI
    */
    EXECUTE_SCRIPT = -1517241786,
    /**
    * **Contexts**: Gameplay, UI
    */
    REMOVE_FEATURE = -771890458,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY1_ID = -1013083917,
    /**
    * **Contexts**: Gameplay, UI
    */
    REMOVE_IMPROVEMENT = -1314704092,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_RECRUIT_PARTISANS = -713713573,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_WMD_TYPE = -603361542,
    /**
    * **Contexts**: Gameplay, UI
    */
    SWAP_UNITS = 2141324753,
    /**
    * **Contexts**: Gameplay, UI
    */
    BUILD_CAMPUS = 1829614479,
    /**
    * **Contexts**: Gameplay, UI
    */
    ALERT = -448283625,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_TARGET_LOCATION = 775855212,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_X1 = 611339155,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_IMPROVEMENT_TYPE = -875860043,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY_PLAYER = 1072684823,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT1_PLAYER = 440692505,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT0_ID = 1133126720,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_IMPROVEMENT0_TYPE = -875860043,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_SIPHON_FUNDS = 574548564,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_MODIFIERS = -1749939689,
    /**
    * **Contexts**: Gameplay, UI
    */
    EMBARK = 287618003,
    /**
    * **Contexts**: Gameplay, UI
    */
    REPAIR = 147469951,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_FOMENT_UNREST = -1512775255,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_SOURCE_LOCATION = 1913945486,
    /**
    * **Contexts**: Gameplay, UI
    */
    DEPLOY = 336935588,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_Y = 1248610884,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum YieldTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    GOLD = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    FOOD = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    CULTURE = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    FAITH = 5,
    /**
    * **Contexts**: Gameplay, UI
    */
    SCIENCE = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    PRODUCTION = 1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum CityCommandResults
{
    /**
    * **Contexts**: Gameplay, UI
    */
    MODIFIER_NONE = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    LOCKED_CITIZENS = 507961694,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLOTS = 1933683541,
    /**
    * **Contexts**: Gameplay, UI
    */
    MODIFIERS = 628984671,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITIZENS = -520936852,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITIES = 734809777,
    /**
    * **Contexts**: Gameplay, UI
    */
    MAX_CITIZENS = 562450335,
    /**
    * **Contexts**: Gameplay, UI
    */
    MODIFIER_IS_TARGET = 889110605,
    /**
    * **Contexts**: Gameplay, UI
    */
    FAILURE_REASONS = -2028665063,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNITS = 354783260,
}

/**
 * **Contexts**: UI
 */
declare enum NetworkCapabilityStates
{
    /**
    * **Contexts**: UI
    */
    Enabled = 1622900199,
    /**
    * **Contexts**: UI
    */
    Unsupported = 1133691932,
    /**
    * **Contexts**: UI
    */
    Disabled = -2106068150,
}

/**
 * **Contexts**: UI
 */
declare enum TooltipBehavior
{
    /**
    * **Contexts**: UI
    */
    ShowAfterDelay = 1,
    /**
    * **Contexts**: UI
    */
    Off = 4,
    /**
    * **Contexts**: UI
    */
    ShowOnHold = 3,
    /**
    * **Contexts**: UI
    */
    ShowOnButton = 2,
    /**
    * **Contexts**: UI
    */
    AlwaysShowing = 0,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum PlayerTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_PLAYER = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    NONE = -1,
    /**
    * **Contexts**: UI
    */
    BARBARIAN = 63,
    /**
    * **Contexts**: Gameplay, UI
    */
    OBSERVER = 1000,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum OptionFileTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    Application = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    Audio = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    Graphics = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    KeyMap = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    User = 5,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum OperationResultsTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    NONE = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_SOURCES = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_TARGETS = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    ALL = 1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum CityProductionDirectives
{
    /**
    * **Contexts**: Gameplay, UI
    */
    ZONE = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    TRAIN = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    PROJECT = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    CONSTRUCT = 1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum IdentityConversionOutcome
{
    /**
    * **Contexts**: Gameplay, UI
    */
    GAINING_LOYALTY = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    LOSING_LOYALTY = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    STABLE = 0,
}

/**
 * **Contexts**: UI
 */
declare enum LeaderRandomPoolTypes
{
    /**
    * **Contexts**: UI
    */
    LEADER_RANDOM_POOL_DEFAULT = 0,
    /**
    * **Contexts**: UI
    */
    LEADER_RANDOM_POOL_1 = -1440298592,
    /**
    * **Contexts**: UI
    */
    LEADER_RANDOM_POOL_2 = 858757146,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DiplomacyMoodTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    HAPPY = -1236877690,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNDEFINED = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENRAGED = -1444735172,
    /**
    * **Contexts**: Gameplay, UI
    */
    ANY = 229329601,
    /**
    * **Contexts**: Gameplay, UI
    */
    NEUTRAL = 1688134677,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNHAPPY = -1447609367,
    /**
    * **Contexts**: Gameplay, UI
    */
    DEFEATED = -594997270,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum PlayerOperationResults
{
    /**
    * **Contexts**: Gameplay, UI
    */
    IMPROVEMENTS = -2060214815,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICT_TYPE = -1997274709,
    /**
    * **Contexts**: Gameplay, UI
    */
    MODIFIER_NONE = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITIES = 734809777,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLOTS = 1933683541,
    /**
    * **Contexts**: Gameplay, UI
    */
    ACTION_NAME = 527363920,
    /**
    * **Contexts**: Gameplay, UI
    */
    FEATURE_TYPE = -1804449599,
    /**
    * **Contexts**: Gameplay, UI
    */
    MODIFIERS = 628984671,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS = -1791529488,
    /**
    * **Contexts**: Gameplay, UI
    */
    MODIFIER_IS_TARGET = 889110605,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADDITIONAL_DESCRIPTION = -1554772595,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNITS = 354783260,
    /**
    * **Contexts**: Gameplay, UI
    */
    FAILURE_REASONS = -2028665063,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNIT_TYPE = 1007545435,
    /**
    * **Contexts**: Gameplay, UI
    */
    IS_BLOCKED = -1892862416,
    /**
    * **Contexts**: Gameplay, UI
    */
    NONE = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    IS_INDIRECT = -1031609416,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum NotificationTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_FLED_CITY = -1197487668,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNOR_RETURNING_TO_SERVICE = -46811749,
    /**
    * **Contexts**: Gameplay, UI
    */
    DEFAULT = -880376630,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITY_FOOD_FOCUS = -1691878119,
    /**
    * **Contexts**: Gameplay, UI
    */
    TRADE_ROUTE_PLUNDERED = 1789835551,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ENEMY_HEIST_GREAT_WORK = -1922291686,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_WORLD_CONGRESS_SPECIAL_SESSION_NON_BLOCKING = 1903778125,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_GRIEVANCES_AGAINST_YOU = -2084352726,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNOR_REMOVED_FROM_CITY = -283710875,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_DISRUPTED_ROCKETRY = -248259720,
    /**
    * **Contexts**: Gameplay, UI
    */
    STORM_ARRIVED = -384985766,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_DROUGHT_ARRIVED = -1427374806,
    /**
    * **Contexts**: Gameplay, UI
    */
    CAN_PURCHASE_WITH_FAITH = 201553861,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITY_BESIEGED_BY_OTHER_PLAYER = 399125807,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_WORLD_CONGRESS_RESULTS = 97016289,
    /**
    * **Contexts**: Gameplay, UI
    */
    USER_DEFINED_2 = 125439418,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_MISSION_FAILED = -75846220,
    /**
    * **Contexts**: Gameplay, UI
    */
    USER_DEFINED_4 = -300308337,
    /**
    * **Contexts**: Gameplay, UI
    */
    HERO_LOW_LIFESPAN = -169001814,
    /**
    * **Contexts**: Gameplay, UI
    */
    CHOOSE_TECH = 1496184008,
    /**
    * **Contexts**: Gameplay, UI
    */
    BARBARIANS_SIGHTED = 709034059,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ENEMY_CAPTURED = -58213127,
    /**
    * **Contexts**: Gameplay, UI
    */
    CAPITAL_LOST = -164725077,
    /**
    * **Contexts**: Gameplay, UI
    */
    OTHER_CULTURE_VICTORY_SOON = 1676341900,
    /**
    * **Contexts**: Gameplay, UI
    */
    SECRETSOCIETY_DISCOVERED = -908923528,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ENEMY_KILLED = 809349345,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNOR_OPPORTUNITY_AVAILABLE = 1723095200,
    /**
    * **Contexts**: Gameplay, UI
    */
    RIVER_FLOOD_MITIGATED = 767289168,
    /**
    * **Contexts**: Gameplay, UI
    */
    CHOOSE_PANTHEON = -1806242486,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ENEMY_ZOMBIES = -15659567,
    /**
    * **Contexts**: Gameplay, UI
    */
    TECH_BOOST = 574602822,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITY_UNPOWERED = -346515419,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLAYER_DEFEATED = -2052266218,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_DROUGHT_CLEARED = 349520969,
    /**
    * **Contexts**: Gameplay, UI
    */
    HERO_EXPIRED_OTHER = -1893347763,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_FABRICATE_SCANDAL = -1194254773,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITY_LOSING_CULTURAL_IDENTITY = -1923338556,
    /**
    * **Contexts**: Gameplay, UI
    */
    RIVER_FLOODS_SEV1 = 1381481647,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_RISING_SEA_LEVEL_FLOODED = 1615664022,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLAYBYCLOUD_UNSEENCOMPLETE = -259414535,
    /**
    * **Contexts**: Gameplay, UI
    */
    CONSIDER_DISLOYAL_CITY = 689696900,
    /**
    * **Contexts**: Gameplay, UI
    */
    WONDER_FAILED = 109724530,
    /**
    * **Contexts**: Gameplay, UI
    */
    SECRETSOCIETY_LEVEL_UP = 67108966,
    /**
    * **Contexts**: Gameplay, UI
    */
    COMMAND_UNITS = -28491459,
    /**
    * **Contexts**: Gameplay, UI
    */
    CONSIDER_RAZE_CITY = -624946373,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNOR_PROMOTION_AVAILABLE = -418132042,
    /**
    * **Contexts**: Gameplay, UI
    */
    EMERGENCY_NEEDS_ATTENTION = 2109978993,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_NUCLEAR_ACCIDENT_SEV2 = -2036021955,
    /**
    * **Contexts**: Gameplay, UI
    */
    CLAIM_GREAT_PERSON = -342032810,
    /**
    * **Contexts**: Gameplay, UI
    */
    HERO_KILLED_OTHER = -859997714,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_CHOOSE_ESCAPE_ROUTE = 601136565,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_PLAYER_WMD_POSITIVE_ADJUSTMENT = 772186193,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ENEMY_SABOTAGED_PRODUCTION = -1248848987,
    /**
    * **Contexts**: Gameplay, UI
    */
    HERO_CLAIM_FAILED = 2029306321,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITY_STARVING = -1169493765,
    /**
    * **Contexts**: Gameplay, UI
    */
    EMERGENCY_DECLARED = -1243853597,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_HEIST_GREAT_WORK = 465376541,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLAYER_INTRODUCED = 985223162,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_CAPTURED = -67379669,
    /**
    * **Contexts**: Gameplay, UI
    */
    CLAN_RANSOM_PAID = -401137730,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_SABOTAGED_PRODUCTION = -2051301392,
    /**
    * **Contexts**: Gameplay, UI
    */
    TECH_DISCOVERED = 1901749633,
    /**
    * **Contexts**: Gameplay, UI
    */
    CLAN_BRIBE_EXPIRED = -465460661,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_BREACH_DAM = 1298004698,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNIT_PROMOTION_AVAILABLE = 732356881,
    /**
    * **Contexts**: Gameplay, UI
    */
    GIVE_INFLUENCE_TOKEN = 1469786321,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ENEMY_NEUTRALIZE_GOVERNOR = -515647130,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_STOLE_TECH_BOOST = 35021920,
    /**
    * **Contexts**: Gameplay, UI
    */
    TRADE_ROUTE_CAPACITY_INCREASED = -857438254,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ENEMY_FOMENT_UNREST = -113553048,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ESCAPED_CAPTURE = 402986100,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_CORPORATION_PRODUCT_CREATED = 1068001620,
    /**
    * **Contexts**: Gameplay, UI
    */
    HERO_CREATED = 2059784408,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_CORPORATION_LOST = 1317704662,
    /**
    * **Contexts**: Gameplay, UI
    */
    FILL_CIVIC_SLOT = 1664197302,
    /**
    * **Contexts**: Gameplay, UI
    */
    QUEST_RECORDED = -1239364502,
    /**
    * **Contexts**: Gameplay, UI
    */
    USER_DEFINED_6 = 1558947,
    /**
    * **Contexts**: Gameplay, UI
    */
    NEW_BARBARIAN_CAMP = -388235146,
    /**
    * **Contexts**: Gameplay, UI
    */
    USER_DEFINED_9 = -1867983822,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ENEMY_STOLE_TECH_BOOST = -1798874777,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_RISING_SEA_LEVEL_SUBMERGED = 72230908,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNOR_FORCED_REMOVAL_FROM_CITY = -2028772209,
    /**
    * **Contexts**: Gameplay, UI
    */
    COMMEMORATION_WITHOUT_CHOICE = 602701567,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_SIPHONED_FUNDS = -1682513203,
    /**
    * **Contexts**: Gameplay, UI
    */
    TREASURY_BANKRUPT = 1843922668,
    /**
    * **Contexts**: Gameplay, UI
    */
    CLAN_HIRED = 269578790,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ENEMY_BREACH_DAM = 1575967311,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_FOMENT_UNREST = -1987361494,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITYSTATE_QUEST_COMPLETED = -1560578217,
    /**
    * **Contexts**: Gameplay, UI
    */
    PRIDE_MOMENT_RECORDED = 203011657,
    /**
    * **Contexts**: Gameplay, UI
    */
    CHOOSE_ARTIFACT_PLAYER = 1746522008,
    /**
    * **Contexts**: Gameplay, UI
    */
    HERO_RECALLED = -1097523223,
    /**
    * **Contexts**: Gameplay, UI
    */
    CIVIC_BOOST = -112421107,
    /**
    * **Contexts**: Gameplay, UI
    */
    EMERGENCY_AVERTED = -1944678916,
    /**
    * **Contexts**: Gameplay, UI
    */
    CHOOSE_CITY_PRODUCTION = 1090224621,
    /**
    * **Contexts**: Gameplay, UI
    */
    WONDER_COMPLETED = 2091697919,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_INDUSTRY_OPPORTUNITY = -1558401646,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_NEUTRALIZE_GOVERNOR = 2133878153,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_KILLED = -1744967622,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_PLAYER_WMD_NEGATIVE_ADJUSTMENT = -1393137217,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLAYER_MET = -1991002055,
    /**
    * **Contexts**: Gameplay, UI
    */
    CHOOSE_RELIGION = -1493314258,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLAYBYCLOUD_YOURTURN = -739677283,
    /**
    * **Contexts**: Gameplay, UI
    */
    DIPLOMACY_SESSION = -429794713,
    /**
    * **Contexts**: Gameplay, UI
    */
    HERO_DISCOVERED = 1841612282,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNOR_CHANGED_CITIES = -1567452494,
    /**
    * **Contexts**: Gameplay, UI
    */
    VOLCANO_ERUPTS_SEV1 = -595289029,
    /**
    * **Contexts**: Gameplay, UI
    */
    VOLCANO_INACTIVE = -746066867,
    /**
    * **Contexts**: Gameplay, UI
    */
    CHOOSE_BELIEF = 661452396,
    /**
    * **Contexts**: Gameplay, UI
    */
    STORM_MOVED = 1693405449,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISCOVER_CONTINENT = 875232742,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_COUNTERSPY_PROMOTED = -578268954,
    /**
    * **Contexts**: Gameplay, UI
    */
    VOLCANO_ERUPTS_SEV2 = 1166921089,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_NUCLEAR_ACCIDENT_SEV0 = 1756013585,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_CITY_SOURCES_GAINED = -1338948719,
    /**
    * **Contexts**: Gameplay, UI
    */
    HERO_CAN_PURCHASE_WITH_FAITH = -687521414,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITY_LOW_AMENITIES = -5436138,
    /**
    * **Contexts**: Gameplay, UI
    */
    CONSIDER_GOVERNMENT_CHANGE = -1228951151,
    /**
    * **Contexts**: Gameplay, UI
    */
    VOLCANO_ACTIVE = -2086317463,
    /**
    * **Contexts**: Gameplay, UI
    */
    MY_CULTURE_VICTORY_SOON = -439873334,
    /**
    * **Contexts**: Gameplay, UI
    */
    USER_DEFINED_1 = -1636606976,
    /**
    * **Contexts**: Gameplay, UI
    */
    CLAN_INCITED = 828908570,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_PLAYER_WMD_DISARMAMENT = -874785157,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNOR_ESTABLISHED_IN_CITY = 881497236,
    /**
    * **Contexts**: Gameplay, UI
    */
    USER_DEFINED_8 = -407903068,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_CHOOSE_DRAGNET_PRIORITY = 1696695202,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_WORLD_CONGRESS_SPECIAL_SESSION_BLOCKING = 895487076,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_WORLD_CONGRESS_SPECIAL_SESSION_CAN_BE_CALLED = -469914873,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_WORLD_CONGRESS_EMERGENCY_CAN_BE_CALLED = 909871109,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_NUCLEAR_ACCIDENT_SEV1 = 531469447,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ENEMY_SIPHONED_FUNDS = 51671653,
    /**
    * **Contexts**: Gameplay, UI
    */
    CLAN_BRIBED = -1907661911,
    /**
    * **Contexts**: Gameplay, UI
    */
    CLAN_DISPERSED = 1094407321,
    /**
    * **Contexts**: Gameplay, UI
    */
    MY_DOMINANT_CULTURE = -132909568,
    /**
    * **Contexts**: Gameplay, UI
    */
    RELIC_CREATED = -1373139718,
    /**
    * **Contexts**: Gameplay, UI
    */
    GOVERNOR_APPOINTMENT_AVAILABLE = 2007978647,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_PRODUCT_OPPORTUNITY = -14927176,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_CORPORATION_OPPORTUNITY = -1625201930,
    /**
    * **Contexts**: Gameplay, UI
    */
    CLAN_CONVERTED_TO_CITY_STATE = -1381450689,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_RECRUIT_PARTISANS = -82618038,
    /**
    * **Contexts**: Gameplay, UI
    */
    CHOOSE_CIVIC = -506211412,
    /**
    * **Contexts**: Gameplay, UI
    */
    STORM_DISSIPATED = 775986608,
    /**
    * **Contexts**: Gameplay, UI
    */
    USER_DEFINED_7 = 1997601077,
    /**
    * **Contexts**: Gameplay, UI
    */
    VOLCANO_ERUPTS_SEV0 = -1417433939,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_LISTENING_POST = -1282291114,
    /**
    * **Contexts**: Gameplay, UI
    */
    USER_DEFINED_5 = -1726048231,
    /**
    * **Contexts**: Gameplay, UI
    */
    SECRETSOCIETY_LEADER_JOINED = -1852938614,
    /**
    * **Contexts**: Gameplay, UI
    */
    EMERGENCY_SUCCEEDED = 769447121,
    /**
    * **Contexts**: Gameplay, UI
    */
    ROADS_UPGRADED = 1549830951,
    /**
    * **Contexts**: Gameplay, UI
    */
    USER_DEFINED_3 = 1887255852,
    /**
    * **Contexts**: Gameplay, UI
    */
    CIVIC_DISCOVERED = -1221056848,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ENEMY_FABRICATE_SCANDAL = 639851221,
    /**
    * **Contexts**: Gameplay, UI
    */
    RIVER_FLOODS_SEV0 = 626035769,
    /**
    * **Contexts**: Gameplay, UI
    */
    OTHER_DOMINANT_CULTURE = 347457293,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ENEMY_DISRUPTED_ROCKETRY = -434464897,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_MISSION_ABORTED = -989009509,
    /**
    * **Contexts**: Gameplay, UI
    */
    HOUSING_PREVENTING_GROWTH = -1627667945,
    /**
    * **Contexts**: Gameplay, UI
    */
    SECRETSOCIETY_JOINED = 1591419214,
    /**
    * **Contexts**: Gameplay, UI
    */
    RIVER_FLOODS_SEV2 = -882971371,
    /**
    * **Contexts**: Gameplay, UI
    */
    COMMEMORATION_AVAILABLE = 1077649747,
    /**
    * **Contexts**: Gameplay, UI
    */
    REBELLION = -196144120,
    /**
    * **Contexts**: Gameplay, UI
    */
    EMERGENCY_FAILED = 1921275508,
    /**
    * **Contexts**: Gameplay, UI
    */
    HERO_EXPIRED = -776500693,
    /**
    * **Contexts**: Gameplay, UI
    */
    HERO_KILLED = 99064686,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ZOMBIES = -289945899,
    /**
    * **Contexts**: Gameplay, UI
    */
    NOTIFICATION_WORLD_CONGRESS_BLOCKING = 996310584,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITY_RANGE_ATTACK = -1181197223,
    /**
    * **Contexts**: Gameplay, UI
    */
    FOREIGN_CITY_BECAME_FREE_CITY = 17320653,
    /**
    * **Contexts**: Gameplay, UI
    */
    SPY_ENEMY_RECRUIT_PARTISANS = 1709252052,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DealItemSubTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    NONE = 0,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum UnitOperationResults
{
    /**
    * **Contexts**: Gameplay, UI
    */
    IMPROVEMENTS = -2060214815,
    /**
    * **Contexts**: Gameplay, UI
    */
    MODIFIER_NONE = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITIES = 734809777,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLOTS = 1933683541,
    /**
    * **Contexts**: Gameplay, UI
    */
    ROUTE_TYPE = 991104635,
    /**
    * **Contexts**: Gameplay, UI
    */
    BEST_IMPROVEMENT = -1415843204,
    /**
    * **Contexts**: Gameplay, UI
    */
    FEATURE_TYPE = -1804449599,
    /**
    * **Contexts**: Gameplay, UI
    */
    PROMOTIONS = 827475943,
    /**
    * **Contexts**: Gameplay, UI
    */
    MODIFIER_IS_TARGET = 889110605,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADDITIONAL_DESCRIPTION = -1554772595,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNITS = 354783260,
    /**
    * **Contexts**: Gameplay, UI
    */
    FAILURE_REASONS = -2028665063,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNIT_TYPE = 1007545435,
    /**
    * **Contexts**: Gameplay, UI
    */
    IS_BLOCKED = -1892862416,
    /**
    * **Contexts**: Gameplay, UI
    */
    MODIFIERS = 628984671,
    /**
    * **Contexts**: Gameplay, UI
    */
    ACTION_NAME = 527363920,
    /**
    * **Contexts**: Gameplay, UI
    */
    NONE = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    IS_INDIRECT = -1031609416,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum WorldBuilderModes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    PLACE_CONTINENTS = 1637936366,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLACE_START_POSITIONS = 666813934,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLACE_CLIFFS = -1811862083,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLACE_CITIES = -555533967,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLACE_TERRAIN = -595600634,
    /**
    * **Contexts**: Gameplay, UI
    */
    SET_VISIBILITY = -1205062626,
    /**
    * **Contexts**: Gameplay, UI
    */
    INVALID = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLACE_UNITS = 899024715,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLACE_RIVERS = -1325834954,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLACE_WONDERS = 1364696994,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLACE_FEATURES = 62733553,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLACE_DISTRICTS = -818468563,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLACE_IMPROVEMENTS = -1804095015,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLACE_ROUTES = 896223913,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLACE_BUILDINGS = 1032161110,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLACE_TERRAIN_OWNER = -1669482440,
    /**
    * **Contexts**: Gameplay, UI
    */
    PLACE_RESOURCES = 1219680863,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum MilitaryFormationTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    CORPS_FORMATION = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    ARMY_FORMATION = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    STANDARD_FORMATION = 0,
    /**
    * **Contexts**: UI
    */
    STANDARD_MILITARY_FORMATION = 0,
    /**
    * **Contexts**: UI
    */
    CORPS_MILITARY_FORMATION = 1,
    /**
    * **Contexts**: UI
    */
    ARMY_MILITARY_FORMATION = 2,
    /**
    * **Contexts**: UI
    */
    NO_MILITARY_FORMATION = -1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum CityOperationTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_QUEUE_SOURCE_LOCATION = -698843635,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_DISTRICT_TYPE = 1605245423,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_PROJECT_TYPE = -1476156085,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_BUILDING_TYPE = -1254747886,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT_ID = 1133126720,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_MODIFIERS = -1749939689,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_FLAGS = -967143770,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_X = 1400339205,
    /**
    * **Contexts**: Gameplay, UI
    */
    VALUE_POP_BACK = 1406784077,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_QUEUE_LOCATION = 784264915,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_Y0 = 1248610884,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_Y1 = 1030453970,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY0_ID = 2065823638,
    /**
    * **Contexts**: Gameplay, UI
    */
    VALUE_CLEAR = 1866931212,
    /**
    * **Contexts**: Gameplay, UI
    */
    MILITARY_FORMATION_TYPE = 2126768863,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_PRODUCTION_TYPE = 87749806,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT_PLAYER = -689016953,
    /**
    * **Contexts**: Gameplay, UI
    */
    VALUE_REPLACE_AT = -1382837362,
    /**
    * **Contexts**: Gameplay, UI
    */
    VALUE_INSERT_AT = -744473481,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_INSERT_MODE = -1406149623,
    /**
    * **Contexts**: Gameplay, UI
    */
    VALUE_POP_FRONT = -1485233534,
    /**
    * **Contexts**: Gameplay, UI
    */
    VALUE_REMOVE_AT = 721464898,
    /**
    * **Contexts**: Gameplay, UI
    */
    BUILD = 739199558,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_X1 = 611339155,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT_TYPE = -1899860717,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT0_PLAYER = -689016953,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY0_PLAYER = 1072684823,
    /**
    * **Contexts**: Gameplay, UI
    */
    VALUE_APPEND = 369690394,
    /**
    * **Contexts**: Gameplay, UI
    */
    VALUE_PREPEND = 970587057,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT1_PLAYER = 440692505,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT0_ID = 1133126720,
    /**
    * **Contexts**: Gameplay, UI
    */
    VALUE_SWAP = -1176693892,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_Y = 1248610884,
    /**
    * **Contexts**: Gameplay, UI
    */
    VALUE_EXCLUSIVE = -1744919098,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY1_ID = -1013083917,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_X0 = 1400339205,
    /**
    * **Contexts**: Gameplay, UI
    */
    VALUE_MOVE_TO = -162440976,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_QUEUE_DESTINATION_LOCATION = -1606574950,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT1_ID = -80329947,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY1_PLAYER = -213524599,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum VisibilityLayerTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    ROUTES = -1465452196,
    /**
    * **Contexts**: Gameplay, UI
    */
    RESOURCES = -780130161,
    /**
    * **Contexts**: Gameplay, UI
    */
    TERRAIN = 288690214,
    /**
    * **Contexts**: Gameplay, UI
    */
    IMPROVEMENTS = -140290353,
    /**
    * **Contexts**: Gameplay, UI
    */
    STEALTH = -1225486805,
    /**
    * **Contexts**: Gameplay, UI
    */
    STEALTH0 = -1225486805,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DomainTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    DOMAIN_LAND = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_DOMAIN = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    DOMAIN_HOVER = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    DOMAIN_SEA = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    NUM_DOMAIN_TYPES = 5,
    /**
    * **Contexts**: Gameplay, UI
    */
    DOMAIN_AIR = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    DOMAIN_IMMOBILE = 3,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DiplomaticVisibilityTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    NONE = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    SECRET = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    LIMITED = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    FULL = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    TOP_SECRET = 4,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum PlayerComponentTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    UNDEFINED = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICT = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    FORMATION = 44,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNIT = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITY = 2,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum MomentDataTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_GOVERNOR = 369216204,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_IMPROVEMENT = 1386954814,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_CONTINENT = -1018874305,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_PROJECT = 1661328761,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_RESOLUTION = -70954273,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_RANDOM_EVENT = 891829712,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_TARGET_PLAYER = -1493285436,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_EMERGENCY = -1990251682,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_GREAT_PERSON_INDIVIDUAL = -422107292,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_BELIEF = -610957,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_WAR = -385679944,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_RELIGION = -1759605930,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_UNIT = -1590237054,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_DISTRICT = -1232458968,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_TARGET_PLAYER_ERA = 1453187739,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_NAMED_VOLCANO = 77207505,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_GREAT_WORK = 604219298,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_PLAYER_ERA = 1306798379,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_CIVIC = 1990399492,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_OLD_RELIGION = -996596052,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_MOMENT_DATA = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_GOVERNMENT = -1386074123,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_BUILDING = 1713643131,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_NAMED_RIVER = 637571079,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_HERO_CLASS = 1942900283,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_TECHNOLOGY = -227209448,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_FEATURE = 1398896881,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_RESOURCE = 1004178361,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOMENT_DATA_CITY_STATE_PLAYER = -727859313,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum PlayerOperations
{
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_WORLD_CONGRESS_VOTES = 1255862968,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_GREAT_PERSON_INDIVIDUAL_TYPE = 945800002,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_RESOURCE_TYPE = 473089788,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_OTHER_PLAYER = -1171297121,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY_ONE = 1006900706,
    /**
    * **Contexts**: Gameplay, UI
    */
    GIVE_INFLUENCE_TOKEN = -1712583730,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_FLAGS = -967143770,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_TEAM_TWO = 537389401,
    /**
    * **Contexts**: Gameplay, UI
    */
    EXECUTE_SCRIPT = -966415096,
    /**
    * **Contexts**: Gameplay, UI
    */
    REJECT_EMERGENCY = -713122122,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_GREAT_WORK_INDEX = -596760912,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_GOVERNOR_PROMOTION_TYPE = 1833686250,
    /**
    * **Contexts**: Gameplay, UI
    */
    PATRONIZE_GREAT_PERSON = -337724938,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_RELIGION_CUSTOM_NAME = 182311263,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_RESOLUTION_TYPE = 250045277,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_MOMENT_ID = -591453241,
    /**
    * **Contexts**: Gameplay, UI
    */
    WORLD_CONGRESS_DISCUSSION_VOTE = 1164749129,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNLOCK_POLICIES = -1118702092,
    /**
    * **Contexts**: Gameplay, UI
    */
    RANSOM_CLAN = 1003142980,
    /**
    * **Contexts**: Gameplay, UI
    */
    PROMOTE_GOVERNOR = 2101193117,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_RELIGION_TYPE = 581065611,
    /**
    * **Contexts**: Gameplay, UI
    */
    CHOOSE_ARTIFACT_PLAYER = 119832067,
    /**
    * **Contexts**: Gameplay, UI
    */
    APPOINT_GOVERNOR = -1501144661,
    /**
    * **Contexts**: Gameplay, UI
    */
    VALUE_APPEND = 369690394,
    /**
    * **Contexts**: Gameplay, UI
    */
    VALUE_PREPEND = 970587057,
    /**
    * **Contexts**: Gameplay, UI
    */
    RETURN_LEVIED_MILITARY = 1638852573,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_PLOT_ONE = 227097188,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_PLOT_TWO = 1714370291,
    /**
    * **Contexts**: Gameplay, UI
    */
    VALUE_EXCLUSIVE = -1744919098,
    /**
    * **Contexts**: Gameplay, UI
    */
    INCITE_CLAN = -760731733,
    /**
    * **Contexts**: Gameplay, UI
    */
    START_OBSERVER_MODE = -626756011,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_RESOLUTION_OPTION = -548217765,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CIVIC_TYPE = -1508932876,
    /**
    * **Contexts**: Gameplay, UI
    */
    WORLD_CONGRESS_RESOLUTION_BID = 1333986929,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_DISTRICT_TYPE = 1605245423,
    /**
    * **Contexts**: Gameplay, UI
    */
    RESEARCH = 1848062833,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_BUILDING_TYPE = -1254747886,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_MODIFIERS = -1749939689,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_DISCUSSION_TYPE = -79424628,
    /**
    * **Contexts**: Gameplay, UI
    */
    FOUND_RELIGION = -1529151563,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_YIELD_TYPE = 730511874,
    /**
    * **Contexts**: Gameplay, UI
    */
    NAME_CORPORATION = 337117574,
    /**
    * **Contexts**: Gameplay, UI
    */
    COMPLIMENT_PRIDE_MOMENT = -1614721158,
    /**
    * **Contexts**: Gameplay, UI
    */
    PROGRESS_CIVIC = -1616526040,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CORPORATION_CUSTOM_NAME = 1903365314,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOVE_GREAT_WORK = 689780862,
    /**
    * **Contexts**: Gameplay, UI
    */
    WORLD_CONGRESS_DISCUSSION_SELECTION = -455647773,
    /**
    * **Contexts**: Gameplay, UI
    */
    WORLD_CONGRESS_RESOLUTION_VOTE = -1328555624,
    /**
    * **Contexts**: Gameplay, UI
    */
    HIRE_CLAN = -1814742665,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_SLOT = 732815252,
    /**
    * **Contexts**: Gameplay, UI
    */
    DIPLOMACY_DECLARE_WAR = -1226544721,
    /**
    * **Contexts**: Gameplay, UI
    */
    WORLD_CONGRESS_LOOKED_AT_AVAILABLE = 460653146,
    /**
    * **Contexts**: Gameplay, UI
    */
    WORLD_CONGRESS_RESOLUTION_SELECTION = -1987551913,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_INSERT_MODE = -1406149623,
    /**
    * **Contexts**: Gameplay, UI
    */
    REJECT_GREAT_PERSON = 95216200,
    /**
    * **Contexts**: Gameplay, UI
    */
    LEVY_MILITARY = -421340238,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_TEAM_ONE = 1268901326,
    /**
    * **Contexts**: Gameplay, UI
    */
    COMMEMORATE = -1639063591,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_RESOLUTION_SELECTION = -154717099,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY_SRC = 640464798,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADD_BELIEF = -125661660,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_TECH_TYPE = 347601064,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_BELIEF_TYPE = -1538578169,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_BUILDING_DEST = -1316065368,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_GOVERNOR_TYPE = -1352788443,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY_DEST = -437071973,
    /**
    * **Contexts**: Gameplay, UI
    */
    ACCEPT_EMERGENCY = -306511772,
    /**
    * **Contexts**: Gameplay, UI
    */
    BRIBE_CLAN = 1378469395,
    /**
    * **Contexts**: Gameplay, UI
    */
    WORLD_CONGRESS_INDICATE_DESIRE = 539362608,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_BUILDING_SRC = -2065978008,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_UNIT_ID = -1032884389,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_COMMEMORATION_TYPE = 1783062116,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_CITY_TWO = 1470241141,
    /**
    * **Contexts**: Gameplay, UI
    */
    RECRUIT_GREAT_PERSON = -387427142,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_PLAYER_ONE = 75700508,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_EMERGENCY_TYPE = 355611699,
    /**
    * **Contexts**: Gameplay, UI
    */
    ASSIGN_GOVERNOR = -109303925,
    /**
    * **Contexts**: Gameplay, UI
    */
    SET_ESCAPE_ROUTE = 1668513220,
    /**
    * **Contexts**: Gameplay, UI
    */
    PARAM_PLAYER_TWO = 1864701323,
    /**
    * **Contexts**: Gameplay, UI
    */
    FOUND_PANTHEON = -1770928175,
    /**
    * **Contexts**: Gameplay, UI
    */
    WORLD_CONGRESS_SUBMIT_TURN = 891526035,
    /**
    * **Contexts**: Gameplay, UI
    */
    DIPLOMACY_MAKE_PEACE = 430381936,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum Drag
{
    /**
    * **Contexts**: Gameplay, UI
    */
    eDown = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    eDrop = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    eDragDisabled = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    eDrag = 1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DefenseTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICT_GARRISON = 1587009065,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICT_OUTER = 1839557181,
}

/**
 * **Contexts**: UI
 */
declare enum KickReason
{
    /**
    * **Contexts**: UI
    */
    KICK_VERSION_MISMATCH = 7,
    /**
    * **Contexts**: UI
    */
    KICK_NONE = 0,
    /**
    * **Contexts**: UI
    */
    KICK_MOD_MISSING = 9,
    /**
    * **Contexts**: UI
    */
    KICK_UNRECOGNIZED = 4,
    /**
    * **Contexts**: UI
    */
    KICK_MOD_ERROR = 8,
    /**
    * **Contexts**: UI
    */
    KICK_TIMEOUT = 3,
    /**
    * **Contexts**: UI
    */
    KICK_UNAUTHORIZED = 5,
    /**
    * **Contexts**: UI
    */
    KICK_MATCH_DELETED = 10,
    /**
    * **Contexts**: UI
    */
    KICK_NO_HOST = 1,
    /**
    * **Contexts**: UI
    */
    KICK_HOST = 2,
    /**
    * **Contexts**: UI
    */
    KICK_NO_ROOM = 6,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum EspionageResultTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    CAPTURED = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    NUM_ESPIONAGE_RESULTS = 6,
    /**
    * **Contexts**: Gameplay, UI
    */
    SUCCESS_UNDETECTED = 5,
    /**
    * **Contexts**: Gameplay, UI
    */
    FAIL_MUST_ESCAPE = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_RESULT = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    KILLED = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    FAIL_UNDETECTED = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    SUCCESS_MUST_ESCAPE = 4,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DirectionTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    DIRECTION_NORTHEAST = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    DIRECTION_SOUTHWEST = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    DIRECTION_NORTHWEST = 5,
    /**
    * **Contexts**: Gameplay, UI
    */
    DIRECTION_SOUTHEAST = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    DIRECTION_WEST = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    NUM_DIRECTION_TYPES = 6,
    /**
    * **Contexts**: Gameplay, UI
    */
    DIRECTION_EAST = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_DIRECTION = -1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum NotificationGroups
{
    /**
    * **Contexts**: Gameplay, UI
    */
    NONE = -1225125244,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum WorldRenderView
{
    /**
    * **Contexts**: Gameplay, UI
    */
    VIEW_3D = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    VIEW_2D = 1,
}

/**
 * **Contexts**: UI
 */
declare enum ChatTargetTypes
{
    /**
    * **Contexts**: UI
    */
    CHATTARGET_PLAYER = -4,
    /**
    * **Contexts**: UI
    */
    CHATTARGET_ALL = -2,
    /**
    * **Contexts**: UI
    */
    CHATTARGET_TEAM = -3,
    /**
    * **Contexts**: UI
    */
    NO_CHATTARGET = -1,
}

/**
 * **Contexts**: UI
 */
declare enum CloudNotifyTypes
{
    /**
    * **Contexts**: UI
    */
    CLOUDNOTIFY_NONE = 0,
    /**
    * **Contexts**: UI
    */
    CLOUDNOTIFY_ERROR = 3,
    /**
    * **Contexts**: UI
    */
    CLOUDNOTIFY_GAMEREADY = 2,
    /**
    * **Contexts**: UI
    */
    CLOUDNOTIFY_YOURTURN = 1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum RibbonHUDStats
{
    /**
    * **Contexts**: Gameplay, UI
    */
    HIDE = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    FOCUS = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    SHOW = 2,
}

/**
 * **Contexts**: UI
 */
declare enum TeamTypes
{
    /**
    * **Contexts**: UI
    */
    NO_TEAM = -1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum SaveLocationOptions
{
    /**
    * **Contexts**: Gameplay, UI
    */
    AUTOSAVE = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_OPTIONS = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    QUICKSAVE = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    NORMAL = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    LOAD_METADATA = 32,
    /**
    * **Contexts**: Gameplay, UI
    */
    DIRECTORIES = 256,
    /**
    * **Contexts**: Gameplay, UI
    */
    PREVIOUS = 8,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOST_RECENT_ONLY = 64,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum WorldBuilderSignals
{
    /**
    * **Contexts**: Gameplay, UI
    */
    MODE_CHANGE = -790177521,
    /**
    * **Contexts**: Gameplay, UI
    */
    INVALID = 0,
}

/**
 * **Contexts**: UI
 */
declare enum PlayByCloudEndTurnBehaviorType
{
    /**
    * **Contexts**: UI
    */
    PBC_ENDTURN_EXIT_MAINMENU = 2,
    /**
    * **Contexts**: UI
    */
    PBC_ENDTURN_ASK_ME = 0,
    /**
    * **Contexts**: UI
    */
    PBC_ENDTURN_DO_NOTHING = 1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum CombatVisType
{
    /**
    * **Contexts**: Gameplay, UI
    */
    INTERCEPTOR = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    ATTACKER = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    ANTI_AIR = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    DEFENDER = 1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DiplomaticStates
{
    /**
    * **Contexts**: Gameplay, UI
    */
    INFLUENTIAL = -441103931,
    /**
    * **Contexts**: Gameplay, UI
    */
    WAR_WITH_MINOR = -1084036980,
    /**
    * **Contexts**: Gameplay, UI
    */
    PROTECTOR = 1631956283,
    /**
    * **Contexts**: Gameplay, UI
    */
    MAX_INFLUENCE = 73002122,
    /**
    * **Contexts**: Gameplay, UI
    */
    AWARE = -1267004641,
    /**
    * **Contexts**: Gameplay, UI
    */
    DECLARED_FRIEND = -1250061412,
    /**
    * **Contexts**: Gameplay, UI
    */
    WAR_WITH_MAJOR = 2111793343,
    /**
    * **Contexts**: Gameplay, UI
    */
    DENOUNCED = -1398155031,
    /**
    * **Contexts**: Gameplay, UI
    */
    ALLIED = 153403816,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNFRIENDLY = 1823294455,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_INFLUENCE = 1877259354,
    /**
    * **Contexts**: Gameplay, UI
    */
    WAR = 1599151516,
    /**
    * **Contexts**: Gameplay, UI
    */
    MINOR_MINOR_WAR = -1002100334,
    /**
    * **Contexts**: Gameplay, UI
    */
    FRIENDLY = -1143066237,
    /**
    * **Contexts**: Gameplay, UI
    */
    NEUTRAL = -575399808,
    /**
    * **Contexts**: Gameplay, UI
    */
    PATRON = -1495603630,
    /**
    * **Contexts**: Gameplay, UI
    */
    MINOR_MINOR = 1629317196,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DealDirection
{
    /**
    * **Contexts**: Gameplay, UI
    */
    OUTGOING = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    INCOMING = 1,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum CityDestroyDirectives
{
    /**
    * **Contexts**: Gameplay, UI
    */
    LIBERATE_FOUNDER = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    REJECT = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    LIBERATE_PREVIOUS_OWNER = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    RAZE = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    KEEP = 2,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum LensLayers
{
    /**
    * **Contexts**: Gameplay, UI
    */
    IMPROVEMENTS = 5,
    /**
    * **Contexts**: Gameplay, UI
    */
    HEX_COLORING_GREAT_PEOPLE = 36,
    /**
    * **Contexts**: Gameplay, UI
    */
    LOYALTY_FREECITY_WARNING = 55,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOVEMENT_ZONE_OF_CONTROL = 38,
    /**
    * **Contexts**: Gameplay, UI
    */
    HEX_COLORING_RELIGION = 35,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_LAST = 23,
    /**
    * **Contexts**: Gameplay, UI
    */
    CULTURAL_IDENTITY_LENS = 54,
    /**
    * **Contexts**: Gameplay, UI
    */
    WORLD_CURSOR = 56,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADJACENCY_BONUS_DISTRICTS = 49,
    /**
    * **Contexts**: Gameplay, UI
    */
    HEX_COLORING_ATTACK = 51,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_NEIGHBORHOOD = 21,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITY_YIELDS = 47,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_CITY_CENTER = 9,
    /**
    * **Contexts**: Gameplay, UI
    */
    NUMBERS = 50,
    /**
    * **Contexts**: Gameplay, UI
    */
    TOURIST_TOKENS = 24,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNITS_CIVILIAN = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_INDUSTRIAL_ZONE = 20,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_ENCAMPMENT_DEFENSE = 10,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_NEARBY_MOUNTAIN = 12,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOVEMENT_RANGE = 44,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_HOLY_SITE = 13,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_SPACEPORT = 23,
    /**
    * **Contexts**: Gameplay, UI
    */
    MAP_HEX_MASK = 42,
    /**
    * **Contexts**: Gameplay, UI
    */
    ATTACK_RANGE = 46,
    /**
    * **Contexts**: Gameplay, UI
    */
    RESOURCES_BONUS = 6,
    /**
    * **Contexts**: Gameplay, UI
    */
    HEX_COLORING_MOVEMENT = 53,
    /**
    * **Contexts**: Gameplay, UI
    */
    TRADE_ROUTE = 39,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_FIRST = 9,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNITS_ARCHAELOGY = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    LABELS_EMPIRE = 28,
    /**
    * **Contexts**: Gameplay, UI
    */
    SELECTION = 41,
    /**
    * **Contexts**: Gameplay, UI
    */
    HEX_COLORING_GOVERNMENT = 30,
    /**
    * **Contexts**: Gameplay, UI
    */
    RESOURCES_STRATEGIC = 8,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNITS_MILITARY = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS = 48,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_THEATER_DISTRICT = 16,
    /**
    * **Contexts**: Gameplay, UI
    */
    ADJACENCY_BONUS_UNITS = 40,
    /**
    * **Contexts**: Gameplay, UI
    */
    CITIZEN_MANAGEMENT = 45,
    /**
    * **Contexts**: Gameplay, UI
    */
    LABELS_CONTINENT = 29,
    /**
    * **Contexts**: Gameplay, UI
    */
    HEX_COLORING_PLACEMENT = 52,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_CAMPUS = 11,
    /**
    * **Contexts**: Gameplay, UI
    */
    UNITS_RELIGIOUS = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    YIELD_ICONS = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    NUM_LENS_LAYERS = 57,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOVEMENT_PATH = 37,
    /**
    * **Contexts**: Gameplay, UI
    */
    RESOURCES_LUXURY = 7,
    /**
    * **Contexts**: Gameplay, UI
    */
    RECOMMENDATION_SETTLER = 25,
    /**
    * **Contexts**: Gameplay, UI
    */
    CULTURE_BORDERS = 27,
    /**
    * **Contexts**: Gameplay, UI
    */
    HEX_COLORING_OWNING_CIV = 31,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_COMMERICAL_HUB = 15,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_ENTERTAINMENT_COMPLEX = 19,
    /**
    * **Contexts**: Gameplay, UI
    */
    HEX_COLORING_CONTINENT = 32,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_AQUEDUCT = 18,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_HARBOR = 17,
    /**
    * **Contexts**: Gameplay, UI
    */
    PURCHASE_PLOT = 43,
    /**
    * **Contexts**: Gameplay, UI
    */
    HEX_COLORING_APPEAL_LEVEL = 33,
    /**
    * **Contexts**: Gameplay, UI
    */
    RECOMMENDATION_BUILDER = 26,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_AERODROME = 22,
    /**
    * **Contexts**: Gameplay, UI
    */
    HEX_COLORING_WATER_AVAILABLITY = 34,
    /**
    * **Contexts**: Gameplay, UI
    */
    DISTRICTS_ENCAMPMENT_MILITARY = 14,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum RevealedState
{
    /**
    * **Contexts**: Gameplay, UI
    */
    REVEALED = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    VISIBLE = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    HIDDEN = 0,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DiplomacyActionTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    SET_OPEN_BORDERS = -1258728403,
    /**
    * **Contexts**: Gameplay, UI
    */
    DECLARE_FRIEND = -1061902145,
    /**
    * **Contexts**: Gameplay, UI
    */
    MAKE_DEAL = -2065048438,
    /**
    * **Contexts**: Gameplay, UI
    */
    SET_WAR_STATE = 1140857447,
    /**
    * **Contexts**: Gameplay, UI
    */
    ALLY = -890731962,
    /**
    * **Contexts**: Gameplay, UI
    */
    SET_EMBASSY = -407189263,
    /**
    * **Contexts**: Gameplay, UI
    */
    SET_DELEGATION = -1064487821,
    /**
    * **Contexts**: Gameplay, UI
    */
    DENOUNCE = -1778523048,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum EndTurnBlockingTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_ENDTURN_BLOCKING = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_ARTIFACT = -234935529,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_CITY_RANGE_ATTACK = 103424869,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_UNIT_NEEDS_ORDERS = 616404169,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_GOVERNOR_APPOINTMENT = 934074454,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_EMERGENCY_NEEDS_ATTENTION = 1880388154,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_RESEARCH = -286188551,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_SPY_CHOOSE_DRAGNET_PRIORITY = 2048525187,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_SPY_CHOOSE_ESCAPE_ROUTE = 1385632321,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_COMMEMORATION_AVAILABLE = 829959847,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_UNIT_PROMOTION = 1706768628,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_WORLD_CONGRESS_SESSION = -1205529243,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_RELIGION = -1454391358,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_CIVIC = -2034242607,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_PANTHEON = -1679521882,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_CLAIM_GREAT_PERSON = -1001639762,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_DISTRICT_RANGE_ATTACK = -76578136,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_CONSIDER_DISLOYAL_CITY = -619606592,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_STACKED_UNITS = -410341495,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_FILL_CIVIC_SLOT = -1610199318,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_GOVERNOR_OPPORTUNITY = 1243472837,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_CONSIDER_GOVERNMENT_CHANGE = 1472003650,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_BELIEF = 163551189,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_CONSIDER_RAZE_CITY = -183444029,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_GOVERNOR_PROMOTION = 1984622812,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_PRODUCTION = -513644209,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_GIVE_INFLUENCE_TOKEN = -148733181,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_GOVERNOR_IDLE = 781040163,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_UNITS = 23669119,
    /**
    * **Contexts**: Gameplay, UI
    */
    ENDTURN_BLOCKING_WORLD_CONGRESS_LOOK = 1731122433,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum DiplomaticThreatTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    UNKNOWN_THREAT = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    INVALID_THREAT = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    MAJOR_THREAT = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    MINOR_THREAT = 3,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_THREAT = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    MODERATE_THREAT = 2,
}

/**
 * **Contexts**: UI
 */
declare enum NetworkPlatform
{
    /**
    * **Contexts**: UI
    */
    NETWORK_PLATFORM_STEAM = 1,
    /**
    * **Contexts**: UI
    */
    NETWORK_PLATFORM_RAIL = 2,
    /**
    * **Contexts**: UI
    */
    NETWORK_PLATFORM_UNKNOWN = 0,
    /**
    * **Contexts**: UI
    */
    NETWORK_PLATFORM_EOS = 3,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum FlowDirectionTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    FLOWDIRECTION_NORTHEAST = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    FLOWDIRECTION_NORTH_MASK = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_FLOWDIRECTION = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    NUM_FLOWDIRECTION_TYPES = 6,
    /**
    * **Contexts**: Gameplay, UI
    */
    FLOWDIRECTION_NORTHWEST = 5,
    /**
    * **Contexts**: Gameplay, UI
    */
    FLOWDIRECTION_SOUTHWEST_MASK = 16,
    /**
    * **Contexts**: Gameplay, UI
    */
    FLOWDIRECTION_NORTHWEST_MASK = 8,
    /**
    * **Contexts**: Gameplay, UI
    */
    FLOWDIRECTION_SOUTH_MASK = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    FLOWDIRECTION_NORTHEAST_MASK = 32,
    /**
    * **Contexts**: Gameplay, UI
    */
    FLOWDIRECTION_SOUTHEAST = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    FLOWDIRECTION_NORTH = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    FLOWDIRECTION_SOUTHWEST = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    FLOWDIRECTION_SOUTHEAST_MASK = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    FLOWDIRECTION_SOUTH = 3,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum UnitOperationMoveModifiers
{
    /**
    * **Contexts**: Gameplay, UI
    */
    TERRITORY_NO_UNEXPLORED = 1,
    /**
    * **Contexts**: Gameplay, UI
    */
    IGNORE_STACKING_AFTER_TURN = 4096,
    /**
    * **Contexts**: Gameplay, UI
    */
    ANY_ROUTE = 512,
    /**
    * **Contexts**: Gameplay, UI
    */
    STAY_ON_LAND = 128,
    /**
    * **Contexts**: Gameplay, UI
    */
    ROUTE_ALLOW_UNEXPLORED = 1024,
    /**
    * **Contexts**: Gameplay, UI
    */
    IGNORE_ZOC = 2048,
    /**
    * **Contexts**: Gameplay, UI
    */
    NONE = 0,
    /**
    * **Contexts**: Gameplay, UI
    */
    IGNORE_DANGER = 8,
    /**
    * **Contexts**: Gameplay, UI
    */
    TERRITORY_NO_ENEMY = 2,
    /**
    * **Contexts**: Gameplay, UI
    */
    MOVE_IGNORE_UNEXPLORED_DESTINATION = 16384,
    /**
    * **Contexts**: Gameplay, UI
    */
    MAXIMIZE_EXPLORE = 64,
    /**
    * **Contexts**: Gameplay, UI
    */
    IGNORE_STACKING = 4,
    /**
    * **Contexts**: Gameplay, UI
    */
    DECLARE_WAR = 32,
    /**
    * **Contexts**: Gameplay, UI
    */
    ATTACK = 16,
}

/**
 * **Contexts**: Gameplay, UI
 */
declare enum ActionTypes
{
    /**
    * **Contexts**: Gameplay, UI
    */
    ACTION_RETIRE = -246527618,
    /**
    * **Contexts**: Gameplay, UI
    */
    ACTION_ENDTURN = 751412917,
    /**
    * **Contexts**: Gameplay, UI
    */
    NO_ACTION = -1,
    /**
    * **Contexts**: Gameplay, UI
    */
    ACTION_UNREADYTURN = -1112841155,
}

/**
 * **Contexts**: UI
 * 
 * GameCore defined plot property keys
 */
declare enum PlotDynamicPropertyKeys
{
    /**
    * **Contexts**: UI
     * 
     * ---
     * Alternatively you can use "DELAYED_DAMAGE_TURN" as a property key.

Used for blocking initial fallout damage for plots hit by nukes, utilized in CivRoyale scenario (Red Death).
    */
    DELAYED_DAMAGE_TURN = 386561951,
}

/**
 * **Contexts**: UI
 */
declare enum WMDStatus
{
    /**
    * **Contexts**: UI
    */
    WMD_FAIL_NOT_CAPABLE = -1072418246,
    /**
    * **Contexts**: UI
    */
    WMD_OK = 447518686,
    /**
    * **Contexts**: UI
    */
    WMD_FAIL_NO_ATTACKER = 1885064494,
    /**
    * **Contexts**: UI
    */
    WMD_NONE = -1507201801,
    /**
    * **Contexts**: UI
    */
    WMD_FAIL_ATTACKER_LOW_HEALTH = -106498130,
}

/**
 * **Contexts**: UI
 */
declare enum TurnTimerTypes
{
    /**
    * **Contexts**: UI
    */
    TURNTIMER_STANDARD = 2133509568,
    /**
    * **Contexts**: UI
    */
    TURNTIMER_NONE = -1525060181,
    /**
    * **Contexts**: UI
    */
    TURNTIMER_DYNAMIC = 698670180,
}

/**
 * **Contexts**: UI
 */
declare enum UnitConfirmationLevel
{
    /**
    * **Contexts**: UI
    */
    CONFIRMATION_LEVEL_NONE = 0,
    /**
    * **Contexts**: UI
    */
    CONFIRMATION_LEVEL_COMBAT = 1,
    /**
    * **Contexts**: UI
    */
    CONFIRMATION_LEVEL_ALWAYS = 2,
}

/**
 * **Contexts**: UI
 */
declare enum GamePadInputType
{
    /**
    * **Contexts**: UI
    */
    INPUT_TYPE_PLOT = 7,
    /**
    * **Contexts**: UI
    */
    INPUT_TYPE_LEFTSTICK = 1,
    /**
    * **Contexts**: UI
    */
    INPUT_TYPE_FIELD = 6,
    /**
    * **Contexts**: UI
    */
    INPUT_TYPE_BUMPERS = 0,
    /**
    * **Contexts**: UI
    */
    INPUT_TYPE_PAD_BUTTONS = 5,
    /**
    * **Contexts**: UI
    */
    INPUT_TYPE_LEFTSTICKDPAD = 3,
    /**
    * **Contexts**: UI
    */
    INPUT_TYPE_RIGHTSTICK = 4,
    /**
    * **Contexts**: UI
    */
    INPUT_TYPE_DPAD = 2,
}

/**
 * **Contexts**: UI
 */
declare enum LayoutOverride
{
    /**
    * **Contexts**: UI
    */
    LAYOUT_OVERRIDE_NONE = 0,
    /**
    * **Contexts**: UI
    */
    LAYOUT_OVERRIDE_PHONE = 1,
    /**
    * **Contexts**: UI
    */
    LAYOUT_OVERRIDE_TABLET = 2,
}