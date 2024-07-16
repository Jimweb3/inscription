import {Body, Controller, Get, Post} from '@nestjs/common';
import {RunesService} from "./runes.service";
import {SendRuneReq} from "../entity/req";


@Controller("runes")
export class RunesController {

    constructor(private readonly runesService: RunesService) {
    }

    //发送符文
    @Post("send")
    async sendRune(@Body() req: SendRuneReq) {
        return await this.runesService.sendRunes(req);
    }


}
