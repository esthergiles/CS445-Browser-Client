<template>

    <h5><label for="Choose Report" style="color:#E74C3C"></label>
    <input id="a" type="radio" name = "but" value="Daily">Generate Immediately<br>
    <input id="b" type="radio" name = "but" value="Weekly">Schedule To Be Generated Weekly 
    <input type="date" id="date" ><br>
    <input id="c" type="radio" name = "but" value="Monthly">Schedule To Be Generated Monthly
    <input type="date" id="date2" name="date2"></h5>

 <!-- <div class="text-center">
                <h3 style="color:#2C3E50" >Financial Reports</h3>
                <h4> <label for="Choose Report"  style="color:#E74C3C">Choose Report</label></h4> -->
<div class="input-group"><span class="input-group-addon"><span class="glyphicon glyphicon-tasks"></span></span>
                    <select  class="btn btn-primary btn-block col-md-4 col-md-offset-4 mx-auto" >
                                    <option value="List of Admin" selected>List of Admin</option>
                                    <option value="List of Faculty">List of Faculty</option>
                                    <option value="tutored">Distinct students tutored by date range</option>
                                    <option value="available">Number of tutoring appointments by date range</option>
                                    <option value="distinct">Number of distinct students tutored by tutor and date</option>
                                    <option value="unused">Number of hours unused by tutor by date range</option>
                                    <option value="distinctstudents">Total distinct students tutored by date range</option>
                                </select></div>                   <br>
                                <button type="submit" class="btn btn-primary btn-block col-md-4 col-md-offset-4 mx-auto">Submit</button>
<!-- </div> -->

  
</template>


<script>

export default {
  name: 'GenerateReport',
  }
</script>


<style scoped>
/******** Starting Side Nav style **********/

/* The side navigation menu */
.sidebar {
  margin: 0;
  padding: 0;
  width: 200px;
  background-color: #46266b;
  position: fixed;
  height: 100%;
  overflow: auto;
}

/* Sidebar links */
.sidebar a {
  display: block;
  color: black;
  padding: 16px;
  text-decoration: none;
}

/* Active/current link */
.sidebar a.active {
  background-color: #ab7d21;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: 200px;
  padding: 1px 16px;
  height: 1000px;
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}
/******** Ending Side Nav style **********/
</style>

<style scoped>
.btn-primary {
    color: #212529;
    background-color: #db9f11;
    border-color: #db9f11;
}

.btn-primary:hover {
    color: #212529;
    background-color:#db9f11;
    border-color: #db9f11;
}

.btn-primary:focus,
.btn-primary.focus {
    box-shadow: 0 0 0 .2rem rgba(91, 194, 194, 0.5)
}
</style>