var main = function()
{
    //觸發post按鈕
    $('.btn').click(function()
    {
       //宣告post來儲存內容 
       var post = $('.status-box').val();
       
       //利用.text()增加框框內的元件
       //利用.prependto()將內容顯示在最上層
       $('<li>').text(post).prependTo('.posts');
       
       //.val(''); 清除狀態列
       $('.status-box').val('');
       
       //設定字數為140字
       $('counter').text('140');
       
    
       $('.btn').addClass('disabled');
    });
    
    //狀態列
    $('.status-box').keyup(function()
    {
        var postLength = $(this).val().length;
        var charactersLeft = 140 - postLength;
        
        //$('.counter')更新元件狀態列
        $('.counter').text(charactersLeft);
        
        if(charactersLeft < 0)
        {
            $('.btn').addClass('disabled');    
        }
        else if(charactersLeft == 140)
        {
            $('.btn').addClass('disabled');    
        }
        else
        {
            $('.btn').removeClass('disabled');    
        }
        
    });
    
    $('.btn').addClass('disabled');
}

$(document).ready(main);

