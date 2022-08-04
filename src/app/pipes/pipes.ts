import { Pipe, PipeTransform } from "@angular/core";
@Pipe(
{
    name : 'price' 
})
export class price implements PipeTransform
{
    transform(n : number) {
        return('Price per day: ' + n.toString() + '$')
    }
}

@Pipe({
    name : 'names'
})
export class names implements PipeTransform
{
    transform(s :string) {
        var arr = s.split(' ')
        var str = ''
        arr.forEach(e => {
            str += e[0].toUpperCase() + e.slice(1).toLowerCase() + " "
        });
        return str
    }
}
@Pipe({
    name : 'titles'
})
export class titles implements PipeTransform
{
    transform(s :string) {
        return s.toUpperCase()
    }
}
