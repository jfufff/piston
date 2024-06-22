/* com.jfuf.piston.PistonDef */
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


  if( events.on(
     events.chunkLoaded()) {
    console.log("piston: chunk loaded, halting loading for 1.8 secs");
    setTimeout(events.chunkLoaded(), events.chunkCreation(), 1.8);
    return;
  }
  