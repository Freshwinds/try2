window.onload = function(){$('.timeline-1').Timeline();};
//重写alert样式
window.alert=function(str){
    var clientWidht=document.body.clientWidth;
    var clientHeight=document.body.clientHeight;
    var alertContainer=document.createElement("div");
    alertContainer.id="alertshow";
    alertContainer.style.width="300px";
    alertContainer.style.height="100px";
    alertContainer.style.borderRadius="20px";
    alertContainer.style.textAlign="center";
    alertContainer.style.margin="0px auto";

    var tiptitle=document.createElement("div");
    tiptitle.id="tiptitle";
    tiptitle.style.width="300px";
    tiptitle.style.height="50px";
    tiptitle.style.borderRadius="20px 20px 0px 0px";
    tiptitle.style.backgroundColor="#74a9a6";
    tiptitle.style.paddingTop="4px";
    var tiptext=document.createElement("h4");
    tiptext.innerHTML="提示";
    tiptext.style.color="#FFFFFF";
    var textArea=document.createElement("div");
    textArea.style.width="300px";
    textArea.style.height="100px";
    textArea.style.backgroundColor="#F5F5F5";
    textArea.style.paddingTop="20px";
    textArea.style.borderBottom="1px solid #74a9a6"
    var textAreatext=document.createElement("h4");
    textAreatext.innerHTML=str;
    textAreatext.style.color="#333333";
    var button=document.createElement("div");
    button.style.width="300px";
    button.style.height="50px";
    button.style.borderRadius="0px 0px 20px 20px";
    button.id="buttonOk";
    button.setAttribute('onclick',"document.body.removeChild(document.getElementById('alertshow'))");
    button.style.backgroundColor="#F5F5F5";
    button.style.paddingTop="6px";
    var buttontext=document.createElement("h4");
    buttontext.innerHTML="确定";
    buttontext.style.color="#333333";
    alertContainer.appendChild(tiptitle);
    tiptitle.appendChild(tiptext);
    textArea.appendChild(textAreatext);
    alertContainer.appendChild(textArea);
    button.appendChild(buttontext);
    alertContainer.appendChild(button);
    document.body.appendChild(alertContainer);
}
function change_text() {
    let items= $(".news_main").val();
    $(".timeline-1").empty();
    $.get( `/news/${items}`,function(ans){
        console.log(ans.length);
        if(ans.length==0)
            alert("没有符合要求的新闻");
        for(let i=0;i<ans.length;i++){
            console.log(ans[i].comments);
            comments=ans[i].comments.split('\n');
            if(i==0){
                str= `<div data-time=${ans[i].order}>
								<div class="timeline-visual"><div class="tit">
                                     新闻摘要
					                </div>
									<textarea class="textar">${ans[i].contents}</textarea>
								</div>
								<div class="timeline-detail">
								<div class="comm">社交媒体摘要</div>
									<ul class="timeline-detail-list"> `;
                    for(let j=0;j<comments.length;j++)
                    {   str+= `<li>${comments[j]}</li> `}
                    str+= `</ul>
								</div>
							</div> `;
                continue;
            }
            str+= `<div data-time=${ans[i].order}>
								<div class="timeline-visual">
								<div class="tit">
                                    新闻摘要
					                </div>
									<textarea class="textar">${ans[i].contents}</textarea>
								</div>
								<div class="timeline-detail">
								<div class="comm">社交媒体摘要</div>
									<ul class="timeline-detail-list"> `;
            for(let j=0;j<comments.length;j++)
            {   str+= `<li>${comments[j]}</li> `}
            str+= `</ul>
								</div>
							</div> `;
        }
        $(".timeline-1").append(str);
        $('.timeline-1').Timeline();
    })
}



