
/// fetching resent feed from instagram and checks if the device is mobile builds slider for mobile,
// else just creates div for to showcase in the desktop

export default function () {

  $.get( "https://www.instagram.com/skylarking_silver/?__a=1", function(data) {
        // console.log(data.graphql.user.edge_owner_to_timeline_media.edges);
    }).done(function(data) {
      const forLoop = data.graphql.user.edge_owner_to_timeline_media.edges;

      if (document.documentElement.clientWidth < 551) {
          let slideContent="";
          $.each(forLoop, function(index, value) {
              let altCap= value.node.edge_media_to_caption.edges[0].node.text;
              if(index !== 5) {
                  slideContent += '<div class="instaCarousel-slide instagram__feed--item " >';
                  slideContent += '<img src="' + value.node.thumbnail_resources[0].src + '" alt=" ' + altCap + '">';
                  slideContent += '</div>';
              } else{
                  return false
              }
          });
          $('.instaCarousel').html(slideContent);
      const $instaCarousel= $('[data-slick-insta]');
      $instaCarousel.slick({
          dots: false,
          variableWidth: true,
          arrows:false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          touchMove:false,
      });

      } else {

          let photoHTML="";
          $.each(forLoop, function(index, value) {
              let altCap= value.node.edge_media_to_caption.edges[0].node.text;
              if(index !== 5) {
                  photoHTML += '<div class="instagram__feed--item">';
                  photoHTML += '<img src="' + value.node.thumbnail_resources[1].src  + '" alt=" ' + altCap + '">';
                  photoHTML += '</div>';
              } else{
                  return false
              }
          });
          $('.instagram__feed').html(photoHTML);

             }

        });




}