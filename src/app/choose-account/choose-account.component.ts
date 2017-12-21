import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../user/user.service';
import { User } from '../user/user.model';
import { ServiceResponse } from '../user/service-response.model';
import {Router, RouterModule  } from "@angular/router" 
import {RegisterUserService} from '../user/register-user.service'
import {RegisterUser} from "../user/register-user.model"


@Component( {
    selector: 'choose-account',
    templateUrl: './choose-account.component.html',
})
export class ChooseAccountComponent implements OnInit {

    userprofileForm: FormGroup;
    userCredentialForm: FormGroup;
    currentUser: User
    errors: string[] = [];
    showPasswordDialog: boolean;
    submitted: boolean;
    submittedPassword: boolean;
    
    googleAuth = {
                  enabled:true,
                  url:"https://test"
    };
    
    gitHubAuth = {
                  enabled:true,
                  url:"https://test"
    };
    
    globusAuth = {
                  enabled:true,
                  url:"https://test"
    };
    
    localAccount = {
                    enabled:true,
    };
    
    
    
    messageBoard = {
                    showMessage: false,
                    'message': '',
                    styleClass:{'alert':true,
                                 'alert-success':true,
                                 'alert-danger':false
                                }
    };
    
    passwordMessageBoard = {
                    showMessage: false,
                    'message': '',
                    styleClass:{'alert':true,
                                 'alert-success':true,
                                 'alert-danger':false
                                }
    };
    
    
    
    private validationMessages = {
        'emailAddress': {
            'required': 'Email address is required.',
            'email': 'Please enter a valid email address.'
        }
    };

    constructor(private registerUserService: RegisterUserService, private router: Router){

        
    }
    
   
    
    ngOnInit() {
        
    
    }

    ngAfterViewInit() {

    }
    
    
    registerLocal()
    {
        this.registerUserService.registerUser.authenticationMethod = "LOCAL";
        this.router.navigate(['register']);
        
    }
}