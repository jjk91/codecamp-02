export default function test2Page() {
  // window.onload = function () {
  //   window.scroll = function () {
    $(window).onload,function() {
      $(window).scroll(function() {
      let windowBottom = $(this).scrollTop() + $(this).innerHeight();
      $(".fade").each(function () {
        /* Check the location of each desired element */
        let objectBottom = $(this).offset().top + $(this).outerHeight();

        /* If the element is completely within bounds of the window, fade it in */
        if (objectBottom < windowBottom) {
          //object comes into view (scrolling down)
          if ($(this).css("opacity") == 0) {
            $(this).fadeTo(500, 1);
          }
        } else {
          //object goes out of view (scrolling up)
          if ($(this).css("opacity") == 1) {
            $(this).fadeTo(500, 0);
          }
        }
      });
    }.scroll(); //invoke scroll-handler on page-load
  };
  return (
    <div>
      <div class="fade">Fade In 01</div>
      <div class="fade">Fade In 02</div>
      <div class="fade">Fade In 03</div>
      <div class="fade">Fade In 04</div>
      <div class="fade">Fade In 05</div>
      <div class="fade">Fade In 06</div>
      <div class="fade">Fade In 07</div>
      <div class="fade">Fade In 08</div>
      <div class="fade">Fade In 09</div>
      <div class="fade">Fade In 10</div>
    </div>
  );
}
