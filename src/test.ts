import { generateService } from './index';


generateService({
    requestLibPath: "import request from '@/request/http'", // 整合axios导出的实例位置
    schemaPath: 'https://xxxxxx',    // 后端swagger接口文档地址
    serversPath: `./demo/servers/`, // 代码生成目录
    apiPrefix: '"/ai"', 
});