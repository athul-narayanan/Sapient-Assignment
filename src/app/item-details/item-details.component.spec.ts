import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetailsComponent } from './item-details.component';

import { NgxUiLoaderService } from "ngx-ui-loader"; // Import NgxUiLoaderService
import {SharedServiceService} from './../shared-service.service';
import {of} from 'rxjs';
import {defaultLimit} from './../search-query';

describe('ItemDetailsComponent', () => {
  let service:SharedServiceService;
  let component: ItemDetailsComponent;
  let fixture: ComponentFixture<ItemDetailsComponent>;
  let uiLoader = new NgxUiLoaderService(null);
  beforeEach(async(() => {
    service = new SharedServiceService(null);
    component = new ItemDetailsComponent(service,uiLoader);
  }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(ItemDetailsComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  it('check limit value is set to default',()=>{
     expect(component.searchObj.limit).toEqual(defaultLimit);
  })
  
  it('test item Detsils on ngOnInit', () => {
    const itemList = [
      {
         "flight_number":1,
         "mission_name":"FalconSat",
         "mission_id":[
            
         ],
         "upcoming":false,
         "launch_year":"2006",
         "launch_date_unix":1143239400,
         "launch_date_utc":"2006-03-24T22:30:00.000Z",
         "launch_date_local":"2006-03-25T10:30:00+12:00",
         "is_tentative":false,
         "tentative_max_precision":"hour",
         "tbd":false,
         "launch_window":0,
         "rocket":{
            "rocket_id":"falcon1",
            "rocket_name":"Falcon 1",
            "rocket_type":"Merlin A",
            "first_stage":{
               "cores":[
                  {
                     "core_serial":"Merlin1A",
                     "flight":1,
                     "block":null,
                     "gridfins":false,
                     "legs":false,
                     "reused":false,
                     "land_success":null,
                     "landing_intent":false,
                     "landing_type":null,
                     "landing_vehicle":null
                  }
               ]
            },
            "second_stage":{
               "block":1,
               "payloads":[
                  {
                     "payload_id":"FalconSAT-2",
                     "norad_id":[
                        
                     ],
                     "reused":false,
                     "customers":[
                        "DARPA"
                     ],
                     "nationality":"United States",
                     "manufacturer":"SSTL",
                     "payload_type":"Satellite",
                     "payload_mass_kg":20,
                     "payload_mass_lbs":43,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":null,
                        "eccentricity":null,
                        "periapsis_km":400,
                        "apoapsis_km":500,
                        "inclination_deg":39,
                        "period_min":null,
                        "lifespan_years":null,
                        "epoch":null,
                        "mean_motion":null,
                        "raan":null,
                        "arg_of_pericenter":null,
                        "mean_anomaly":null
                     }
                  }
               ]
            },
            "fairings":{
               "reused":false,
               "recovery_attempt":false,
               "recovered":false,
               "ship":null
            }
         },
         "ships":[
            
         ],
         "telemetry":{
            "flight_club":null
         },
         "launch_site":{
            "site_id":"kwajalein_atoll",
            "site_name":"Kwajalein Atoll",
            "site_name_long":"Kwajalein Atoll Omelek Island"
         },
         "launch_success":false,
         "launch_failure_details":{
            "time":33,
            "altitude":null,
            "reason":"merlin engine failure"
         },
         "links":{
            "mission_patch":"https://images2.imgbox.com/40/e3/GypSkayF_o.png",
            "mission_patch_small":"https://images2.imgbox.com/3c/0e/T8iJcSN3_o.png",
            "reddit_campaign":null,
            "reddit_launch":null,
            "reddit_recovery":null,
            "reddit_media":null,
            "presskit":null,
            "article_link":"https://www.space.com/2196-spacex-inaugural-falcon-1-rocket-lost-launch.html",
            "wikipedia":"https://en.wikipedia.org/wiki/DemoSat",
            "video_link":"https://www.youtube.com/watch?v=0a_00nJ_Y88",
            "youtube_id":"0a_00nJ_Y88",
            "flickr_images":[
               
            ]
         },
         "details":"Engine failure at 33 seconds and loss of vehicle",
         "static_fire_date_utc":"2006-03-17T00:00:00.000Z",
         "static_fire_date_unix":1142553600,
         "timeline":{
            "webcast_liftoff":54
         },
         "crew":null
      },
      {
         "flight_number":2,
         "mission_name":"DemoSat",
         "mission_id":[
            
         ],
         "launch_year":"2007",
         "launch_date_unix":1174439400,
         "launch_date_utc":"2007-03-21T01:10:00.000Z",
         "launch_date_local":"2007-03-21T13:10:00+12:00",
         "is_tentative":false,
         "tentative_max_precision":"hour",
         "tbd":false,
         "launch_window":0,
         "rocket":{
            "rocket_id":"falcon1",
            "rocket_name":"Falcon 1",
            "rocket_type":"Merlin A",
            "first_stage":{
               "cores":[
                  {
                     "core_serial":"Merlin2A",
                     "flight":1,
                     "block":null,
                     "gridfins":false,
                     "legs":false,
                     "reused":false,
                     "land_success":null,
                     "landing_intent":false,
                     "landing_type":null,
                     "landing_vehicle":null
                  }
               ]
            },
            "second_stage":{
               "block":1,
               "payloads":[
                  {
                     "payload_id":"DemoSAT",
                     "norad_id":[
                        
                     ],
                     "reused":false,
                     "customers":[
                        "DARPA"
                     ],
                     "nationality":"United States",
                     "manufacturer":"SpaceX",
                     "payload_type":"Satellite",
                     "payload_mass_kg":null,
                     "payload_mass_lbs":null,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":null,
                        "eccentricity":null,
                        "periapsis_km":null,
                        "apoapsis_km":null,
                        "inclination_deg":null,
                        "period_min":null,
                        "lifespan_years":null,
                        "epoch":null,
                        "mean_motion":null,
                        "raan":null,
                        "arg_of_pericenter":null,
                        "mean_anomaly":null
                     }
                  }
               ]
            },
            "fairings":{
               "reused":false,
               "recovery_attempt":false,
               "recovered":false,
               "ship":null
            }
         },
         "ships":[
            
         ],
         "telemetry":{
            "flight_club":null
         },
         "launch_site":{
            "site_id":"kwajalein_atoll",
            "site_name":"Kwajalein Atoll",
            "site_name_long":"Kwajalein Atoll Omelek Island"
         },
         "launch_success":false,
         "launch_failure_details":{
            "time":301,
            "altitude":289,
            "reason":"harmonic oscillation leading to premature engine shutdown"
         },
         "links":{
            "mission_patch":"https://images2.imgbox.com/be/e7/iNqsqVYM_o.png",
            "mission_patch_small":"https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png",
            "reddit_campaign":null,
            "reddit_launch":null,
            "reddit_recovery":null,
            "reddit_media":null,
            "presskit":null,
            "article_link":"https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html",
            "wikipedia":"https://en.wikipedia.org/wiki/DemoSat",
            "video_link":"https://www.youtube.com/watch?v=Lk4zQ2wP-Nc",
            "youtube_id":"Lk4zQ2wP-Nc",
            "flickr_images":[
               
            ]
         },
         "details":"Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
         "upcoming":false,
         "static_fire_date_utc":null,
         "static_fire_date_unix":null,
         "timeline":{
            "webcast_liftoff":60
         },
         "crew":null
      },
      {
         "flight_number":3,
         "mission_name":"Trailblazer",
         "mission_id":[
            
         ],
         "launch_year":"2008",
         "launch_date_unix":1217734440,
         "launch_date_utc":"2008-08-03T03:34:00.000Z",
         "launch_date_local":"2008-08-03T15:34:00+12:00",
         "is_tentative":false,
         "tentative_max_precision":"hour",
         "tbd":false,
         "launch_window":0,
         "rocket":{
            "rocket_id":"falcon1",
            "rocket_name":"Falcon 1",
            "rocket_type":"Merlin C",
            "first_stage":{
               "cores":[
                  {
                     "core_serial":"Merlin1C",
                     "flight":1,
                     "block":null,
                     "gridfins":false,
                     "legs":false,
                     "reused":false,
                     "land_success":null,
                     "landing_intent":false,
                     "landing_type":null,
                     "landing_vehicle":null
                  }
               ]
            },
            "second_stage":{
               "block":1,
               "payloads":[
                  {
                     "payload_id":"Trailblazer",
                     "norad_id":[
                        
                     ],
                     "reused":false,
                     "customers":[
                        "NASA"
                     ],
                     "nationality":"United States",
                     "manufacturer":"Space Dev",
                     "payload_type":"Satellite",
                     "payload_mass_kg":null,
                     "payload_mass_lbs":null,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":null,
                        "eccentricity":null,
                        "periapsis_km":null,
                        "apoapsis_km":null,
                        "inclination_deg":null,
                        "period_min":null,
                        "lifespan_years":null,
                        "epoch":null,
                        "mean_motion":null,
                        "raan":null,
                        "arg_of_pericenter":null,
                        "mean_anomaly":null
                     }
                  },
                  {
                     "payload_id":"PRESat",
                     "norad_id":[
                        
                     ],
                     "reused":false,
                     "customers":[
                        "ORS"
                     ],
                     "nationality":"United States",
                     "manufacturer":null,
                     "payload_type":"Satellite",
                     "payload_mass_kg":null,
                     "payload_mass_lbs":null,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":null,
                        "eccentricity":null,
                        "periapsis_km":null,
                        "apoapsis_km":null,
                        "inclination_deg":null,
                        "period_min":null,
                        "lifespan_years":null,
                        "epoch":null,
                        "mean_motion":null,
                        "raan":null,
                        "arg_of_pericenter":null,
                        "mean_anomaly":null
                     }
                  }
               ]
            },
            "fairings":{
               "reused":false,
               "recovery_attempt":false,
               "recovered":false,
               "ship":null
            }
         },
         "ships":[
            
         ],
         "telemetry":{
            "flight_club":null
         },
         "launch_site":{
            "site_id":"kwajalein_atoll",
            "site_name":"Kwajalein Atoll",
            "site_name_long":"Kwajalein Atoll Omelek Island"
         },
         "launch_success":false,
         "launch_failure_details":{
            "time":140,
            "altitude":35,
            "reason":"residual stage-1 thrust led to collision between stage 1 and stage 2"
         },
         "links":{
            "mission_patch":"https://images2.imgbox.com/4b/bd/d8UxLh4q_o.png",
            "mission_patch_small":"https://images2.imgbox.com/3d/86/cnu0pan8_o.png",
            "reddit_campaign":null,
            "reddit_launch":null,
            "reddit_recovery":null,
            "reddit_media":null,
            "presskit":null,
            "article_link":"http://www.spacex.com/news/2013/02/11/falcon-1-flight-3-mission-summary",
            "wikipedia":"https://en.wikipedia.org/wiki/Trailblazer_(satellite)",
            "video_link":"https://www.youtube.com/watch?v=v0w9p3U8860",
            "youtube_id":"v0w9p3U8860",
            "flickr_images":[
               
            ]
         },
         "details":"Residual stage 1 thrust led to collision between stage 1 and stage 2",
         "upcoming":false,
         "static_fire_date_utc":null,
         "static_fire_date_unix":null,
         "timeline":{
            "webcast_liftoff":14
         },
         "crew":null
      },
      {
         "flight_number":4,
         "mission_name":"RatSat",
         "mission_id":[
            
         ],
         "launch_year":"2008",
         "launch_date_unix":1222643700,
         "launch_date_utc":"2008-09-28T23:15:00.000Z",
         "launch_date_local":"2008-09-28T11:15:00+12:00",
         "is_tentative":false,
         "tentative_max_precision":"hour",
         "tbd":false,
         "launch_window":0,
         "rocket":{
            "rocket_id":"falcon1",
            "rocket_name":"Falcon 1",
            "rocket_type":"Merlin C",
            "first_stage":{
               "cores":[
                  {
                     "core_serial":"Merlin2C",
                     "flight":1,
                     "block":null,
                     "gridfins":false,
                     "legs":false,
                     "reused":false,
                     "land_success":null,
                     "landing_intent":false,
                     "landing_type":null,
                     "landing_vehicle":null
                  }
               ]
            },
            "second_stage":{
               "block":1,
               "payloads":[
                  {
                     "payload_id":"RatSat",
                     "norad_id":[
                        33393
                     ],
                     "reused":false,
                     "customers":[
                        "SpaceX"
                     ],
                     "nationality":"United States",
                     "manufacturer":"SpaceX",
                     "payload_type":"Satellite",
                     "payload_mass_kg":165,
                     "payload_mass_lbs":363,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "lifespan_years":null,
                        "epoch":"2020-11-22T21:37:38.000Z",
                        "mean_motion":14.84885951,
                        "raan":79.0872,
                        "semi_major_axis_km":6992.08,
                        "eccentricity":0.0012629,
                        "periapsis_km":605.115,
                        "apoapsis_km":622.776,
                        "inclination_deg":9.3465,
                        "period_min":96.977,
                        "arg_of_pericenter":47.0356,
                        "mean_anomaly":313.0901
                     }
                  }
               ]
            },
            "fairings":{
               "reused":false,
               "recovery_attempt":false,
               "recovered":false,
               "ship":null
            }
         },
         "ships":[
            
         ],
         "telemetry":{
            "flight_club":null
         },
         "launch_site":{
            "site_id":"kwajalein_atoll",
            "site_name":"Kwajalein Atoll",
            "site_name_long":"Kwajalein Atoll Omelek Island"
         },
         "launch_success":true,
         "links":{
            "mission_patch":"https://images2.imgbox.com/e0/a7/FNjvKlXW_o.png",
            "mission_patch_small":"https://images2.imgbox.com/e9/c9/T8CfiSYb_o.png",
            "reddit_campaign":null,
            "reddit_launch":null,
            "reddit_recovery":null,
            "reddit_media":null,
            "presskit":null,
            "article_link":"https://en.wikipedia.org/wiki/Ratsat",
            "wikipedia":"https://en.wikipedia.org/wiki/Ratsat",
            "video_link":"https://www.youtube.com/watch?v=dLQ2tZEH6G0",
            "youtube_id":"dLQ2tZEH6G0",
            "flickr_images":[
               
            ]
         },
         "details":"Ratsat was carried to orbit on the first successful orbital launch of any privately funded and developed, liquid-propelled carrier rocket, the SpaceX Falcon 1",
         "upcoming":false,
         "static_fire_date_utc":"2008-09-20T00:00:00.000Z",
         "static_fire_date_unix":1221868800,
         "timeline":{
            "webcast_liftoff":5
         },
         "crew":null
      },
      {
         "flight_number":5,
         "mission_name":"RazakSat",
         "mission_id":[
            
         ],
         "launch_year":"2009",
         "launch_date_unix":1247456100,
         "launch_date_utc":"2009-07-13T03:35:00.000Z",
         "launch_date_local":"2009-07-13T15:35:00+12:00",
         "is_tentative":false,
         "tentative_max_precision":"hour",
         "tbd":false,
         "launch_window":0,
         "rocket":{
            "rocket_id":"falcon1",
            "rocket_name":"Falcon 1",
            "rocket_type":"Merlin C",
            "first_stage":{
               "cores":[
                  {
                     "core_serial":"Merlin3C",
                     "flight":1,
                     "block":null,
                     "gridfins":false,
                     "legs":false,
                     "reused":false,
                     "land_success":null,
                     "landing_intent":false,
                     "landing_type":null,
                     "landing_vehicle":null
                  }
               ]
            },
            "second_stage":{
               "block":1,
               "payloads":[
                  {
                     "payload_id":"RazakSAT",
                     "norad_id":[
                        35578
                     ],
                     "reused":false,
                     "customers":[
                        "ATSB"
                     ],
                     "nationality":"Malaysia",
                     "manufacturer":"Satrec",
                     "payload_type":"Satellite",
                     "payload_mass_kg":200,
                     "payload_mass_lbs":440,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":7048.919,
                        "eccentricity":0.001705,
                        "periapsis_km":658.766,
                        "apoapsis_km":682.803,
                        "inclination_deg":8.9886,
                        "period_min":98.162,
                        "lifespan_years":null,
                        "epoch":"2020-11-23T11:47:28.000Z",
                        "mean_motion":14.66962169,
                        "raan":328.6516,
                        "arg_of_pericenter":288.715,
                        "mean_anomaly":71.119
                     }
                  }
               ]
            },
            "fairings":{
               "reused":false,
               "recovery_attempt":false,
               "recovered":false,
               "ship":null
            }
         },
         "ships":[
            
         ],
         "telemetry":{
            "flight_club":null
         },
         "launch_site":{
            "site_id":"kwajalein_atoll",
            "site_name":"Kwajalein Atoll",
            "site_name_long":"Kwajalein Atoll Omelek Island"
         },
         "launch_success":true,
         "links":{
            "mission_patch":"https://images2.imgbox.com/8d/fc/0qdZMWWx_o.png",
            "mission_patch_small":"https://images2.imgbox.com/a7/ba/NBZSw3Ho_o.png",
            "reddit_campaign":null,
            "reddit_launch":null,
            "reddit_recovery":null,
            "reddit_media":null,
            "presskit":"http://www.spacex.com/press/2012/12/19/spacexs-falcon-1-successfully-delivers-razaksat-satellite-orbit",
            "article_link":"http://www.spacex.com/news/2013/02/12/falcon-1-flight-5",
            "wikipedia":"https://en.wikipedia.org/wiki/RazakSAT",
            "video_link":"https://www.youtube.com/watch?v=yTaIDooc8Og",
            "youtube_id":"yTaIDooc8Og",
            "flickr_images":[
               
            ]
         },
         "details":null,
         "upcoming":false,
         "static_fire_date_utc":null,
         "static_fire_date_unix":null,
         "timeline":{
            "webcast_liftoff":5
         },
         "crew":null
      },
      {
         "flight_number":6,
         "mission_name":"Falcon 9 Test Flight",
         "mission_id":[
            "EE86F74"
         ],
         "launch_year":"2010",
         "launch_date_unix":1275677100,
         "launch_date_utc":"2010-06-04T18:45:00.000Z",
         "launch_date_local":"2010-06-04T14:45:00-04:00",
         "is_tentative":false,
         "tentative_max_precision":"hour",
         "tbd":false,
         "launch_window":0,
         "rocket":{
            "rocket_id":"falcon9",
            "rocket_name":"Falcon 9",
            "rocket_type":"v1.0",
            "first_stage":{
               "cores":[
                  {
                     "core_serial":"B0003",
                     "flight":1,
                     "block":1,
                     "gridfins":false,
                     "legs":false,
                     "reused":false,
                     "land_success":null,
                     "landing_intent":false,
                     "landing_type":null,
                     "landing_vehicle":null
                  }
               ]
            },
            "second_stage":{
               "block":1,
               "payloads":[
                  {
                     "payload_id":"Dragon Qualification Unit",
                     "norad_id":[
                        36595
                     ],
                     "reused":false,
                     "customers":[
                        "SpaceX"
                     ],
                     "nationality":"United States",
                     "manufacturer":"SpaceX",
                     "payload_type":"Dragon Boilerplate",
                     "payload_mass_kg":null,
                     "payload_mass_lbs":null,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":6634.458,
                        "eccentricity":0.0030715,
                        "periapsis_km":235.945,
                        "apoapsis_km":276.701,
                        "inclination_deg":34.5005,
                        "period_min":89.632,
                        "lifespan_years":null,
                        "epoch":"2010-06-04T20:04:51.000Z",
                        "mean_motion":16.06552645,
                        "raan":41.2862,
                        "arg_of_pericenter":213.759,
                        "mean_anomaly":146.1185
                     }
                  }
               ]
            },
            "fairings":null
         },
         "ships":[
            
         ],
         "telemetry":{
            "flight_club":null
         },
         "launch_site":{
            "site_id":"ccafs_slc_40",
            "site_name":"CCAFS SLC 40",
            "site_name_long":"Cape Canaveral Air Force Station Space Launch Complex 40"
         },
         "launch_success":true,
         "links":{
            "mission_patch":"https://images2.imgbox.com/d6/12/yxne8mMD_o.png",
            "mission_patch_small":"https://images2.imgbox.com/5c/36/gbDKf6Y7_o.png",
            "reddit_campaign":null,
            "reddit_launch":null,
            "reddit_recovery":null,
            "reddit_media":null,
            "presskit":"http://forum.nasaspaceflight.com/index.php?action=dlattach;topic=21869.0;attach=230821",
            "article_link":"http://www.spacex.com/news/2013/02/12/falcon-9-flight-1",
            "wikipedia":"https://en.wikipedia.org/wiki/Dragon_Spacecraft_Qualification_Unit",
            "video_link":"https://www.youtube.com/watch?v=nxSxgBKlYws",
            "youtube_id":"nxSxgBKlYws",
            "flickr_images":[
               
            ]
         },
         "details":null,
         "upcoming":false,
         "static_fire_date_utc":"2010-03-13T00:00:00.000Z",
         "static_fire_date_unix":1268438400,
         "timeline":{
            "webcast_liftoff":123,
            "go_for_prop_loading":-2280,
            "rp1_loading":-2100,
            "stage1_lox_loading":-2100,
            "stage2_lox_loading":-960,
            "engine_chill":-420,
            "prelaunch_checks":-60,
            "propellant_pressurization":-60,
            "go_for_launch":-45,
            "ignition":-3,
            "liftoff":0,
            "maxq":76,
            "meco":174,
            "stage_sep":176,
            "second_stage_ignition":179,
            "seco-1":476
         },
         "crew":null
      },
      {
         "flight_number":7,
         "mission_name":"COTS 1",
         "mission_id":[
            "EE86F74"
         ],
         "launch_year":"2010",
         "launch_date_unix":1291822980,
         "launch_date_utc":"2010-12-08T15:43:00.000Z",
         "launch_date_local":"2010-12-08T11:43:00-04:00",
         "is_tentative":false,
         "tentative_max_precision":"hour",
         "tbd":false,
         "launch_window":0,
         "rocket":{
            "rocket_id":"falcon9",
            "rocket_name":"Falcon 9",
            "rocket_type":"v1.0",
            "first_stage":{
               "cores":[
                  {
                     "core_serial":"B0004",
                     "flight":1,
                     "block":1,
                     "gridfins":false,
                     "legs":false,
                     "reused":false,
                     "land_success":null,
                     "landing_intent":false,
                     "landing_type":null,
                     "landing_vehicle":null
                  }
               ]
            },
            "second_stage":{
               "block":1,
               "payloads":[
                  {
                     "payload_id":"COTS Demo Flight 1",
                     "norad_id":[
                        37244
                     ],
                     "cap_serial":"C101",
                     "reused":false,
                     "customers":[
                        "NASA(COTS)"
                     ],
                     "nationality":"United States",
                     "manufacturer":"SpaceX",
                     "payload_type":"Dragon 1.0",
                     "payload_mass_kg":null,
                     "payload_mass_lbs":null,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":6672.063,
                        "eccentricity":0.0021812,
                        "periapsis_km":279.375,
                        "apoapsis_km":308.481,
                        "inclination_deg":34.5447,
                        "period_min":90.396,
                        "lifespan_years":null,
                        "epoch":"2010-12-08T15:34:03.000Z",
                        "mean_motion":15.9298967,
                        "raan":180.7668,
                        "arg_of_pericenter":225.2707,
                        "mean_anomaly":136.6556
                     },
                     "mass_returned_kg":null,
                     "mass_returned_lbs":null,
                     "flight_time_sec":11940,
                     "cargo_manifest":null
                  },
                  {
                     "payload_id":"Cubesats",
                     "norad_id":[
                        
                     ],
                     "reused":false,
                     "customers":[
                        "NRO"
                     ],
                     "payload_type":"Satellite",
                     "payload_mass_kg":null,
                     "payload_mass_lbs":null,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":null,
                        "eccentricity":null,
                        "periapsis_km":null,
                        "apoapsis_km":null,
                        "inclination_deg":null,
                        "period_min":null,
                        "lifespan_years":0,
                        "epoch":null,
                        "mean_motion":null,
                        "raan":null,
                        "arg_of_pericenter":null,
                        "mean_anomaly":null
                     }
                  }
               ]
            },
            "fairings":null
         },
         "ships":[
            "AMERICANCHAMPION"
         ],
         "telemetry":{
            "flight_club":null
         },
         "launch_site":{
            "site_id":"ccafs_slc_40",
            "site_name":"CCAFS SLC 40",
            "site_name_long":"Cape Canaveral Air Force Station Space Launch Complex 40"
         },
         "launch_success":true,
         "links":{
            "mission_patch":"https://images2.imgbox.com/00/2f/FhtEd0nB_o.png",
            "mission_patch_small":"https://images2.imgbox.com/d9/3e/FfrN88ry_o.png",
            "reddit_campaign":null,
            "reddit_launch":null,
            "reddit_recovery":null,
            "reddit_media":null,
            "presskit":"http://www.spacex.com/files/downloads/cots1-20101206.pdf",
            "article_link":"https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1",
            "wikipedia":"https://en.wikipedia.org/wiki/SpaceX_COTS_Demo_Flight_1",
            "video_link":"https://www.youtube.com/watch?v=cdLITgWKe_0",
            "youtube_id":"cdLITgWKe_0",
            "flickr_images":[
               
            ]
         },
         "details":null,
         "upcoming":false,
         "static_fire_date_utc":"2010-12-04T00:00:00.000Z",
         "static_fire_date_unix":1291420800,
         "timeline":{
            "webcast_liftoff":14,
            "go_for_prop_loading":-2280,
            "rp1_loading":-2100,
            "stage1_lox_loading":-2100,
            "stage2_lox_loading":-960,
            "engine_chill":-420,
            "prelaunch_checks":-60,
            "propellant_pressurization":-60,
            "go_for_launch":-45,
            "ignition":-3,
            "liftoff":0,
            "meco":178,
            "stage_sep":182,
            "second_stage_ignition":189,
            "seco-1":540,
            "dragon_separation":575
         },
         "crew":null
      },
      {
         "flight_number":8,
         "mission_name":"COTS 2",
         "mission_id":[
            "EE86F74"
         ],
         "launch_year":"2012",
         "launch_date_unix":1335944640,
         "launch_date_utc":"2012-05-22T07:44:00.000Z",
         "launch_date_local":"2012-05-22T03:44:00-04:00",
         "is_tentative":false,
         "tentative_max_precision":"hour",
         "tbd":false,
         "launch_window":0,
         "rocket":{
            "rocket_id":"falcon9",
            "rocket_name":"Falcon 9",
            "rocket_type":"v1.0",
            "first_stage":{
               "cores":[
                  {
                     "core_serial":"B0005",
                     "flight":1,
                     "block":1,
                     "gridfins":false,
                     "legs":false,
                     "reused":false,
                     "land_success":null,
                     "landing_intent":false,
                     "landing_type":null,
                     "landing_vehicle":null
                  }
               ]
            },
            "second_stage":{
               "block":1,
               "payloads":[
                  {
                     "payload_id":"COTS Demo Flight 2",
                     "norad_id":[
                        38348
                     ],
                     "cap_serial":"C102",
                     "reused":false,
                     "customers":[
                        "NASA(COTS)"
                     ],
                     "nationality":"United States",
                     "manufacturer":"SpaceX",
                     "payload_type":"Dragon 1.0",
                     "payload_mass_kg":525,
                     "payload_mass_lbs":1157,
                     "orbit":"LEO",
                     "orbit_params":{
                        "reference_system":"geocentric",
                        "regime":"low-earth",
                        "longitude":null,
                        "semi_major_axis_km":6711.684,
                        "eccentricity":0.0057963,
                        "periapsis_km":294.646,
                        "apoapsis_km":372.452,
                        "inclination_deg":51.6726,
                        "period_min":91.202,
                        "lifespan_years":null,
                        "epoch":"2012-05-22T09:12:31.000Z",
                        "mean_motion":15.78904505,
                        "raan":251.5418,
                        "arg_of_pericenter":331.7079,
                        "mean_anomaly":31.2745
                     },
                     "mass_returned_kg":null,
                     "mass_returned_lbs":null,
                     "flight_time_sec":806400,
                     "cargo_manifest":null
                  }
               ]
            },
            "fairings":null
         },
         "ships":[
            "AMERICANCHAMPION"
         ],
         "telemetry":{
            "flight_club":null
         },
         "launch_site":{
            "site_id":"ccafs_slc_40",
            "site_name":"CCAFS SLC 40",
            "site_name_long":"Cape Canaveral Air Force Station Space Launch Complex 40"
         },
         "launch_success":true,
         "links":{
            "mission_patch":"https://images2.imgbox.com/2b/8e/MYyHbnd2_o.png",
            "mission_patch_small":"https://images2.imgbox.com/fc/7a/r9ITwL12_o.png",
            "reddit_campaign":null,
            "reddit_launch":null,
            "reddit_recovery":null,
            "reddit_media":null,
            "presskit":"https://www.nasa.gov/pdf/649910main_cots2_presskit_051412.pdf",
            "article_link":"https://en.wikipedia.org/wiki/Dragon_C2%2B",
            "wikipedia":"https://en.wikipedia.org/wiki/Dragon_C2%2B",
            "video_link":"https://www.youtube.com/watch?v=tpQzDbAY7yI",
            "youtube_id":"tpQzDbAY7yI",
            "flickr_images":[
               
            ]
         },
         "details":"Launch was scrubbed on first attempt, second launch attempt was successful",
         "upcoming":false,
         "static_fire_date_utc":"2012-04-30T00:00:00.000Z",
         "static_fire_date_unix":1335744000,
         "timeline":{
            "webcast_liftoff":42,
            "go_for_prop_loading":-2280,
            "rp1_loading":-2100,
            "stage1_lox_loading":-2100,
            "stage2_lox_loading":-960,
            "engine_chill":-420,
            "prelaunch_checks":-60,
            "propellant_pressurization":-60,
            "go_for_launch":-45,
            "ignition":-3,
            "liftoff":0,
            "maxq":84,
            "meco":180,
            "stage_sep":180,
            "second_stage_ignition":185,
            "seco-1":554,
            "dragon_separation":598,
            "dragon_solar_deploy":713,
            "dragon_bay_door_deploy":8808
         },
         "crew":null
      }
    ];

    spyOn(service,'getItemDetails').and.returnValue(of(itemList))

    component.ngOnInit()

    expect(component.itemList).toEqual(itemList);
  });
});
