import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, Res } from '@nestjs/common';
import { response } from 'express';

@Controller('person')
export class PersonController {
    
    @Get("list")
    findAll(){
        return "hello word";
    }

    @Post()
    backObject(@Body() body){
        return body;
    }


    @Post("response")
    backObjectResp(@Res() response, @Body() body){
        console.log("here");
        if(body.id > 10){
            console.log("here2");
            return response.status(HttpStatus.BAD_REQUEST).json([]);
        }
        return response.status(HttpStatus.OK).json(body);
    }


    @Put("up/:value")
    upDate(@Param('value') value:string){

        let respValue = { txt :  `O valor atualizado e:${value}` };
        return respValue;
    }
}
