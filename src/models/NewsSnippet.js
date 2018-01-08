import { observable } from 'mobx';

// If the NewsSnippet is being received as an array of objects from an AJAX query,
//   then you will be able to create a new NewsSnippet object by passing the json for it
// This separation of models ensures that the structure is more consistent, and allows
//   leeway for any potential changes that come from any API webhook that is responsible
//   for returning a list of NewsSnippets

export default class NewsSnippet {
	@observable name = ""
	@observable description = ""
	@observable date = ""
	@observable section = ""
	@observable previewSrc = ""
	@observable href = ""
	@observable hoverText = ""

	constructor(json) {
		if(json) {
			this.name = json.name;
			this.description = json.description;
			this.date = json.date;
			this.section = json.section;
			this.previewSrc = json.previewSrc;
			this.href = json.href;
			this.hoverText = json.hoverText;
		}
	}

	asJson()  {
		return {
			name: this.name,
			description: this.description,
			date: this.date,
			section: this.section,
			previewSrc: this.previewSrc,
			href: this.href,
			hoverText: this.hoverText,
		}
	}
}