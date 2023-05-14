const feed = document.querySelector('#feed');
const post_btn = document.querySelector('#post_btn')
const username_txt = document.querySelector('#username')
const post_num_txt = document.querySelector('#posts_num')
const user_id_txt = document.querySelector('#user_id')
const post_txt = document.querySelector('#post_text')
const createPost=(user_name, user_id, text, posts_num)=>{
    let k = document.createElement('div')
    posts_num+=1;
    let post_id = user_name+'_'+user_id+'_'+posts_num
    k.setAttribute("id", post_id)
    k.style.cssText="display:flex;flex:1;flex-direction:column;justify-content:center;align-items:center;"
    let j = document.createElement('h2')
    j.innerText= user_name
    j.style.cssText='font-size:1em;'
    let x = document.createElement('p')
    x.innerText = text
    k.appendChild(j)
    k.appendChild(x)
    feed.appendChild(k)
}
createPost('test',1,'Some text',0)
//TODO get input taking working so posts can be added on the page 
/*
post_btn.addEventListener('click', function(){
    let post_text = post_txt.innerText;
    let username = username_txt.innerText;
    let post_num = post_num_txt.innerText;
    let u_id = user_id_txt.innerText;
    createPost(username, u_id, post_text, post_num);
})
*/
