window.onload = function(){
    //배너 슬라이드


    let main_btn_prev = document.querySelector(".main_btn_prev")
    let main_btn_next = document.querySelector(".main_btn_next")
    let main_train = document.querySelector(".main_train")
    let main_cur_slide = document.querySelector(".main_cur_slide")
    let main_count = 0
    
    main_btn_next.addEventListener("click",function(){
        main_count ++
        if (main_count>1){main_count=0}
        main_train.style.transform = `translateX(${main_count* -50}%)`
        main_cur_slide.innerHTML = 1+main_count
        
    })
    main_btn_prev.addEventListener("click",function(){
        main_count --
        if (main_count<0){main_count=1}
        main_train.style.transform = `translateX(${main_count* -50}%)`
        main_cur_slide.innerHTML = 1+main_count
    })
    
    
    //브랜드 서포트 슬라이드

    let brand_support_train = document.querySelector(".brand_support_train")
    let brand_support_btn_prev = document.querySelector(".brand_support_station .story_slider_ctl>.prev")
    let brand_support_btn_next = document.querySelector(".brand_support_station .story_slider_ctl>.next")
    let brand_menu_title_frame = document.querySelector(".brand_support_station .menu_title_frame>.on")
    let brand_support_count = 0
    
    brand_support_btn_next.addEventListener("click",function(){
        brand_support_count ++
        if (brand_support_count > 3){ brand_support_count=0}
        brand_support_train.style.transform =`translateX(${-25*brand_support_count}%)`
        brand_menu_title_frame.innerHTML = brand_support_count+1
    })

    brand_support_btn_prev.addEventListener("click",function(){
        brand_support_count --
        if (brand_support_count < 0){ brand_support_count=3}
        brand_support_train.style.transform =`translateX(${-25*brand_support_count}%)`
        brand_menu_title_frame.innerHTML = brand_support_count+1
    })
    
    

}
