// sync.js — модуль синхронизации данных между страницами

const SYNC_KEY = 'raccoonClickerShared';
const LEADER_KEY = 'incomeLeader';
const tabId = Date.now() + '-' + Math.random().toString(36).substr(2, 9);

// Глобальные переменные, которые могут быть использованы снаружи
let syncData = {
    coins: 0,
    currentLevel: 1,
    currentTarget: 10000,
    cps: 0,
    cpsMultiplier: 1,
    businessIncome: 0,
    lastUpdater: tabId
};

export function loadSharedData() {
    const shared = JSON.parse(localStorage.getItem(SYNC_KEY) || '{}');
    Object.assign(syncData, shared);
    return syncData;
}

export function saveSharedData(overrides = {}) {
    Object.assign(syncData, overrides);
    syncData.lastUpdater = tabId;
    syncData.timestamp = Date.now();
    localStorage.setItem(SYNC_KEY, JSON.stringify(syncData));
}

export function initSync(onUpdate) {
    tryBecomeLeader();

    // Проверка лидерства каждые 10 секунд
    setInterval(tryBecomeLeader, 10000);

    // Синхронизация каждые 1.5 секунды
    setInterval(() => {
        const shared = JSON.parse(localStorage.getItem(SYNC_KEY) || '{}');
        if (shared.lastUpdater !== tabId) {
            Object.assign(syncData, shared);
            onUpdate?.(syncData);
        }
    }, 1500);
}

function tryBecomeLeader() {
    const now = Date.now();
    const leader = JSON.parse(localStorage.getItem(LEADER_KEY) || '{}');
    if (!leader.timestamp || now - leader.timestamp > 20000) {
        localStorage.setItem(LEADER_KEY, JSON.stringify({ tabId, timestamp: now }));
    }
}
