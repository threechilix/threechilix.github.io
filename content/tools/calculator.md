---
title: "Calculator"
description: "Tools yang digunakan untuk mempermudah dalam menghitung matematika"
images: "attachments/tools/calculator/thumbnail.jpg"
class: "icon-danger"
icon: "fa-calculator"
date: "2017-09-14"
js: "attachments/tools/calculator/script.js"
css: "attachments/tools/calculator/style.css"
---
<center>
	<FORM NAME="sci-calc">
		<TABLE CELLSPACING="0" CELLPADDING="1">
			<TR>
				<TD COLSPAN="5" ALIGN="center"><INPUT NAME="display" CLASS="form-control" VALUE="0" SIZE="32" MAXLENGTH="36"></TD>
			</TR>
			<TR>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE=" exp " ONCLICK="if (checkNum(this.form.display.value)) { exp(this.form) }"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="   ln   " ONCLICK="if (checkNum(this.form.display.value)) { ln(this.form) }"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE=" sqrt " ONCLICK="if (checkNum(this.form.display.value)) { sqrt(this.form) }"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="  sq  " ONCLICK="if (checkNum(this.form.display.value)) { square(this.form) }"></TD>
			</TR>
			<TR>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="  7  " ONCLICK="addChar(this.form.display, '7')"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="  8  " ONCLICK="addChar(this.form.display, '8')"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="  9  " ONCLICK="addChar(this.form.display, '9')"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="   /   " ONCLICK="addChar(this.form.display, '/')"></TD>
			</TR>
			<TR>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="  4  " ONCLICK="addChar(this.form.display, '4')"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="  5  " ONCLICK="addChar(this.form.display, '5')"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="  6  " ONCLICK="addChar(this.form.display, '6')"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="   *   " ONCLICK="addChar(this.form.display, '*')"></TD>
			</TR>
			<TR>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="  1  " ONCLICK="addChar(this.form.display, '1')"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="  2  " ONCLICK="addChar(this.form.display, '2')"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="  3  " ONCLICK="addChar(this.form.display, '3')"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="   -   " ONCLICK="addChar(this.form.display, '-')"></TD>
			</TR>
			<TR>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="  0  " ONCLICK="addChar(this.form.display, '0')"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="   .  " ONCLICK="addChar(this.form.display, '.')"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE=" +/- " ONCLICK="changeSign(this.form.display)"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="   +  " ONCLICK="addChar(this.form.display, '+')"></TD>
			</TR>
			<TR>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="  (  " ONCLICK="addChar(this.form.display, '(')"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="cos" ONCLICK="if (checkNum(this.form.display.value)) { cos(this.form) }"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE=" sin" ONCLICK="if (checkNum(this.form.display.value)) { sin(this.form) }"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE=" tan" ONCLICK="if (checkNum(this.form.display.value)) { tan(this.form) }"></TD>
			</TR>
			<TR>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="  )  " ONCLICK="addChar(this.form.display, ')')"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="AC" ONCLICK="this.form.display.value: 0 "></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="DEL" ONCLICK="deleteChar(this.form.display)"></TD>
				<TD ALIGN="center"><INPUT TYPE="button" CLASS="btn btn-primary klu" VALUE="=" NAME="enter" ONCLICK="if (checkNum(this.form.display.value)) { compute(this.form) }"></TD>
			</TR>
		</TABLE>
	</FORM>
</center>
