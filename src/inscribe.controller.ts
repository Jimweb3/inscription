import {Body, Controller, Post} from '@nestjs/common';
import {InscribeService} from './inscribe.service';
import {BatchInscribeReq, InscribeReq, SendInscriptionReq,} from "../entity/req";

@Controller("inscribe")
export class InscribeController {

    constructor(private readonly inscribeService: InscribeService) {
    }

    //铭刻
    @Post("inscribe")
    async inscribe(@Body() req: InscribeReq) {
        return await this.inscribeService.inscribe(req);
    }

    //同一笔交易多铭刻
    @Post("batchInscribe")
    async batch(@Body() req: BatchInscribeReq) {
        return await this.inscribeService.batchInscribe(req);
    }

    //批量发送铭文
    @Post("sendInscription")
    async sendInscription(@Body() req: SendInscriptionReq) {
        return await this.inscribeService.batchSendInscription(req);
    }


}
