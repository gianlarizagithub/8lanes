import { Component, OnInit } from '@angular/core';
import { Suffixname } from '../../models/suffixname/suffixname';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Course } from '../../models/course/course';
import { Transmission } from '../../models/transmission/transmission';
import { Typeofvehicle } from '../../models/typeofvehicle/typeofvehicle';
import { Restrictioncode } from '../../models/restrictioncode/restrictioncode';
import { CreateService } from '../../services/create/create.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent implements OnInit {
applyCourseForm!: FormGroup;
public suffixnamesList!: Suffixname[];
public courseList!: Course[]
public transmissionList!: Transmission[];
public typeofvehicleList!: Typeofvehicle[];
public restrictioncodeList!: Restrictioncode[];
public retrievePhil_Prov_Mun_BarList!: any;
public retrieveProvinceFromRegion!: any;
public retrieveProvinceFromRegionLength: number = 0;
public retrieveCityFromProvince!: any;
public retrieveCityFromProvinceLength: number = 0;
public retrieveBarangayFromCity!: any;
public retrieveBarangayFromCityLength: number = 0;
public restrictioncodeListLength: number = 0;
public retrieveNationalitiesList!:  []
public retrieveCompaniesList!: [];
public retrieveOccupationsList!: [];
public retrieveBirthplacePhil_Prov_Mun_BarList!: any;
public retrieveBirthplaceProvinceFromRegion!: any;
public retrieveBirthplaceProvinceFromRegionLength: number = 0;
public retrieveBirthplaceCityFromProvince!: any;
public retrieveBirthplaceCityFromProvinceLength: number = 0;
public retrieveBirthplaceBarangayFromCity!: any;
public retrieveBirthplaceBarangayFromCityLength: number = 0;
public retrieveParentGurdianPhil_Prov_Mun_BarList!: any;
public retrieveParentGurdianProvinceFromRegion!: any;
public retrieveParentGurdianProvinceFromRegionLength: number = 0;
public retrieveParentGurdianCityFromProvince!: any;
public retrieveParentGurdianCityFromProvinceLength: number = 0;
public retrieveParentGurdianBarangayFromCity!: any;
public retrieveParentGurdianBarangayFromCityLength: number = 0;
public disabledSubmitButton: boolean = false;
public currentuserloggedinobject: any;
constructor( private formBuilder: FormBuilder, private authService: AuthService, private createService: CreateService) 
{
  this.applyCourseFormBuilder()
}
get f() {
  return this.applyCourseForm.controls;
}
  async ngOnInit()
  {  
    await this.retrievSuiffxNameLogic();
    await this.retrieveRegionProvinceCityBarangayLogic();
    await this.retrieveCourseLogic();
    await this.retrieveTransmissionLogic();
    await this.retrieveTypeofVehicleLogic();
    this.typeofvehicleOnChangeEvent();
    await this.retrieveNationalitiesLogic();
    await this.retrieveCompaniesLogic();
    await this.retrieveOccupationsLogic();
    await this.retrieveBirthplaceRegionProvinceCityBarangayLogic();
    await this.retrieveParentGurdianRegionProvinceCityBarangayLogic();
    this.currentuserloggedinobject = this.authService.getCurrentUserLoggedInObject()
  }
