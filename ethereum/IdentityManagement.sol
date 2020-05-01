pragma solidity ^0.4.17;


contract IdentityManagement {
    //Counter Variable
    uint256 public userCount;

    constructor() public {
        userCount = 0;
    }

    // struct Defination:
    // array type to store user information
    struct userInfo {
        string userName;
        string userEmail;
        uint256 userNumber;
    }

    //array type to store user's licence
    struct userLicence {
        uint256 lNumber;
        string lName;
        string lDOB;
        string lAddress;
    }

    // store request for licence
    // numbers for status

    // 0 -- default
    // 1 -- requested
    // 2 -- approved
    // 3 -- rejected

    // for overallStatus:
    // 1 - requested
    // 2 - partial
    // 3 - approved
    // 4 - rejected

    struct licenceRequest {
        address senderAddress;
        string requestedBy;
        uint256 lNumber;
        uint256 lName;
        uint256 lDOB;
        uint256 lAddress;
        uint256 overallStatus;
    }

    //Variable and mapping decleration:
    userInfo[] public userinfo;
    mapping(address => uint256) public userInfoMap;
    mapping(address => userLicence[]) public userLicenceMap;
    mapping(address => licenceRequest[]) public licenceRequestMap;

    //function modifiers

    // Check if the user already have an account
    modifier existingUserCheck() {
        require(userInfoMap[msg.sender] != 0, "User Does not exist!");
        _;
    }

    //check if its a new user
    modifier newUserCheck() {
        require(userInfoMap[msg.sender] == 0, "You are already registered!");
        _;
    }

    //function Defination:

    //add new user
    function addUser(string _name, string _email, uint256 _number)
        public
        newUserCheck
    {
        userInfo memory newUserInfo = userInfo({
            userName: _name,
            userEmail: _email,
            userNumber: _number
        });

        // userCount value will be stored in the map and
        // to obtain that user information
        // obtain the specific userCount value user address form the map
        // and userinfo[userCount-1] will be the data of that user!
        userinfo.push(newUserInfo);
        userCount++;
        userInfoMap[msg.sender] = userCount;
        //implementation shown in updateUser and viewUser function
    }

    //update existing user
    function updateUser(string _name, string _email, uint256 _number)
        public
        existingUserCheck
    {
        uint256 index = userInfoMap[msg.sender];
        userInfo storage user = userinfo[index - 1];
        user.userName = _name;
        user.userEmail = _email;
        user.userNumber = _number;
    }

    //view existing user
    function viewUser()
        public
        view
        existingUserCheck
        returns (string, string, uint256)
    {
        uint256 index = userInfoMap[msg.sender];
        userInfo storage user = userinfo[index - 1];
        return (user.userName, user.userEmail, user.userNumber);
    }

    // add licence document
    function addUserLicence(
        uint256 _lNumber,
        string _lName,
        string _lDOB,
        string _lAddress
    ) public existingUserCheck {
        userLicence memory newUserLicence = userLicence({
            lNumber: _lNumber,
            lName: _lName,
            lDOB: _lDOB,
            lAddress: _lAddress
        });
        userLicenceMap[msg.sender].push(newUserLicence);
    }

    // update licence document
    function updateUserLicence(
        uint256 _lNumber,
        string _lName,
        string _lDOB,
        string _lAddress
    ) public existingUserCheck {
        userLicence storage licence = userLicenceMap[msg.sender][0];
        licence.lNumber = _lNumber;
        licence.lName = _lName;
        licence.lDOB = _lDOB;
        licence.lAddress = _lAddress;
    }

    // view user licence
    // user index 0 by default cause for now we are adding only drivers licence
    function viewUserLicence()
        public
        view
        returns (uint256, string, string, string)
    {
        require(
            userLicenceMap[msg.sender].length != 0,
            "You dont have any document in your wallet!"
        );

        userLicence storage licence = userLicenceMap[msg.sender][0];
        return (licence.lNumber, licence.lName, licence.lDOB, licence.lAddress);
    }

    // add licence request and send it to the user
    function addLicenceRequest(
        address _userAddress,
        address _senderAddress,
        string _requestedBy
    ) public existingUserCheck {
        licenceRequest memory request = licenceRequest({
            senderAddress: _senderAddress,
            requestedBy: _requestedBy,
            lNumber: 1,
            lName: 1,
            lDOB: 1,
            lAddress: 1,
            overallStatus: 1
        });

        licenceRequestMap[_userAddress].push(request);
    }

    // Function returns the request array values
    function viewLicenceRequest(uint256 _index)
        public
        view
        returns (address, string, uint256, uint256, uint256, uint256, uint256)
    {
        licenceRequest memory request = licenceRequestMap[msg.sender][_index];
        return (
            request.senderAddress,
            request.requestedBy,
            request.lNumber,
            request.lName,
            request.lDOB,
            request.lAddress,
            request.overallStatus
        );
    }

    // function that returns senderAddress, requestedBy and overallStatus
    function viewRequestHeader(uint256 _index)
        public
        view
        returns (address, string, uint256)
    {
        licenceRequest memory request = licenceRequestMap[msg.sender][_index];
        return (
            request.senderAddress,
            request.requestedBy,
            request.overallStatus
        );
    }

    // function that returns length of licenceRequest array
    function viewRequestLength() public view returns (uint256) {
        return licenceRequestMap[msg.sender].length;
    }

    // function allow user to finalize request and give
    // approval for specific data in the request
    function finalizeRequest(
        uint256 _index,
        uint256 _lNumber,
        uint256 _lName,
        uint256 _lDOB,
        uint256 _lAddress,
        uint256 _overallStatus
    ) public {
        licenceRequest storage request = licenceRequestMap[msg.sender][_index];
        request.lNumber = _lNumber;
        request.lName = _lName;
        request.lDOB = _lDOB;
        request.lAddress = _lAddress;
        request.overallStatus = _overallStatus;
    }
}
