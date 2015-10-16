

angular.module('th.constants').constant('API_RESOURCES', (function () {


    var ApiEndPath = "";
    var HomePage = "";

    ApiEndPath = "http://themifycloud.com/vod-api/";

    if ( window.location.hostname === "localhost" )
    {
        ApiEndPath = "http://localhost/vod-api/index.php/";
    }


    return {
		
        REGISTER: ApiEndPath + 'register',
        LOGIN: ApiEndPath + 'login',
		SAVEVIDEOS: ApiEndPath + 'save_videos',
		GETDbVIDEOS: ApiEndPath + 'get_videos',
		GETVIDEOS: 'http://apistaging.talentedhuman.com/index.php/user_specfic_posts'
  
    };

})());