### Import and Export Invoice

If you want to use Invoice class inside `app.ts` then you need to import the file.

But before you import from the class directory,   
first of all, you have to export Invoice from `Invoice.ts` file .

That's simple enough, all you need to do is to put export in front of `class` in `Invoice` code.

```typescript
export class Invoice {
    // code...
}
```

and go to the top on `app.ts` and put code like below

```typescript
import { Invoice } from './classes/Invoice.js'
```
When you're compiling the code the browser is going to import the Javascript file, not a Typescript file.    
Even when you're working with Typescript you use the dot js to import.   
Finally, you need to put classes name in the curly braces.

---

This is a module system which greatly helps with your code organization and it will make things easier to maintain in the future as well

But there are two major drawbacks. The browser support only modern browsers support this module system, so if a user is using an outdated browser or an older browser
then you might get an error, it might not work, and secondly, it doesn't bundle your code into single file.
The browser is still using the module system to load seperate files and make multiple requests.

If you go to the network tab you can see that one request for a `app.js` and one request for `Invoice.js`.

 Webpack is going to bundle your code into a single file when it's completed and that way you only have one network request
 and all browsers are supported too.