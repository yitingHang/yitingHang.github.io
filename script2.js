window.addEventListener('load',cv(),false)
window.addEventListener('load',habbit(),false)
window.addEventListener('load',specialty(),false)
window.addEventListener('load',condition(),false)
window.addEventListener('load',clubEx(),false)
window.addEventListener('load',jobEx(),false)

const info=document.querySelector('.info')
const title=document.querySelector('.title')
const content=document.querySelector('.content')
const close=document.querySelector('.close')

function cv(){
    let cv=document.querySelector('.cv')
    cv.addEventListener('click',function(){
        info.style="display:block;"
        title.innerHTML="簡歷"
        content.innerHTML="<div class='img_me'><img src='#' alt='個人照'></div><div class='name'>黃翊婷</div><div class='job'>賽務企劃人員</div><div class='contact'><div class='item_title'><p>【聯絡方式】</p></div><div class='cel'><img src='./img/phone.png' alt='phone_icon'><p>0953701066</p></div><div class='email'><img src='./img/email.png' alt='email_icon'><p>you235104573@gmail.com</p></div></div><div class='education'><p class='item_title'>【學歷】</p><p class='item_content'>國立嘉義高商 資料處理科</p><p class='item_content'>國立高雄科技大學 智慧商務系(資訊管理系)</p></div><div class='skills'><p class='item_title'>【技能】</p><p class='item_content'>Microsoft Office</p><p class='item_content'>中文打字、英文打字</p><p class='item_content'>活動策劃能力</p></div><div class='experience'><p class='item_title'>【經歷】</p><p class='item_content'>工廠作業人員</p><p class='item_content'>文件處理人員</p><p class='item_content'>餐飲服務人員</p></div><div class='fit'><p class='item_title'>【符合度】</p><div class='item_content'><img src='./img/tick-mark.png' alt='yes' class='yes'><span>運動賽務工作執行</span></div><div class='item_content'><img src='./img/tick-mark.png' alt='yes' class='yes'><span>負責活動現場的統籌與執行</span></div><div class='item_content'><img src='./img/tick-mark.png' alt='yes' class='yes'><span>需配合假日活動出勤</span></div><div class='item_content'><img src='./img/tick-mark.png' alt='yes' class='yes'><span>對羽球運動了解尤佳</span></div><div class='item_content'><img src='./img/tick-mark.png' alt='yes' class='yes'><span>Microsoft Office基礎作業能力</span></div><div class='item_content'><img src='./img/warning.png' alt='yes' class='warn'><span>具汽車駕照，並能實際上路</span></div><div class='item_content'><img src='./img/tick-mark.png' alt='yes' class='yes'><span>對運動充滿熱情，具備高抗壓性</span></div></div>"
        content.style="overflow: auto;overflow-y:scroll;display: flex;flex-direction: column;align-items: center;"
        close_is_clicked()
    })
}

function habbit(){
    let habbit=document.querySelector('.habbit')
    habbit.addEventListener('click',function(){
        info.style="display:block;"
        title.innerHTML="興趣"
        content.innerHTML="<div id='text_bar'><p id='title'>【運動】</p><p id='content'>平常喜歡透過運動保持身體健康活力以及紓解壓力，如羽球、排球、游泳等。</p><p id='content'>平常也會關注運動賽事，如2022台北羽球公開賽、2022亞洲盃排球賽等等</p><p id='content'>我認為人生中找到至少一項自己喜愛的運動是很重要的事，能夠調劑身心、結交志同道合的夥伴。</p><p id='title'>【音樂】</p><p id='content'>在學期間參與過國中管樂班及高中管樂社，音樂也是調適生活的方式。</p><p id='content'>平常也會關注音樂活動，如欣賞音樂會、參與嘉義市管樂節等等。</p></div>"
        close_is_clicked()
    })
}

function specialty(){
    let specialty=document.querySelector('.specialty')
    specialty.addEventListener('click',function(){
        info.style="display:block;"
        title.innerHTML="專長"
        content.innerHTML="<div id='text_bar'><p id='title'>【文書處理】</p><div id='line_center'><span id='tag'>◆</span><sapn id='title2_e'>Word<sapn></div><p id='content'>在大學製作報告中經常擔任文件撰寫工作，擅長將文件排版整齊方便閱讀。曾幫助學校製作畢業生工作趨勢報告。</p><div id='line_center'><span id='tag'>◆</span><sapn id='title2_e'>PowerPoint<sapn></div><p id='content'>在學中經常在課堂報告中製作簡報進行報告。</p><div id='line_center'><span id='tag'>◆</span><sapn id='title2_e'>Excel<sapn></div><p id='content'>大四修習過Excel操作課程，善於以Excel進行資料處理。</p><p id='title'>【打字速度】</p><p id='content'>中文打字50-60字</p><p id='content'>英文打字30-40字</p><p id='title'>【活動策劃】</p><p id='content'>在大學中擔任排球系隊隊長，籌備過系友盃活動，擔任總召。</p><div id='line_center'><span id='tag'>◆</span><sapn id='title2_c'>活動前</span></div><p id='content'>申請場地、接洽學校體育組、防疫措施、調查參與意願、報名表單製作、活動宣傳、器材籌備(如：排球、記分板、飲用水等)、安排分組及賽程、向系上申請贊助、聚餐場地訂位等等。</p><div id='line_center'><span id='tag'>◆</span><sapn id='title2_c'>活動中</span></div><p id='content'>管理活動秩序，如:簽到、召集各隊集合、說明賽制及開賽時間。</p><div id='line_center'><span id='tag'>◆</span><sapn id='title2_c'>活動後</span></div><p id='content'>場地復原、處理聚餐事務。</p></div>"
        close_is_clicked()
    })
}

