

angular.module('th.Profiling').controller('home', ['$scope', 'API_RESOURCES', 'ServerRequest', '$http','$cookies','UrlConverter','$sce',   function($scope, AR, SR,$http,$cookies,UC,$sce){


 
	var userinfo=$cookies.get('username');
	
		//////=== Get Db Videos of Current User====////////////
	
	    var getDbVidkeosObj ={
			"email": userinfo    //userinfo
    }
	
	    SR.sendPostData(AR.GETDbVIDEOS, getDbVidkeosObj)
        .success(function(data,status,headers,config){
			 $scope.allVideos = {};
			            var i = 0;
            angular.forEach(data.data, function (dataSource) {

                var sourceObj = $scope.trustSrc(dataSource.videopath);
                data.data[i].videopath = sourceObj;

                i++;
            });
			$scope.allVideos = data.data;
			console.log("chek coming videos",$scope.allVideos);
		});
		
		
		
	/*$('body').trigger('click');
	$( "body" ).on( "click", ".fancybox-wrap ", function( event ) {
		
		setTimeout(function(){ 
		var myVideo = $("#img-popup.ab video");
	 console.log("video value",myVideo[0]);
	 */
			
	//$( "body" ).on( "click", ".fancybox-wrap", function( event ) {
    $('body').click('#getvid',function(){

      
        //var videocontainer = '#video-clip';
        //$(videocontainer).on('play', function() {

            
            
			var poster = document.getElementById('video-clip').getAttribute('poster');
			var srcUrl = document.getElementById('mp4').getAttribute('src');
            console.log("poster",poster);
			console.log("poster",srcUrl);
			
			var temp = '<video id="video-clip" style="width: 100%;" poster="http://media.w3.org/2010/05/sintel/poster.png" preload="none" controls="" id="video" tabindex="0">';
			    temp +='<source type="video/mp4" src="'+srcUrl+'" id="mp4"> </source>';
				temp +='</video>';
			$('#video_append').append(temp);
			//userinfo
			var saveVideoObj ={
				email:userinfo,
				videopath:srcUrl,
				imagepath:poster
			}
		SR.sendPostData(AR.SAVEVIDEOS, saveVideoObj)
        .success(function(data,status,headers,config){
			
			console.log("video saved",data);
		})
            console.log("video clicked",this);

       // });

    });




    //jQuery(document).on('click','.outerdiv', function(){
    //
    //
    //    video.addEventListener('playing', function(){
    //        $('.text').fadeOut();
    //    })
    //    if(!(video.video.paused)){
    //        alert("okkk");
    //    }
    //    //if (this.paused) {
    //    //    alert("video is paused");
    //    //} else {
    //    //    alert("video is played");
    //    //    //console.log("current playing source",video.video.currentSrc);
    //    //    console.log("current playing source",this);
    //    //}
    //});

	

	
	
	

    $scope.trustSrc = function(src) {
        return $sce.trustAsResourceUrl(src);
    }
    $scope.allVideosData = {};

	
    var videosOBJ ={
        from: 0,
        post_type: "video",
        sessiontoken: "$2y$10$cCzVQiXqnzb3.PV5WGaaBOXY4e5aXtWpvyo2JkokTwOHRKQ.ri3aW",
        to: 10,
        user_id: "56136761c736767d348b4567",
        username: "mimran"
    }

    //$.get('https://demo2697834.mockable.io/movies')
    SR.sendPostData(AR.GETVIDEOS, videosOBJ)
        .success(function(data,status,headers,config){
        console.log("wats up",data);
            var i = 0;
            angular.forEach(data.responseData, function (dataSource) {

                var sourceObj = $scope.trustSrc(dataSource.sourcepath);
                data.responseData[i].sourcepath = sourceObj;

                i++;
            });



            $scope.allVideosData = data.responseData;
            console.log("data",$scope.allVideosData);
        })

    .error(function () {

    });



    //var videogularApi ='';
    //$scope.onPlayerReady = function(API) {
    //
    //    //console.log("value of current ",API.currentState);
    //    videogularApi = API;
    //};



//$scope.onClickOverlayPlay = function () {
//
//    console.log("Current Time",$scope.currentTime);
//    console.log("video played",$scope.timeLeft);
//
//};
    //$scope.config = {
    //    preload: "none",
    //    sources: [
    //        {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.mp4"), type: "video/mp4"}
    //    ],
    //    tracks: [
    //        {
    //            src: "pale-blue-dot.vtt",
    //            kind: "subtitles",
    //            srclang: "en",
    //            label: "English",
    //            default: ""
    //        }
    //    ],
    //    theme: {
    //        url: "http://www.videogular.com/styles/themes/default/latest/videogular.css"
    //    }
    //};


}]);