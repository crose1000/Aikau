model.jsonModel = {
   services: [
      {
         name: "alfresco/services/LoggingService",
         config: {
            loggingPreferences: {
               enabled: true,
               all: true,
               warn: true,
               error: true
            }
         }
      },
      "alfresco/services/ErrorReporter",
      "alfresco/services/SiteService"
   ],
   widgets: [
      {
         id: "SITES_LIST",
         name: "alfresco/documentlibrary/AlfSitesList",
         config: {
            useHash: false,
            sortAscending: true,
            sortField: "title",
            usePagination: true,
            dataRequestTopic: "ALF_GET_SITES_ADMIN",
            currentPage: 2,
            currentPageSize: 1,
            widgets: [
               {
                  name: "alfresco/documentlibrary/views/AlfDocumentListView",
                  config: {
                     additionalCssClasses: "bordered",
                     noItemsMessage: "No Sites",
                     itemKey: "shortName",
                     widgets: [
                        {
                           name: "alfresco/documentlibrary/views/layouts/Row",
                           config: {
                              widgets: [
                                 {
                                    name: "alfresco/documentlibrary/views/layouts/Cell",
                                    config: {
                                       additionalCssClasses: "siteName mediumpad",
                                       widgets: [
                                          {
                                             name: "alfresco/renderers/Property",
                                             config: {
                                                propertyToRender: "title"
                                             }
                                          }
                                       ]
                                    }
                                 }
                              ]
                           }
                        }
                     ]
                  }
               }
            ]
         }
      },
      {
         id: "SITES_LIST_PAGINATION_MENU",
         name: "alfresco/documentlibrary/AlfDocumentListPaginator",
         config: {
            hidePageSizeOnWidth: 50
         }
      },
      {
         name: "aikauTesting/mockservices/SitesPaginationMockXhr"
      },
      {
         name: "alfresco/logging/SubscriptionLog"
      },
      {
         name: "aikauTesting/TestCoverageResults"
      }
   ]
};