applyCourseFormBuilder() 
{ 
this.applyCourseForm  = this.formBuilder.group
({
  course: ['', Validators.required],
  transmission: ['', Validators.required],
  typeofvehicle: ['', Validators.required],
  restrictioncode: ['', Validators.required],
  lastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
  firstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
  suffixname: [''],
  middlename: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
  address: [''],
  region: ['', Validators.required],
  province: ['', Validators.required],
  city: ['', Validators.required],
  barangay: ['', Validators.required],
  emailaddress: ['', [Validators.required, Validators.email]],
  facebookaccount: ['', Validators.required],
  contactno: ['', [Validators.required, Validators.pattern('(09)[0-9 ]{9}')]],
  nationality: ['', Validators.required],
  sex: ['', Validators.required],
  civilstatus: ['', Validators.required],
  company: ['', Validators.required],
  occupation: ['', Validators.required],
  birthdate: ['', Validators.required],
  birthplaceregion: ['', Validators.required],
  birthplaceprovince: ['', Validators.required],
  birthplacecity: ['', Validators.required],
  birthplacebarangay: ['', Validators.required],
  parentlastname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
  parentfirstname: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
  parentmiddlename: ['', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]],
  parentcontactno: ['', [Validators.required, Validators.pattern('(09)[0-9 ]{9}')]],
  parentsuffixname: [''],
  parentaddress: [''],
  parentregion: ['', Validators.required],
  parentprovince: ['', Validators.required],
  parentcity: ['', Validators.required],
  parentbarangay: ['', Validators.required],
  userid: [this.authService.getCurrentUserLoggedInObject().uid],
  status: ['Pending'],
  dateapplied: [new Date()],
  paid: [false],
  dateset: [new Date()]
})
}
async retrievSuiffxNameLogic() 
{
  this.suffixnamesList = await this.retrieveSuffixName();
  this.suffixnamesList = this.suffixnamesList.sort((a, b) => {return  a.name < b.name ? -1 : 0});
}
async retrieveSuffixName() 
{
  const retrievesuffixnameresponse = await fetch('assets/suffixname/suffixnames.json');
  return await retrievesuffixnameresponse.json();
}
async retrievePhil_Prov_Mun_Bar() 
{
  const retrievePhil_Prov_Mun_BarResponse = await fetch('assets/phil&prov&mun&bar/phil_prov_mun_bar.json');
  return await retrievePhil_Prov_Mun_BarResponse.json();
}
async retrieveRegionProvinceCityBarangayLogic() 
{
  const retrievePhil_Prov_Mun_BarList = await this.retrievePhil_Prov_Mun_Bar(); 
  var getretrievePhil_Prov_Mun_BarListObjectEntries = []
  var getretrievePhil_Prov_Mun_BarListObjectEntriesValueList: any[] = []
  for (let [key, value] of Object.entries(retrievePhil_Prov_Mun_BarList)) 
  {
    var getretrievePhil_Prov_Mun_BarListObjectEntriesValue = value as any;
    getretrievePhil_Prov_Mun_BarListObjectEntries.push({key: getretrievePhil_Prov_Mun_BarListObjectEntriesValue});
  }
  for (let fe of getretrievePhil_Prov_Mun_BarListObjectEntries) 
  {
    getretrievePhil_Prov_Mun_BarListObjectEntriesValueList.push(fe.key);
  }
  this.retrievePhil_Prov_Mun_BarList = getretrievePhil_Prov_Mun_BarListObjectEntriesValueList.sort((a, b) => {return a.region_name < b.region_name ? -1 : 0})


  var selectRegionOnChangeIdAttribute = document.getElementById('selectRegion') as any;
  
  var selectProvinceOnChangeIdAttribute = document.getElementById('selectProvince') as any;

  var selectCityOnChangeIdAttribute = document.getElementById('selectCity');
  
  
  await selectRegionOnChangeIdAttribute?.addEventListener('change', (event: any) => 
  {
    const RegionEventValue = event.target.value
   
    if (RegionEventValue == "") 
    {
      this.retrieveBarangayFromCity = []
      this.retrieveBarangayFromCityLength = 0 

      
      this.retrieveCityFromProvince = []
      this.retrieveCityFromProvinceLength = 0 


      
      this.retrieveProvinceFromRegion = []
      this.retrieveProvinceFromRegionLength = 0 


      this.f['province'].setValue("");
      this.f['city'].setValue("");
      this.f['barangay'].setValue("");

    }
    else 
    {
    this.retrieveProvinceFromRegion = this.retrievePhil_Prov_Mun_BarList.filter((f: any) => f.region_name == RegionEventValue);
    this.retrieveProvinceFromRegion = this.retrieveProvinceFromRegion.map((e: any) => {return e.province_list})
    this.retrieveProvinceFromRegion = this.retrieveProvinceFromRegion.map((e: any) => {return e})
    this.retrieveProvinceFromRegion = Object.keys(this.retrieveProvinceFromRegion[0]);
    this.retrieveProvinceFromRegionLength = this.retrieveProvinceFromRegion.length     
    this.retrieveCityFromProvince = []
    this.f['province'].setValue("");
    this.retrieveCityFromProvinceLength = 0 
    this.f['city'].setValue("");
    this.retrieveBarangayFromCity = []
    this.retrieveBarangayFromCityLength = 0 
  }
  })
  
  await selectProvinceOnChangeIdAttribute?.addEventListener('change', (event: any) => 
  {
    const ProvinceEventValue = event.target.value;

    if (ProvinceEventValue == "") 
    {
      this.retrieveBarangayFromCity = []
      this.retrieveBarangayFromCityLength = 0 

      
      this.retrieveCityFromProvince = []
      this.retrieveCityFromProvinceLength = 0 

      
      this.f['city'].setValue("");
      this.f['barangay'].setValue("");

    }
    else 
    {
    this.retrieveCityFromProvince = this.retrievePhil_Prov_Mun_BarList.filter((f: any) => f.region_name == selectRegionOnChangeIdAttribute?.value);
    this.retrieveCityFromProvince = this.retrieveCityFromProvince.map((e: any) => {return e.province_list})
    this.retrieveCityFromProvince = this.retrieveCityFromProvince.map((e: any) => {return e[ProvinceEventValue].municipality_list})
    this.retrieveCityFromProvince = Object.keys(this.retrieveCityFromProvince[0])
    this.retrieveCityFromProvinceLength = this.retrieveCityFromProvince.length
    this.retrieveBarangayFromCity = []
    this.retrieveBarangayFromCityLength = 0
    this.f['city'].setValue("");
    this.f['barangay'].setValue("");

  }
  })

  await selectCityOnChangeIdAttribute?.addEventListener('change', (event: any) => 
  {
    const CityEventValue = event.target.value;

    if (CityEventValue == "") 
    {
      this.retrieveBarangayFromCity = []
      this.retrieveBarangayFromCityLength = this.retrieveBarangayFromCity.length 
      this.f['barangay'].setValue("");

    }
    else 
    {
      this.f['barangay'].setValue("");
    this.retrieveBarangayFromCity = this.retrievePhil_Prov_Mun_BarList.filter((f: any) => f.region_name == selectRegionOnChangeIdAttribute?.value);
    this.retrieveBarangayFromCity = this.retrieveBarangayFromCity.map((e: any) => {return e.province_list})
    this.retrieveBarangayFromCity = this.retrieveBarangayFromCity.map((e: any) => {return e[selectProvinceOnChangeIdAttribute?.value].municipality_list})
    this.retrieveBarangayFromCity = this.retrieveBarangayFromCity.map((e: any) => {return e[CityEventValue]})
    this.retrieveBarangayFromCity = this.retrieveBarangayFromCity[0].barangay_list
    this.retrieveBarangayFromCityLength = this.retrieveBarangayFromCity.length
    }
  })
}
async retrieveCourse() 
{
  const retrieveCourseResponse = await fetch('assets/course/course.json');
  return await retrieveCourseResponse.json();
}
async retrieveCourseLogic() 
{
  this.courseList = await this.retrieveCourse();
  this.courseList = this.courseList.sort((a, b) => {return  a.CourseName < b.CourseName ? -1 : 0});
}
onSubmit() 
{
  if (this.applyCourseForm.valid) 
  {
    this.disabledSubmitButton = true;
  
    this.createService
      .addNewAppliedCourse(this.applyCourseForm.value)
      .then((el) => {
        alert('Applied Successfully!');
        this.applyCourseForm.reset();
        this.disabledSubmitButton = false;
      })
      .catch((err) => {
        alert(JSON.stringify(err));
        this.disabledSubmitButton = false;
      });
  } 
  else 
  {
    this.validateAllFormFields(this.applyCourseForm);
  }
  
}
async retrieveTransmission() 
{
  const retrieveTransmissionResponse = await fetch('assets/transmission/transmission.json');
  return await retrieveTransmissionResponse.json();
}
async retrieveTransmissionLogic() 
{
  this.transmissionList = await this.retrieveTransmission();
  this.transmissionList = this.transmissionList.sort((a, b) => {return  a.Type < b.Type ? -1 : 0});
}
async retrieveTypeofVehicle() 
{
    const retrieveTypeofVehicleResponse = await fetch('assets/vehicle/vehicle.json');
    return await retrieveTypeofVehicleResponse.json();
}
async retrieveTypeofVehicleLogic() 
{
  this.typeofvehicleList = await this.retrieveTypeofVehicle();
  this.typeofvehicleList = this.typeofvehicleList.sort((a, b) => {return  a.Type < b.Type ? -1 : 0});
}
async retrieveRestrictionCode() 
{
  const retrieveRestrictionCodeResponse = await fetch('assets/restrictioncode/restrictioncode.json');
  return await retrieveRestrictionCodeResponse.json();
}
async retrieveRestrictionCodeLogic() 
{
  this.restrictioncodeList = await this.retrieveRestrictionCode();
  if (this.f['typeofvehicle'].value == "" || this.f['typeofvehicle'].value == null || this.f['typeofvehicle'].value == undefined) 
  {
    this.f['restrictioncode'].setValue("");
    this.restrictioncodeList = []
    this.restrictioncodeListLength = 0;
  }
  else {
    this.restrictioncodeList = this.restrictioncodeList.filter(f => f.Type == this.f['typeofvehicle'].value);
    this.restrictioncodeList = this.restrictioncodeList.sort((a, b) => {return  a.Code < b.Code ? -1 : 0});
    this.restrictioncodeListLength = this.restrictioncodeList.length;
    this.f['restrictioncode'].setValue("");
  }

}
 typeofvehicleOnChangeEvent() 
{
  var selectinputTypeofVehicleOnChangeIdAttribute = document.getElementById('selectinputTypeofVehicle');

  selectinputTypeofVehicleOnChangeIdAttribute?.addEventListener('change', async (event: any) => 
  {
    await this.retrieveRestrictionCodeLogic();
  })
}
async retrieveNationalities() 
{
  const retrieveNationalitiesResponse = await fetch('assets/nationalities/nationalities.json');
  return await retrieveNationalitiesResponse.json();
}
async retrieveNationalitiesLogic() 
{
  this.retrieveNationalitiesList = await this.retrieveNationalities();
  this.retrieveNationalitiesList = this.retrieveNationalitiesList.sort((a, b) => {return  a < b ? -1 : 0});   
}
async retrieveCompanies() 
{
    const retrieveCompaniesResponse = await fetch('assets/companies/companies.json');
    return await retrieveCompaniesResponse.json();
}
async retrieveOccupations() 
{
  const retrieveOccupationsResponse = await fetch('assets/occupation/occupation.json');
  return await retrieveOccupationsResponse.json();
}
async retrieveCompaniesLogic() 
{
  this.retrieveCompaniesList = await this.retrieveCompanies();
  this.retrieveCompaniesList = this.retrieveCompaniesList.sort((a, b) => {return  a < b ? -1 : 0});  
}
async retrieveOccupationsLogic() 
{
  this.retrieveOccupationsList = await this.retrieveOccupations();
  this.retrieveOccupationsList = this.retrieveOccupationsList.sort((a, b) => {return  a < b ? -1 : 0});  
}
toSentenceCase(str: any) {
  return str.replace(
      /\w\S*/g,
      function (txt: any) {
          return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
  );
}
async retrieveBirthplaceRegionProvinceCityBarangayLogic() 
{
  const retrievePhil_Prov_Mun_BarList = await this.retrievePhil_Prov_Mun_Bar(); 
  var getretrievePhil_Prov_Mun_BarListObjectEntries = []
  var getretrievePhil_Prov_Mun_BarListObjectEntriesValueList: any[] = []
  for (let [key, value] of Object.entries(retrievePhil_Prov_Mun_BarList)) 
  {
    var getretrievePhil_Prov_Mun_BarListObjectEntriesValue = value as any;
    getretrievePhil_Prov_Mun_BarListObjectEntries.push({key: getretrievePhil_Prov_Mun_BarListObjectEntriesValue});
  }
  for (let fe of getretrievePhil_Prov_Mun_BarListObjectEntries) 
  {
    getretrievePhil_Prov_Mun_BarListObjectEntriesValueList.push(fe.key);
  }
  this.retrieveBirthplacePhil_Prov_Mun_BarList = getretrievePhil_Prov_Mun_BarListObjectEntriesValueList.sort((a, b) => {return a.region_name < b.region_name ? -1 : 0})


  var selectBirthplaceRegionOnChangeIdAttribute = document.getElementById('selectbirthplaceregion') as any;
  
  var selectBirthplaceProvinceOnChangeIdAttribute = document.getElementById('selectbirthplaceprovince') as any;

  var selectBirthplaceCityOnChangeIdAttribute = document.getElementById('selectbirthplacecity');
  
  
  await selectBirthplaceRegionOnChangeIdAttribute?.addEventListener('change', (event: any) => 
  {
    const RegionEventValue = event.target.value
   
    if (RegionEventValue == "") 
    {
      this.retrieveBirthplaceBarangayFromCity = []
      this.retrieveBirthplaceBarangayFromCityLength = 0 

      
      this.retrieveBirthplaceCityFromProvince = []
      this.retrieveBirthplaceCityFromProvinceLength = 0 


      
      this.retrieveBirthplaceProvinceFromRegion = []
      this.retrieveBirthplaceProvinceFromRegionLength = 0 


      this.f['birthplaceprovince'].setValue("");
      this.f['birthplacecity'].setValue("");
      this.f['birthplacebarangay'].setValue("");

    }
    else 
    {
    this.retrieveBirthplaceProvinceFromRegion = this.retrieveBirthplacePhil_Prov_Mun_BarList.filter((f: any) => f.region_name == RegionEventValue);
    this.retrieveBirthplaceProvinceFromRegion = this.retrieveBirthplaceProvinceFromRegion.map((e: any) => {return e.province_list})
    this.retrieveBirthplaceProvinceFromRegion = this.retrieveBirthplaceProvinceFromRegion.map((e: any) => {return e})
    this.retrieveBirthplaceProvinceFromRegion = Object.keys(this.retrieveBirthplaceProvinceFromRegion[0]);
    this.retrieveBirthplaceProvinceFromRegionLength = this.retrieveBirthplaceProvinceFromRegion.length     
    this.retrieveBirthplaceCityFromProvince = []
    this.f['birthplaceprovince'].setValue("");
    this.retrieveBirthplaceCityFromProvinceLength = 0 
    this.f['birthplacecity'].setValue("");
    this.retrieveBirthplaceBarangayFromCity = []
    this.retrieveBirthplaceBarangayFromCityLength = 0 
  }
  })
  
  await selectBirthplaceProvinceOnChangeIdAttribute?.addEventListener('change', (event: any) => 
  {
    const ProvinceEventValue = event.target.value;

    if (ProvinceEventValue == "") 
    {
      this.retrieveBirthplaceBarangayFromCity = []
      this.retrieveBirthplaceBarangayFromCityLength = 0 

      
      this.retrieveBirthplaceCityFromProvince = []
      this.retrieveBirthplaceCityFromProvinceLength = 0 

      
      this.f['birthplacecity'].setValue("");
      this.f['birthplacebarangay'].setValue("");

    }
    else 
    {
    this.retrieveBirthplaceCityFromProvince = this.retrieveBirthplacePhil_Prov_Mun_BarList.filter((f: any) => f.region_name == selectBirthplaceRegionOnChangeIdAttribute?.value);
    this.retrieveBirthplaceCityFromProvince = this.retrieveBirthplaceCityFromProvince.map((e: any) => {return e.province_list})
    this.retrieveBirthplaceCityFromProvince = this.retrieveBirthplaceCityFromProvince.map((e: any) => {return e[ProvinceEventValue].municipality_list})
    this.retrieveBirthplaceCityFromProvince = Object.keys(this.retrieveBirthplaceCityFromProvince[0])
    this.retrieveBirthplaceCityFromProvinceLength = this.retrieveBirthplaceCityFromProvince.length
    this.retrieveBirthplaceBarangayFromCity = []
    this.retrieveBirthplaceBarangayFromCityLength = 0
    this.f['birthplacecity'].setValue("");
    this.f['birthplacebarangay'].setValue("");

  }
  })

  await selectBirthplaceCityOnChangeIdAttribute?.addEventListener('change', (event: any) => 
  {
    const CityEventValue = event.target.value;

    if (CityEventValue == "") 
    {
      this.retrieveBirthplaceBarangayFromCity = []
      this.retrieveBirthplaceBarangayFromCityLength = this.retrieveBirthplaceBarangayFromCity.length 
      this.f['birthplacebarangay'].setValue("");

    }
    else 
    {
      this.f['birthplacebarangay'].setValue("");
    this.retrieveBirthplaceBarangayFromCity = this.retrieveBirthplacePhil_Prov_Mun_BarList.filter((f: any) => f.region_name == selectBirthplaceRegionOnChangeIdAttribute?.value);
    this.retrieveBirthplaceBarangayFromCity = this.retrieveBirthplaceBarangayFromCity.map((e: any) => {return e.province_list})
    this.retrieveBirthplaceBarangayFromCity = this.retrieveBirthplaceBarangayFromCity.map((e: any) => {return e[selectBirthplaceProvinceOnChangeIdAttribute?.value].municipality_list})
    this.retrieveBirthplaceBarangayFromCity = this.retrieveBirthplaceBarangayFromCity.map((e: any) => {return e[CityEventValue]})
    this.retrieveBirthplaceBarangayFromCity = this.retrieveBirthplaceBarangayFromCity[0].barangay_list
    this.retrieveBirthplaceBarangayFromCityLength = this.retrieveBirthplaceBarangayFromCity.length
    }
  })
}
async retrieveParentGurdianRegionProvinceCityBarangayLogic() 
{
  const retrievePhil_Prov_Mun_BarList = await this.retrievePhil_Prov_Mun_Bar(); 
  var getretrievePhil_Prov_Mun_BarListObjectEntries = []
  var getretrievePhil_Prov_Mun_BarListObjectEntriesValueList: any[] = []
  for (let [key, value] of Object.entries(retrievePhil_Prov_Mun_BarList)) 
  {
    var getretrievePhil_Prov_Mun_BarListObjectEntriesValue = value as any;
    getretrievePhil_Prov_Mun_BarListObjectEntries.push({key: getretrievePhil_Prov_Mun_BarListObjectEntriesValue});
  }
  for (let fe of getretrievePhil_Prov_Mun_BarListObjectEntries) 
  {
    getretrievePhil_Prov_Mun_BarListObjectEntriesValueList.push(fe.key);
  }
  this.retrieveParentGurdianPhil_Prov_Mun_BarList = getretrievePhil_Prov_Mun_BarListObjectEntriesValueList.sort((a, b) => {return a.region_name < b.region_name ? -1 : 0})


  var selectParentGurdianRegionOnChangeIdAttribute = document.getElementById('selectParentRegion') as any;
  
  var selectParentGurdianProvinceOnChangeIdAttribute = document.getElementById('selectParentProvince') as any;

  var selectParentGurdianCityOnChangeIdAttribute = document.getElementById('selectParentCity');
  
  
  await selectParentGurdianRegionOnChangeIdAttribute?.addEventListener('change', (event: any) => 
  {
    const RegionEventValue = event.target.value
   
    if (RegionEventValue == "") 
    {
      this.retrieveParentGurdianBarangayFromCity = []
      this.retrieveParentGurdianBarangayFromCityLength = 0 

      
      this.retrieveParentGurdianCityFromProvince = []
      this.retrieveParentGurdianCityFromProvinceLength = 0 


      
      this.retrieveParentGurdianProvinceFromRegion = []
      this.retrieveParentGurdianProvinceFromRegionLength = 0 


      this.f['parentprovince'].setValue("");
      this.f['parentcity'].setValue("");
      this.f['parentbarangay'].setValue("");

    }
    else 
    {
    this.retrieveParentGurdianProvinceFromRegion = this.retrieveParentGurdianPhil_Prov_Mun_BarList.filter((f: any) => f.region_name == RegionEventValue);
    this.retrieveParentGurdianProvinceFromRegion = this.retrieveParentGurdianProvinceFromRegion.map((e: any) => {return e.province_list})
    this.retrieveParentGurdianProvinceFromRegion = this.retrieveParentGurdianProvinceFromRegion.map((e: any) => {return e})
    this.retrieveParentGurdianProvinceFromRegion = Object.keys(this.retrieveParentGurdianProvinceFromRegion[0]);
    this.retrieveParentGurdianProvinceFromRegionLength = this.retrieveParentGurdianProvinceFromRegion.length     
    this.retrieveParentGurdianCityFromProvince = []
    this.f['parentprovince'].setValue("");
    this.retrieveParentGurdianCityFromProvinceLength = 0 
    this.f['parentcity'].setValue("");
    this.retrieveParentGurdianBarangayFromCity = []
    this.retrieveParentGurdianBarangayFromCityLength = 0 
  }
  })
  
  await selectParentGurdianProvinceOnChangeIdAttribute?.addEventListener('change', (event: any) => 
  {
    const ProvinceEventValue = event.target.value;

    if (ProvinceEventValue == "") 
    {
      this.retrieveParentGurdianBarangayFromCity = []
      this.retrieveParentGurdianBarangayFromCityLength = 0 

      
      this.retrieveParentGurdianCityFromProvince = []
      this.retrieveParentGurdianCityFromProvinceLength = 0 

      
      this.f['parentcity'].setValue("");
      this.f['parentbarangay'].setValue("");

    }
    else 
    {
    this.retrieveParentGurdianCityFromProvince = this.retrieveParentGurdianPhil_Prov_Mun_BarList.filter((f: any) => f.region_name == selectParentGurdianRegionOnChangeIdAttribute?.value);
    this.retrieveParentGurdianCityFromProvince = this.retrieveParentGurdianCityFromProvince.map((e: any) => {return e.province_list})
    this.retrieveParentGurdianCityFromProvince = this.retrieveParentGurdianCityFromProvince.map((e: any) => {return e[ProvinceEventValue].municipality_list})
    this.retrieveParentGurdianCityFromProvince = Object.keys(this.retrieveParentGurdianCityFromProvince[0])
    this.retrieveParentGurdianCityFromProvinceLength = this.retrieveParentGurdianCityFromProvince.length
    this.retrieveParentGurdianBarangayFromCity = []
    this.retrieveParentGurdianBarangayFromCityLength = 0
    this.f['parentcity'].setValue("");
    this.f['parentbarangay'].setValue("");

  }
  })

  await selectParentGurdianCityOnChangeIdAttribute?.addEventListener('change', (event: any) => 
  {
    const CityEventValue = event.target.value;

    if (CityEventValue == "") 
    {
      this.retrieveParentGurdianBarangayFromCity = []
      this.retrieveParentGurdianBarangayFromCityLength = this.retrieveParentGurdianBarangayFromCity.length 
      this.f['parentbarangay'].setValue("");

    }
    else 
    {
      this.f['parentbarangay'].setValue("");
    this.retrieveParentGurdianBarangayFromCity = this.retrieveParentGurdianPhil_Prov_Mun_BarList.filter((f: any) => f.region_name == selectParentGurdianRegionOnChangeIdAttribute?.value);
    this.retrieveParentGurdianBarangayFromCity = this.retrieveParentGurdianBarangayFromCity.map((e: any) => {return e.province_list})
    this.retrieveParentGurdianBarangayFromCity = this.retrieveParentGurdianBarangayFromCity.map((e: any) => {return e[selectParentGurdianProvinceOnChangeIdAttribute?.value].municipality_list})
    this.retrieveParentGurdianBarangayFromCity = this.retrieveParentGurdianBarangayFromCity.map((e: any) => {return e[CityEventValue]})
    this.retrieveParentGurdianBarangayFromCity = this.retrieveParentGurdianBarangayFromCity[0].barangay_list
    this.retrieveParentGurdianBarangayFromCityLength = this.retrieveParentGurdianBarangayFromCity.length
    }
  })
}


validateAllFormFields(formGroup: FormGroup) {
  Object.keys(formGroup.controls).forEach((field) => {
    const control = formGroup.get(field);
    if (control instanceof FormControl) {
      control.markAsDirty({ onlySelf: true });
    } else if (control instanceof FormGroup) {
      this.validateAllFormFields(control);
    }
  });
}


}
