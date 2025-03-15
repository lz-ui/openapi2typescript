import { generateService } from './index';


generateService({
    requestLibPath: "import request from '@/request/http'", // 整合axios导出的实例位置
    schemaPath: 'https://cos-1251140835.cos.ap-shanghai.myqcloud.com/object/2025-3-15/1013261/ai_OpenAPI.json',    // 后端swagger接口文档地址
    serversPath: `./demo/servers/`, // 代码生成目录
    apiPrefix: '"/ai"', 
});