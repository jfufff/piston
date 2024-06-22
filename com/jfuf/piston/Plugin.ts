/* com.jfuf.piston.Piston */
/* author: jfuf @ Kron Studios (https://gihub.com/jfufff) */
/* date of addition: 6/21/24 */
const package = "com.jfuf.piston.Plugin";
function packageError() {   
 if (!package == "com.jfuf.piston.Plugin") { 
  console.log(
    "piston: warning: malformed package name \n"
  )} 
} // dont mess with the package lol

export namespace Plugin {
    type plugin = {
       name:string,
       mcversion:string,
       release:string,
       source:string,
       piston_version:string
    }; 
};

