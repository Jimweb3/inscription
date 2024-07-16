import {Body, Controller, Post} from '@nestjs/common';
import {BuyerSignReq, MergeTxReq, SellerSignReq} from "../entity/req";
import {MarketService} from "./market.service";


@Controller("market")
export class MarketController {

    constructor(private readonly marketService: MarketService) {
    }

    //买家挂家
    @Post("ask")
    async ask(@Body() req: SellerSignReq) {
        return await this.marketService.sellerSign(req);
    }

    //卖家支付签名
    @Post("bid")
    async bid(@Body() req: BuyerSignReq) {
        return await this.marketService.buyerSign(req);
    }

    //平台合并交易
    @Post("merge")
    async merge(@Body() req: MergeTxReq) {
        return await this.marketService.mergeForPush(req);
    }

}
