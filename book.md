---
layout: page
title: Buchen
description: Hier können Sie ein Zimmer buchen.
hideFooter: true
sitemap:
    priority: 0.7
    lastmod: 2017-11-02
    changefreq: weekly
---
## Ferienwohnung buchen

  <div class="row 50% uniform">
    <div class="12u"><span class="image fit"><img onclick="img_box(this)" src="{{ "/images/130.jpg" | absolute_url }}" alt="Auspannen am Teich" /></span></div>
  </div>

<!-- TODO Fix Form -->
<form action="#" class="alt" id="book-form">
	<div class="row uniform">
		<div class="6u 12u$(xsmall)">
			<input type="text" name="Name" id="name" value="" required placeholder="Name*" />
		</div>
      <div class="6u$ 12u$(xsmall)">
				<input type="email" name="Email" id="email" value="" placeholder="Email" />
			</div>
            <!-- Break -->
      <div class="6u 12u$(xsmall)">
				<input type="email" name="Telefon" id="phone" value="" placeholder="Telefon" />
			</div>
			<div class="3u 12u$(xsmall)">
				<div class="select-wrapper">
					<select name="Erwachsene" id="demo-category" required>
						<option value="">Erwachsene*</option>
            <option value="2">1 Erwachsene</option>
						<option value="2">2 Erwachsene</option>
						<option value="3">3 Erwachsene</option>
						<option value="4">4 Erwachsene</option>
						<option value="5">5 Erwachsene</option>
            <option value="6">6 Erwachsene</option>
					</select>
				</div>
			</div>
      <div class="3u$ 12u$(xsmall)">
				<div class="select-wrapper">
					<select name="Kinder" id="demo-category">
						<option value="">Kinder</option>
            <option value="2">1 Kind</option>
						<option value="2">2 Kinder</option>
						<option value="3">3 Kinder</option>
						<option value="4">4 Kinder</option>
						<option value="5">5 Kinder</option>
            <option value="6">6 Kinder</option>
					</select>
				</div>
			</div>
      <div class="3u 12u$(xsmall)">
				<input type="text" name="Adresse" id="number" value="" placeholder="Adresse" />
			</div>
      <div class="3u 12u$(xsmall)">
				<input type="text" name="Land" id="number" value="" placeholder="Land" />
			</div>
      <div class="3u 12u$(xsmall)">
				<input type="text" name="Postleitzahl" id="town" value="" placeholder="Postleitzahl" />
			</div>
      <div class="3u$ 12u$(xsmall)">
				<input type="text" name="Ort" id="town" value="" placeholder="Ort" />
			</div>
      <h3 class="12u$" style="margin-block-end: 0;">Ankunft - Mindestens 6 Nächte</h3>
      <div class="3u 12u$(xsmall)">
				<input type="text" name="Tag Ankunft" id="number" value="" placeholder="Tag der Ankunft" required />
		</div>
      <div class="3u 12u$(xsmall)">
				<div class="select-wrapper">
					<select name="Monat" id="demo-category" required>
						<option value="0">Monat*</option>
            			<option value="1">Jänner</option>
						<option value="2">Februar</option>
						<option value="3">März</option>
						<option value="4">April</option>
						<option value="5">Mai</option>
            <option value="6">Juni</option>
            <option value="7">Juli</option>
						<option value="8">August</option>
            <option value="9">September</option>
						<option value="10">Oktober</option>
						<option value="11">November</option>
						<option value="12">Dezember</option>
					</select>
				</div>
			</div>
      	<div class="3u 12u$(xsmall)">
				<input type="text" name="Jahr" id="town" value="" placeholder="Jahr*" required />
			</div>
      	<div class="3u$ 12u$(xsmall)">
				<input type="text" name="Anzahl Nächte" id="town" value="" placeholder="Nächte*" required />
		</div>
		<!-- Break -->
		<div class="12u$">
			<textarea name="demo-message" id="Anmerkung" placeholder="Anmerkung" rows="6"></textarea>
		</div>
		<!-- Break -->
		<div class="12u$">
			<ul class="actions">
				<li style="margin-top: 16px">
					<input id="button-send-email" type="button" value="Anfrage per Email senden" class="special" />
				</li>
				<li style="margin-top: 16px">
					<input id="button-send-sms" type="button" value="Anfrage per SMS absenden" class="special" />
				</li>
				<li style="margin-top: 16px">
					<input type="reset" value="Zurücksetzen" />
				</li>
			</ul>
		</div>
	</div>
</form>