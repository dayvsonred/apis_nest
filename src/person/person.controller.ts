import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('person')
export class PersonController {
    
    @Get("list")
    findAll(){
        return "hello word";
    }

    @Post()
    backObject(@Body() body){
        return body
    }
}
