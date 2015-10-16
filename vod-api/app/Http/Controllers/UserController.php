<?php

namespace App\Http\Controllers;

use \Auth;
use \Response;
use \Schema;
use \DB;
use \Hash;
use \Input;
use App\Follwers;
use App\User;
use \Intervention\Image\Facades\Image;
use Carbon\Carbon;

class UserController extends Controller {
    /*
      |--------------------------------------------------------------------------
      | Welcome Controller
      |--------------------------------------------------------------------------
      |
      | This controller renders the "marketing page" for the application and
      | is configured to only allow guests. Like most of the other sample
      | controllers, you are free to modify or remove it as you desire.
      |
     */

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
        $this->middleware('guest');
    }

    /**
     * Show the application welcome screen to the user.
     *
     * @return Response
     */

    public function login() {
        
        $alldata = (json_decode(file_get_contents('php://input')));
        if (isset($alldata->email) && isset($alldata->password)) {
			
			Auth::logout();
			$pwd = Hash::make($alldata->password);
			//echo 'password is'.$pwd;
			
			//var_dump (DB::select("select * from users where email = '$alldata->email' and password = 'Hash::make($alldata->password)'" ));
            
			
			if (Auth::attempt(['email' => $alldata->email , 'password' => $alldata->password ])) {
                    return Response::json([ 'status' => 'success', 'SuccessMessage' =>'Login Successfully']);
                
            } else {
                return Response::json([ 'status' => 'error', 'ErrorMessage' => 'Ivalid email or password']);
            }
        } else {
            return Response::json([ 'status' => 'error', 'ErrorCode' => '1000', 'ErrorMessage' => 'All Param Are Required']);
        }
    }

    public function register() {
		
        $alldata = (json_decode(file_get_contents('php://input')));
		
        if (isset($alldata->email) && isset($alldata->password)) {
            $checkemail = DB::table('users')->where('email', '=', $alldata->email)->get();
            if ($checkemail) {
                return Response::json(['status' => 'error', 'ErrorMessage' => 'Email Already exist', 'ErrorCode' => '1001']);
            }
           else {
                $user = new \App\User;
                $user->email = $alldata->email;
                $user->password = bcrypt($alldata->password);
                $user->save();
            }
            return Response::json([ 'status' => 'success', 'SuccessMessage' => 'Register Sussfully', 'Success_Token' => '102', 'Success_Token' => '102']);
        } else {
            return Response::json([ 'status' => 'error', 'ErrorCode' => '1000', 'ErrorMessage' => 'All Param Are Required']);
        }
    }
    
    public function save_videos() {
		
        $alldata = (json_decode(file_get_contents('php://input')));
		
        $videos= new \App\Videos;
        $videos->email=$alldata->email;
        $videos->videopath=$alldata->videopath;
        $videos->imagepath=$alldata->imagepath;
        $videos->save();
        return Response::json([ 'status' => 'success','ErrorMessage' => 'Video Saved']);
    }
    public function get_videos() {
        $alldata = (json_decode(file_get_contents('php://input')));
		
        $videos= \App\Videos::where('email',$alldata->email)->get();
		//print_r($videos); exit();
        return Response::json([ 'status' => 'success','SuccessMessage' => 'Saved Videos','data'=>$videos]);
    }
    
}
