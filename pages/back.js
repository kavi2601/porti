const ham= document.querySelector('.ham')
var e= window.event
var dropdown= document.querySelector('header ul')
var c=0
var g=100
var menu_stat=false
const css_count=document.styleSheets.length
var style_count=document.styleSheets[css_count-1].rules.length
var medstyle_count = document.styleSheets[css_count-1].rules[style_count-1].cssRules.length

if( document.body.clientWidth<=740){
    ham.innerHTML='';
}


function goli(){
    if( document.body.clientWidth<=740){
        ham.innerHTML='';
    }else {
        if(document.styleSheets[css_count-1].rules[style_count-1].cssRules.length>medstyle_count){
            console.log('hello')
            m_off()
        }
        ham.innerHTML='<h>logout</h>';
    }
}

function getPositionXY(element) { 
    var rect = ham.getBoundingClientRect();
    var cx = window.event.clientX
    var cy = window.event.clientY
        if(cx>=rect.x&&cx<rect.x+ham.clientWidth&&cy>rect.y-10&&cy<rect.y+10){
        return true
    }else{
        return false
    }
}

function mouse(){
   
    if(getPositionXY()){
        document.body.style='cursor:pointer'
        if(!menu_stat){
            ham.classList.add('anim')
            // ham.style='width:22px'
        }
        // ham.classList.add('animate__tada')
    }else{
        document.body.style='cursor:default'
        ham.classList.remove('anim')
        ham.style='width:20px'
        // ham.style='transform:rotate(0deg)'
        // ham.classList.remove('animate__tada')
    }
}

function menu(){
    if(getPositionXY()&&document.body.clientWidth<=800&&document.styleSheets[css_count-1].rules[style_count-1].cssRules.length<=medstyle_count){
       menu_stat= m_on()
        
    }else if(getPositionXY()&&document.body.clientWidth<=800){
       menu_stat=m_off()
    }
}

function m_on(){
    dropdown.classList.add('dropdown')
    document.querySelector('main').style=`transform:translateY(${dropdown.clientHeight+10}px)`
    dropdown.classList.add('dropdown')
    var m = document.styleSheets[css_count-1].rules.length
    var n= document.styleSheets[css_count-1].rules[m-1].cssRules.length
    document.styleSheets[css_count-1].rules[m-1].insertRule('.ham{transform:rotate(135deg)}',n)
    document.styleSheets[css_count-1].rules[m-1].insertRule('.ham::before,.ham::after{top:-14px;transform:translate(-8px) rotate(90deg)}',n+1)
    return true
}

function m_off(){
    dropdown.classList.remove('dropdown')
    document.querySelector('main').style=`transform:translateY(-${dropdown.clientHeight-10}px)`
    var m = document.styleSheets[css_count-1].rules.length
    var n= document.styleSheets[css_count-1].rules[m-1].cssRules.length
    // console.log('kjhkjh')
    document.styleSheets[css_count-1].rules[m-1].deleteRule(n-1)
    document.styleSheets[css_count-1].rules[m-1].deleteRule(n-2)
    
    return false
}