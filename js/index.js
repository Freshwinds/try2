window.onload = function(){$('.timeline-1').Timeline();};
function change_text() {
    let items= $(".news_main").val();
    $(".timeline-1").empty();
    $.get( `/news/${items}`,function(ans){
        console.log(ans.length);
        for(let i=0;i<ans.length;i++){
            console.log(ans[i].comments);
            comments=ans[i].comments.split('\n');
            if(i==0){
                str= `<div data-time=${ans[i].order}>
								<div class="timeline-visual">
									<p >${ans[i].contents}</p>
								</div>
								<div class="timeline-detail">
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
									<p>${ans[i].contents}</p>
								</div>
								<div class="timeline-detail">
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



