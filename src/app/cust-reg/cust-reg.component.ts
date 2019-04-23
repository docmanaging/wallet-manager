import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/wallet.service';
import { first } from 'rxjs/operators';
@Component({
    selector: 'app-cust-reg',
    templateUrl: './cust-reg.component.html',
    styleUrls: ['./cust-reg.component.css']
})
export class CustRegComponent implements OnInit {
    
    compInfoGroup: FormGroup;
    personalInfoGroup: FormGroup;
    tradingAddressGroup: FormGroup;
    securityInfoGroup: FormGroup;
    submitted = false;
    Submitted2 = false;
    error: any;
    Status: string;
    CustomerCode; string;
    SuccessMessage: string;

    securityquestion = new FormControl();

    options: string[] = ['Please select Question 1', 'Please select Question 2', 'Please select Question 3'];

    step = 0;

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    constructor(private formBuilder: FormBuilder,
        private router: Router,
    private WalletService: WalletService,
)
    { }

    ngOnInit() {
        this.compInfoGroup = this.formBuilder.group({
            companyName: ['', Validators.required],
            companyRegNumber: [''],
            webSiteAddress: [''],
            contactNumber: [''],

            yourName: ['', Validators.required],
            role: ['', Validators.required],
            yourEmailAddress: ['', [Validators.required, Validators.email]],
            yourContactNumber: ['', Validators.required],
            formPostCode: ['', Validators.required],
            yourDeskNumber: [''],
            securityQuestion: ['', Validators.required],
            securityAnswer: ['', Validators.required],         
           
            Password: [''],
        });

        this.personalInfoGroup = this.formBuilder.group({
           

            yourName: ['', Validators.required],
            role: ['', Validators.required],
            yourEmailAddress: ['', [Validators.required, Validators.email]],
            yourContactNumber: ['', Validators.required],
            formPostCode: ['', Validators.required],
            yourDeskNumber: [''],
            //securityQuestion: ['', Validators.required],
            //securityAnswer: ['', Validators.required],

            //Password: [''],
        });

        this.tradingAddressGroup = this.formBuilder.group({
            RoadNo: ['', Validators.required],
            addressLine1: ['', Validators.required],
            townCityName: ['', Validators.required],
            stateCountryName: ['', Validators.required],
            countryName: ['', Validators.required],
            postCode: ['', Validators.required],
            addressLine2: [''],

            RegRoadNo: [''],
            RegaddressLine1: [''],
            RegaddressLine2: [''],
            RegtownCityName: [''],
            RegstateCountryName: [''],
            RegcountryName: [''],
            RegpostCode: [''],
        });


        this.securityInfoGroup = this.formBuilder.group({
            
            securityQuestion: ['', Validators.required],
            securityAnswer: ['', Validators.required],

            Password: [''],
        });
    }

    // on Submitting Register button
    onSubmitTradingInfo() {
        debugger;
        this.Submitted2 = true;
   
       // if (this.tradingAddressGroup.invalid) {
     //       return;
     //   }
      //  else {
            this.WalletService.customerRegService(JSON.stringify(this.compInfoGroup.value))
                .pipe(first())
                .subscribe(data => {
                    this.Status = data.Status;
                    this.CustomerCode = data.CustomerCode;
                    this.SuccessMessage = data.SuccessMessage;
                    this.router.navigate(['/ClientReg2']);
                    alert("Your Customer Id is :" + (this.CustomerCode));
                }, error => (this.error = error));

       // }

       


    }

    addressChecked($event) {
       // debugger
      //  if ($event.target.checked) {
           // this.tradingAddressGroup.patchValue({
            RegRoadNo: this.tradingAddressGroup.value.RoadNo;
            RegaddressLine1: this.tradingAddressGroup.value.addressLine1;
            RegaddressLine2: this.tradingAddressGroup.value.addressLine2;
            RegtownCityName: this.tradingAddressGroup.value.townCityName;
            RegstateCountryName: this.tradingAddressGroup.value.stateCountryName;
            RegcountryName: this.tradingAddressGroup.value.countryName;
            RegpostCode: this.tradingAddressGroup.value.postCode;
            //})
     //   }
        //else {
        //    this.tradingAddressGroup.patchValue({
        //        RegRoadNo: '',
        //        RegaddressLine1: '',
        //        RegaddressLine2: '',
        //        RegtownCityName: '',
        //        RegstateCountryName: '',
        //        RegcountryName: '',
        //        RegpostCode: '',
        //    })
        //}
    }

}