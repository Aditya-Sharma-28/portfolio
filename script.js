console.log("Script running...")
document.querySelector('.cross').stlye.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.ham').stlye.display='inline'
        document.querySelector('.cross').stlye.display='none'
    }
    else{
        document.querySelector('.ham').stlye.display='none'
        setTimeout(() => {
            
        }, 350);
        document.querySelector('.cross').stlye.display='inline'
    }
})