function condition(){
    let condition=document.querySelector('.condition')
    condition.addEventListener('click',function(){
        info.style="display:block;"
        title.innerHTML="應徵條件"
        content.innerHTML="<div id='text_bar'><div id='line_center' style='margin-top:10px;'><img src='./img/tick-mark.png' alt='yes' class='yes'><span id='title2_c'>運動賽務工作執行</span></div><p id='content'>可以，有舉辦球類運動活動、參加球類比賽的經驗，平常也會觀看羽球比賽、排球比賽，對球類運動賽制進行方式清楚。<div id='line_center' style='margin-top:10px;'><img src='./img/tick-mark.png' alt='yes' class='yes'><span id='title2_c'>負責活動現場的統籌與執行</span></div><p id='content'>可以，舉辦過系排系友盃的活動，對於活動的舉辦前後流程了解。<div id='line_center' style='margin-top:10px;'><img src='./img/tick-mark.png' alt='yes' class='yes'><span id='title2_c'>需配合假日活動出勤</span></div><p id='content'>可以，願意配合工作時間彈性活動。<div id='line_center' style='margin-top:10px;'><img src='./img/tick-mark.png' alt='yes' class='yes'><span id='title2_c'>對羽球運動了解尤佳</span></div><p id='content'>對羽球賽制有基礎了解，也樂意學習跟羽球相關知識。<div id='line_center' style='margin-top:10px;'><img src='./img/tick-mark.png' alt='yes' class='yes'><span id='title2_c'>Microsoft Office基礎作業能力</span></div><p id='content'>可以，擅長使用Microsoft office軟體。<div id='line_center' style='margin-top:10px;'><img src='./img/warning.png' alt='warn' class='warn'><span id='title2_c'>具汽車駕照，並能實際上路</span></div><p id='content'>尚未有汽車駕照，但已報名8/29梯次駕訓班，並會努力練習，有信心順利拿取駕照。<div id='line_center' style='margin-top:10px;'><img src='./img/tick-mark.png' alt='yes' class='yes'><span id='title2_c'>對運動充滿熱情，具備高抗壓性</span></div><p id='content'>可以，喜愛各項運動，喜歡具有挑戰性的工作，對於壓力有自己抒發的方式，不會為工作帶來困擾。</p></div>"
        close_is_clicked()
    })
}

function clubEx(){
    let clubEx=document.querySelector('.club-ex')
    clubEx.addEventListener('click',function(){
        info.style="display:block;"
        title.innerHTML="社團經歷"
        content.innerHTML="<div id='text_bar'><p id='title'>【高中管樂社】</p><div id='line_center'><span id='tag'>◆</span><sapn id='title2_c'>擔任幹部：</span><span id='content'>資訊</span></div><div id='line_center'><span id='tag'>◆</span><span id='title2_c'>工作內容：</span></div><p id='content'>負責處理日常團練器材、製作送舊影片、與社團幹部共同計畫社團活動，如：迎新、送舊、慶生等等。</p><div id='line_center'><span id='tag'>◆</span><span id='title2_c'>實際經歷：</span></div><p id='content'>第一屆嘉義五校聯合音樂會、年度嘉義高商成果發表音樂會、年度音樂比賽嘉義區特優。</p><p id='title'>【大學排球系隊】</p><div id='line_center'><span id='tag'>◆</span><span id='title2_c'>擔任幹部：</span><span id='content'>隊長</span></div><div id='line_center'><span id='tag'>◆</span><span id='title2_c'>工作內容：</span></div><p id='content'>處理日常練球帶隊事務、球隊各項行政工作，如：報名比賽、協調用場時間等、計畫球隊各項活動，如：迎新、送舊、系友盃。</p><div id='line_center'><span id='tag'>◆</span><span id='title2_c'>實際經歷：</span></div><p id='content'>第15屆南資盃第三名、第14屆系友盃籌辦。</p><div id='img'><img src='./img/club2.jpg' alt='系友盃'><p>▲第14屆資管系系友盃成果合照</p></div></div>"
        close_is_clicked()
    })
}

function jobEx(){
    let jobEx=document.querySelector('.job-ex')
    jobEx.addEventListener('click',function(){
        info.style="display:block;"
        title.innerHTML="工作經驗"
        content.innerHTML="<div id='text_bar'><p id='content'>在求學階段嘗試參與不同工作，喜歡累積在不同性質的工作中獲取更多的經驗。</p><div id='line_center' style='margin-top:10px;'><span id='tag'>1.</span><span id=title2_c>工廠作業人員：</span></div><p id='content'>高中畢業暑假時在食品工廠擔任蛋捲製作人員，了解自己身體的耐受性、專注眼前工作、與同事在工作過程中互相幫助、合作使產線順利進行。</p><div id='line_center' style='margin-top:10px;'><span id='tag'>2.</span><span id='title2_c'>文件處理人員：</span></div><p id='content'>大學一年級時在學校處理過畢業生工作趨勢報告，讓我更加熟悉文書軟體作業，並學會思考怎樣的報告會讓人看起來舒服、好閱讀。</p><div id='line_center' style='margin-top:10px;'><span id='tag'>3.</span><span id='title2_c'>餐飲服務人員：</span></div><p id='content'>大學三、四年級時在燒肉店擔任外場服務人員，除了必有的點餐、送餐、訂位等服務，我也學會以客人的角度看事情、考量客人情緒做出適當的回應。</p></div>"
        close_is_clicked()
    })
}

function close_is_clicked(){
    close.addEventListener('click',function(){
        info.style.display="none"
    })
}



