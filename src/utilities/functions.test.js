import {ToUpper,ToLower} from './functions'


test('should format to UppperCase',()=>{

     expect(ToUpper('Jessica')).toBe('JESSICA')

})

test('should format to LowerCase',()=>{

    expect(ToLower('JESSICA')).toBe('jessica')
})