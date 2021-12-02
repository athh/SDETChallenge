module.exports = {
    elements: {
        menu_bar:{
            selector: '.c-uhfh-gcontainer-st'
        },        
        windowsOS_menu:{
            selector: '#c-shellmenu_56'
        },
        windows10_menu:{
            selector: '#uhf-navbtn-c-shellmenu_63-button'
        },        
        windows10_submenu:{
            selector: '//*[@id="uhf-g-nav"]/ul/li[2]/div/ul/li[1]/ul'
        },
        search_button:{
            selector: '#search'
        },
        search_input:{
            selector: '#cli_shellHeaderSearchInput'
        },
        search_results:{
            selector: '#universal-header-search-auto-suggest-ul'
        },
        first_result:{
            selector: '#universal-header-search-auto-suggest-ul > li'
        },
        close_button:{
            selector: '//*[@id="geo-selector-modal"]/div/div/div[1]/button[1]'
        },
        checkout_first_price:{
            selector: '//*[@id="store-cart-root"]/div/div/div/section[1]/div/div/div/div/div/div[2]/div[2]/div[2]/div/span/span[1]',
            locateStrategy: 'xpath' 
        },
        second_price:{
            selector: '//*[@id="rootContainer_BuyBox"]/section/div[1]/div[3]/div/p/span',
            locateStrategy: 'xpath' 
        }
    }
}