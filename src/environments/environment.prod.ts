export const environment = {
  urlAddress:'http://41.33.73.195:80/TrackerAPI',
  urlAddress4200:'http://41.33.73.195:80/#/',
  Domain:'http://41.33.73.195:80/TrackerAPI/',
  project: 'http://41.33.73.195:80/TrackerAPI/api/project',
  DeleteProject:'http://41.33.73.195:80/TrackerAPI/api/project/SoftDelete/',
  stackeholders: 'http://41.33.73.195:80/TrackerAPI/api/Stackeholders/',
  GetAllStackholdersByProjectID: 'http://41.33.73.195:80/TrackerAPI/api/Stackeholders/GetStackeholdersByProjectId/',
  postListOfStackholders: 'http://41.33.73.195:80/TrackerAPI/api/Stackeholders/',
  postListOfMilestoness: 'http://41.33.73.195:80/TrackerAPI/api/MileStones/',
  ProjectTeams: 'http://41.33.73.195:80/TrackerAPI/api/ProjectTeam/',
  GetProjectTeamsByProjectPositionId: 'http://41.33.73.195:80/TrackerAPI/api/ProjectTeam/GetProjectTeamsByProjectPositionId/',
  organizations: 'http://41.33.73.195:80/TrackerAPI/api/Organizations/',
  clients: 'http://41.33.73.195:80/TrackerAPI/api/Clients/',
  employees: 'http://41.33.73.195:80/TrackerAPI/api/Employees/',
  requests: 'http://41.33.73.195:80/TrackerAPI/api/Request/',
  requestStatus: 'http://41.33.73.195:80/TrackerAPI/api/RequestStatus/',
  requestTypes: 'http://41.33.73.195:80/TrackerAPI/api/RequestTypes/',
  requestPeriorities: 'http://41.33.73.195:80/TrackerAPI/api/RequestPeriorities/',
  department: 'http://41.33.73.195:80/TrackerAPI/api/Departments/',
  requestSubCategory: 'http://41.33.73.195:80/TrackerAPI/api/RequestSubCategory/',
  requestSubCategoryById:'http://41.33.73.195:80/TrackerAPI/api/RequestSubCategory/',
  filterSubCategoriesByCategoryId:'http://41.33.73.195:80/TrackerAPI/api/RequestSubCategory/GetRequestSubCategoryDTOByCatId/',
  editrequestSubCategory:'http://41.33.73.195:80/TrackerAPI/api/RequestSubCategory/',
  requestCategory: 'http://41.33.73.195:80/TrackerAPI/api/RequestCategory/',
  getCategory:'http://41.33.73.195:80/TrackerAPI/api/RequestCategory/',
  updateCategory:'http://41.33.73.195:80/TrackerAPI/api/RequestCategory/',
  projectPositions: 'http://41.33.73.195:80/TrackerAPI/api/ProjectPositions/',
  getDepartmentByEmpID: 'http://41.33.73.195:80/TrackerAPI/api/Departments/GetDepartmentByEmployeeId/',
  projectTypes: 'http://41.33.73.195:80/TrackerAPI/api/ProjectTypes/',
  asset: 'http://41.33.73.195:80/TrackerAPI/api/Assets/',
  GetAllRequestByClientId: 'http://41.33.73.195:80/TrackerAPI/api/Request/GetAllRequestByClientId/',
  reqMode: 'http://41.33.73.195:80/TrackerAPI/api/RequestModes/',
  GetAllMilestonsByProjectId: 'http://41.33.73.195:80/TrackerAPI/api/MileStones/GetMileStonesByProjectId/',
  GetAllTeamsByProjectId: 'http://41.33.73.195:80/TrackerAPI/api/ProjectTeam/GetProjectTeamsByProjectId/',
  GetAllDocumentByProjectId: 'http://41.33.73.195:80/TrackerAPI/api/ProjectDocument/GetProjectDocumentsByProjectId/',
  User: 'http://41.33.73.195:80/TrackerAPI/api',
  getMileStoneById:'http://41.33.73.195:80/TrackerAPI/api/MileStones/',
  postProjectDocumentByProjectID: 'http://41.33.73.195:80/TrackerAPI/api/ProjectDocument/SaveDocument',
  clientCanRequest:'http://41.33.73.195:80/TrackerAPI/api/project/clientCanRequest/',
  updateMileStoneByid:'http://41.33.73.195:80/TrackerAPI/api/MileStones/updateMileStoneById/',
  uploadFile: 'http://41.33.73.195:80/TrackerAPI/api/ProjectDocument/uploadfile/',
  deletestakeholder: 'http://41.33.73.195:80/TrackerAPI/api/Stackeholders/',
  GetProjectForRequest:'http://41.33.73.195:80/TrackerAPI/api/project/GetProjectForRequest',
  canreqbyprojectID :'http://41.33.73.195:80/TrackerAPI/api/project/canreqbyprojeID/',
  updatestackholder:'http://41.33.73.195:80/TrackerAPI/api/Stackeholders/updatestakehodersbyID/',
  getStackholderbyId:'http://41.33.73.195:80/TrackerAPI/api/Stackeholders/',
  deletemilestone: ' http://41.33.73.195:80/TrackerAPI/api/MileStones/',
  deleteteam: 'http://41.33.73.195:80/TrackerAPI/api/ProjectTeam/',
  deletedocument: 'http://41.33.73.195:80/TrackerAPI/api/ProjectDocument/',
  updatestakeholdersbyprojectid: 'http://41.33.73.195:80/TrackerAPI/api/Stackeholders/updatestakehodersByProjectId/1',
  updateteamsbyprojectid: 'http://41.33.73.195:80/TrackerAPI/api/ProjectTeam/updateteamsByProjectId/1',
  updatemilestonebyprojectid: 'http://41.33.73.195:80/TrackerAPI/api/MileStones/PutmilestonesDTOByProjectId/1',
  updatedocumectsbyprojectid: 'http://41.33.73.195:80/TrackerAPI/api/ProjectDocument/PutDocumentsDTOByProjectId/',
  updateProject: 'http://41.33.73.195:80/TrackerAPI/api/Project/',
  GetProjectById: 'http://41.33.73.195:80/TrackerAPI/api/Project/',
  uploadImage: 'http://41.33.73.195:80/TrackerAPI/api/UploadImage/uploadimage/',
  addRequstImages: 'http://41.33.73.195:80/TrackerAPI/api/RequestImages',
  RequestDescription: 'http://41.33.73.195:80/TrackerAPI/api/RequestDescription/',
  assignedRequests: 'http://41.33.73.195:80/TrackerAPI/api/AssignedRequests/',
  getTeambyId:'http://41.33.73.195:80/TrackerAPI/api/Teams/',
  addteams:'http://41.33.73.195:80/TrackerAPI/api/Teams/',
  GetEmployeessByTeamId:'http://41.33.73.195:80/TrackerAPI/api/ProjectTeam/GetEmployeessByTeamId/',
  GetRequestImageByRequestId:'http://41.33.73.195:80/TrackerAPI/api/RequestImages/GetRequestImageByRequestId/',
  GetAllRequestByEmployeeId:'http://41.33.73.195:80/TrackerAPI/api/AssignedRequests/GetAllRequestByEmployeeId/',
  GetAllProjectTeamsByProjectID:'http://41.33.73.195:80/TrackerAPI/api/ProjectTeam/GetProjectTeamsByProjectId/',
  GetAllProjectTeamIdByProjectIDandTeamIdAndPoaitionId:'http://41.33.73.195:80/TrackerAPI/api/ProjectTeam/GetProjectTeamByProjectIdAndTeamIdAndProjectPositionId/',
  GetProjectTeamByProjectPositionIdAndEmployeeId:'http://41.33.73.195:80/TrackerAPI/api/ProjectTeam/GetProjectTeamByProjectPositionIdAndEmployeeId/',
  GetAllRequestByProjectTeamId:'http://41.33.73.195:80/TrackerAPI/api/Request/GetAllRequestByProjectTeamId/',
  GetAllProjectsByEmployeeId:'http://41.33.73.195:80/TrackerAPI/api/project/GetAllProjectsByEmployeeId/',
  GetClientsByEmployeeId:'http://41.33.73.195:80/TrackerAPI/api/project/GetClientsByEmployeeId/',
  GetAllProjectTeamsByProjectIds:'http://41.33.73.195:80/TrackerAPI/api/ProjectTeam/GetAllProjectTeamsByProjectIds/',
  Problems:'http://41.33.73.195:80/TrackerAPI/api/Problems/',
  updateRequest:'http://41.33.73.195:80/TrackerAPI/api/Request/',
  RequestProblems:'http://41.33.73.195:80/TrackerAPI/api/RequestProblems/',
  GetProblemByEmployeeIdAndRequestId:'http://41.33.73.195:80/TrackerAPI/api/RequestProblems/GetProblemByEmployeeIdAndRequestId/',
  GetAllDescByRequestID:'http://41.33.73.195:80/TrackerAPI/api/RequestDescription/GetAllDescriptionsByRequestId/',
  getImageByName:'http://41.33.73.195:80/TrackerAPI/api/Employees/getImage/',
  GetEmployeeByDepartmentId:'http://41.33.73.195:80/TrackerAPI/api/Employees/GetEmployeeByDepartmentId/',
  GetAllProjectsByProjectTypeId:'http://41.33.73.195:80/TrackerAPI/api/Project/GetAllProjectsByProjectTypeId/',
  GetAllRequestByRequestStatus:'http://41.33.73.195:80/TrackerAPI/api/Request/GetAllRequestByRequestStatus/',
  CountProject:'http://41.33.73.195:80/TrackerAPI/api/Request/CountProjects/',
  CountInProgressProjects:'http://41.33.73.195:80/TrackerAPI/api/Request/CountInProgressProjects/',
  CountOpenProjects:'http://41.33.73.195:80/TrackerAPI/api/Request/CountOpenProjects/',
  CountClosedProjects:'http://41.33.73.195:80/TrackerAPI/api/Request/CountClosedProjects/',
  GetAllRequestByRequestStatusAndProjectTeamId:'http://41.33.73.195:80/TrackerAPI/api/Request/GetAllRequestByRequestStatusAndProjectTeamId/',
 
 
  GetClientByProjectId: 'http://41.33.73.195:80/TrackerAPI/api/project/GetClientByProjectId/',
  Sites:'http://41.33.73.195:80/TrackerAPI/api/Sites',
  Origins:'http://41.33.73.195:80/TrackerAPI/api/Origins',
  Suppliers:'http://41.33.73.195:80/TrackerAPI/api/Suppliers',
  DueDateCategory:'http://41.33.73.195:80/TrackerAPI/api/DueDateCategory',
  Brand:'http://41.33.73.195:80/TrackerAPI/api/Brand',
  ProjectSites:'http://41.33.73.195:80/TrackerAPI/api/ProjectSites',
  GetAllSitesByProjectId:'http://41.33.73.195:80/TrackerAPI/api/ProjectSites/GetAllSitesByProjectId',
  SiteClients:'http://41.33.73.195:80/TrackerAPI/api/SiteClients',
  GetAllUnassignedClients:'http://41.33.73.195:80/TrackerAPI/api/SiteClients/GetAllUnassignedClients',
  GetAllAssignedClients:'http://41.33.73.195:80/TrackerAPI/api/SiteClients/GetAllAssignedClients',
  GetAllAssignedClientsByProjectId:'http://41.33.73.195:80/TrackerAPI/api/SiteClients/GetAllAssignedClientsByProjectId',
  GetAllUnassignedClientsforAnotherProjectAndAssignedByThisProjectId:'http://41.33.73.195:80/TrackerAPI/api/SiteClients/GetAllUnassignedClientsforAnotherProjectAndAssignedByThisProjectId',
  GetProjectSiteByProjectIdAndSiteId:'http://41.33.73.195:80/TrackerAPI/api/ProjectSites/GetProjectSiteByProjectIdAndSiteId',
  ProjectSiteAsset:'http://41.33.73.195:80/TrackerAPI/api/ProjectSiteAsset',
  GetAllProjectSiteAssetBySiteId:'http://41.33.73.195:80/TrackerAPI/api/ProjectSiteAsset/GetAllProjectSiteAssetBySiteId',
  GetAllProjectSiteAssetByProjectId:'http://41.33.73.195:80/TrackerAPI/api/ProjectSiteAsset/GetAllProjectSiteAssetByProjectId',
  OrganizationClients:'http://41.33.73.195:80/TrackerAPI/api/OrganizationClients',
  GetAllUnassignedClientsByOrganization:'http://41.33.73.195:80/TrackerAPI/api/OrganizationClients/GetAllUnassignedClients',
  GetAllAssignedClientsByOrganizationId:'http://41.33.73.195:80/TrackerAPI/api/OrganizationClients/GetAllAssignedClientsByOrganizationId',
  GetAllUnassignedClientsforAnotherOrganizationAndAssignedByThisOrganizationId:'http://41.33.73.195:80/TrackerAPI/api/OrganizationClients/GetAllUnassignedClientsforAnotherOrganizationAndAssignedByThisOrganizationId',
  GetAllAssignedClientsDataByOrganizationId:'http://41.33.73.195:80/TrackerAPI/api/OrganizationClients/GetAllAssignedClientsDataByOrganizationId',
  GetOrganizationProjectsByClientId:'http://41.33.73.195:80/TrackerAPI/api/OrganizationClients/GetOrganizationProjectsByClientId',
  GetAllRequestByProjectId: 'http://41.33.73.195:80/TrackerAPI/api/Request/GetAllRequestByProjectId/',
  GetAllAssetsSerialsByAssetId:'http://41.33.73.195:80/TrackerAPI/api/ProjectSiteAsset/GetAllAssetsSerialsByAssetId',
  GetProjectsByClientId: 'http://41.33.73.195:80/TrackerAPI/api/project/GetProjectsByClientId/',
  GetAllRequestByProjectSiteAssetId:'http://41.33.73.195:80/TrackerAPI/api/Request/GetAllRequestByProjectSiteAssetId/',
  GetProjectSiteAssetBySerialNumber:'http://41.33.73.195:80/TrackerAPI/api/ProjectSiteAsset/GetProjectSiteAssetBySerialNumber',
  getCitiesbygovid:'http://41.33.73.195:80/TrackerAPI/api/Cities/Getgovbycity/',
  Cities:'http://41.33.73.195:80/TrackerAPI/api/Cities',
  Governorates:'http://41.33.73.195:80/TrackerAPI/api/Governorates',
  GetAllAssignesitesbyclient:'http://41.33.73.195:80/TrackerAPI/api/SiteClients/GetAllAssignesitesbyclient',
  GetAllAssetsSerialsByProjectId:'http://41.33.73.195:80/TrackerAPI/api/ProjectSiteAsset/GetAllAssetsSerialsbyProject',
  DaysForAutomaticApprovedStatus:'http://41.33.73.195:80/TrackerAPI/api/DaysForAutomticApprovedStatus' ,
  CountDoneProjects:'http://41.33.73.195:80/TrackerAPI/api/Request/CountDoneProjects/',
  CountWaitingApproveProjects:'http://41.33.73.195:80/TrackerAPI/api/Request/CountWaitingApproveProjects/',
  CountApproveProjects:'http://41.33.73.195:80/TrackerAPI/api/Request/CountApproveProjects/',
  CountRejectProjects:'http://41.33.73.195:80/TrackerAPI/api/Request/CountRejectProjects/',
  CountSystemClosedProjects:'http://41.33.73.195:80/TrackerAPI/api/Request/CountSystemClosedProjects/',
  SendSMSURL:'http://smsmisr.com/api/v2',
  production: true
};