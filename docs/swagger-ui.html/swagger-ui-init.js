
window.onload = function() {
  // Build a system
  var url = window.location.search.match(/url=([^&]+)/);
  if (url && url.length > 1) {
    url = decodeURIComponent(url[1]);
  } else {
    url = window.location.origin;
  }
  var options = {
  "swaggerDoc": {
    "openapi": "3.0.1",
    "info": {
      "version": "1.0.0",
      "title": "cseco REST API",
      "description": "",
      "termsOfService": "",
      "contact": {
        "name": "The Developer",
        "email": "?subject=cseco REST API",
        "url": "http://www.cseco.co.ke"
      },
      "license": {
        "name": "Apache License Version 2.0",
        "url": "https://www.apache.org/licenses/LICENSE-2.0.html"
      }
    },
    "host": "localhost:8799",
    "basePath": "/",
    "schemes": [
      "http",
      "https"
    ],
    "consumes": [
      "application/json"
    ],
    "produces": [
      "application/json"
    ],
    "paths": {
      "/api/auth/login": {
        "post": {
          "tags": [
            "auth-controller"
          ],
          "summary": "login",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "email": {
                      "type": "string"
                    },
                    "password": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/auth/changePassword": {
        "post": {
          "tags": [
            "auth-controller"
          ],
          "summary": "changePassword",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "oldpassword": {
                      "type": "string"
                    },
                    "password": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/auth/logout": {
        "get": {
          "tags": [
            "auth-controller"
          ],
          "summary": "logout",
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ]
        }
      },
      "/api/noauth/activate?activateToken": {
        "get": {
          "tags": [
            "auth-controller"
          ],
          "summary": "activateUser",
          "parameters": [
            {
              "name": "activateToken",
              "in": "query",
              "description": "Activate User",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/api/noauth/resetPassword": {
        "post": {
          "tags": [
            "auth-controller"
          ],
          "summary": "createOrResetPassword",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "passwordToken": {
                      "type": "string"
                    },
                    "password": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "parameters": [],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/api/noauth/resetPassword?email&sendActivationMail": {
        "get": {
          "tags": [
            "auth-controller"
          ],
          "summary": "getPasswordResetCode",
          "parameters": [
            {
              "name": "email",
              "in": "query",
              "description": "Your email account",
              "required": true,
              "type": "string"
            },
            {
              "name": "sendActivationMail",
              "in": "query",
              "description": "Send Activation Email to User",
              "required": true,
              "type": "boolean",
              "default": true
            }
          ],
          "responses": {
            "200": {
              "description": "OK"
            }
          }
        }
      },
      "/api/organization": {
        "post": {
          "requiresLogin": true,
          "requiresAdmin": false,
          "doForAnother": false,
          "tags": [
            "organization-controller"
          ],
          "summary": "saveOrganization",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "userId": {
                      "type": "string",
                      "required": true
                    },
                    "organizationName": {
                      "type": "string",
                      "required": true
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/user?sendActivationMail": {
        "post": {
          "tags": [
            "user-controller"
          ],
          "summary": "saveUser",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "userId": {
                      "type": {
                        "type": "string"
                      }
                    },
                    "additionalInfo": {
                      "type": "string"
                    },
                    "authority": {
                      "type": "string",
                      "enum": [
                        "SYS_ADMIN|PHARMACY_ADMIN|SYS_USER"
                      ]
                    },
                    "createdTime": 0,
                    "email": {
                      "type": "string"
                    },
                    "firstName": {
                      "type": "string"
                    },
                    "lastName": {
                      "type": "string"
                    },
                    "isActive": {
                      "type": "boolean"
                    },
                    "gender": {
                      "type": "string",
                      "enum": [
                        "Male|Female"
                      ]
                    },
                    "dateOfBirth": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "sendActivationMail",
              "in": "query",
              "description": "Send Activation Email",
              "required": false,
              "type": "boolean",
              "default": true
            },
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": false,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/user?userId": {
        "get": {
          "tags": [
            "user-controller"
          ],
          "summary": "getUserById",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            },
            {
              "name": "userId",
              "in": "query",
              "description": "userId",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/user/me": {
        "get": {
          "tags": [
            "user-controller"
          ],
          "summary": "getLoggedInUser",
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      },
      "/api/user": {
        "patch": {
          "tags": [
            "user-controller"
          ],
          "summary": "editUser",
          "requestBody": {
            "required": true,
            "content": {
              "application/json": {
                "schema": {
                  "properties": {
                    "userId": {
                      "type": {
                        "type": "string"
                      }
                    },
                    "additionalInfo": {
                      "type": "string"
                    },
                    "authority": {
                      "type": "string",
                      "enum": [
                        "SYS_ADMIN|PHARMACY_ADMIN|SYS_USER"
                      ]
                    },
                    "createdTime": 0,
                    "email": {
                      "type": "string"
                    },
                    "firstName": {
                      "type": "string"
                    },
                    "lastName": {
                      "type": "string"
                    },
                    "isActive": {
                      "type": "boolean"
                    },
                    "gender": {
                      "type": "string",
                      "enum": [
                        "Male|Female"
                      ]
                    },
                    "dateOfBirth": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "parameters": [
            {
              "name": "X-Authorization",
              "in": "header",
              "description": "bearer token",
              "required": true,
              "type": "string"
            }
          ],
          "responses": {
            "200": {
              "description": "OK",
              "content": {
                "application/json": {}
              }
            }
          }
        }
      }
    },
    "tags": [
      {
        "name": "user-controller",
        "description": "User Controller"
      },
      {
        "name": "user-controller",
        "description": "User Controller"
      },
      {
        "name": "organization-controller",
        "description": "Organization Controller"
      },
      {
        "name": "user-controller",
        "description": "User Controller"
      },
      {
        "name": "auth-controller",
        "description": "Auth Controller"
      }
    ]
  },
  "customOptions": {}
};
  url = options.swaggerUrl || url
  var urls = options.swaggerUrls
  var customOptions = options.customOptions
  var spec1 = options.swaggerDoc
  var swaggerOptions = {
    spec: spec1,
    url: url,
    urls: urls,
    dom_id: '#swagger-ui',
    deepLinking: true,
    presets: [
      SwaggerUIBundle.presets.apis,
      SwaggerUIStandalonePreset
    ],
    plugins: [
      SwaggerUIBundle.plugins.DownloadUrl
    ],
    layout: "StandaloneLayout"
  }
  for (var attrname in customOptions) {
    swaggerOptions[attrname] = customOptions[attrname];
  }
  var ui = SwaggerUIBundle(swaggerOptions)

  if (customOptions.oauth) {
    ui.initOAuth(customOptions.oauth)
  }

  if (customOptions.authAction) {
    ui.authActions.authorize(customOptions.authAction)
  }

  window.ui = ui
}
