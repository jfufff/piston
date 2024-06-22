/* com.jfuf.piston.Conditions */
/* author: jfuf @ Kron Studios (https://gihub.com/jfufff) */
/* date of addition: 6/21/24 */

/* 
CONTEXT: this is a plugin file for ScriptCraft via SpigotMC, meaning it doesnt 
need require() 
*/

  if( events.on(
     events.blockUpdate()) )  { 
    console.log("piston: block update detected");
    return; 
  } else { return "piston: warn: unknown block update occurence" }

 // Optimization for loading
  if( events.on(
     events.chunkLoaded()) {
    console.log("piston: chunk loaded, halting loading for 1.5 secs");
    setTimeout(events.chunkLoaded(), events.chunkCreation(), 1.5);
    return;
  }
  
