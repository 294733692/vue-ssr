import { createApp } from '../src/main'

export default () => {
    // 返回promise对象，用于处理异步状态
    return new Promise((resolve, reject) => {
        let app = createApp();
        resolve(app);
    })
}