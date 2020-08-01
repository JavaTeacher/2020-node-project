// class
// node.green 사이트
class cacheManager {
  // constructor는 async, await를 못 씀 (동기로만 동작)
  constructor() {
    this.config = [];
  }

  addConfig(obj = {}) {
    this.config.push(obj);
  }

  getConfig() {
    return this.config;
  }
}

const CacheManager = new cacheManager();
CacheManager.addConfig({
  port: 8000,
});

CacheManager.addConfig({
  cert: "./test.crt",
});

const config = CacheManager.getConfig();
console.log(config);

module.exports = cacheManager;
