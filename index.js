var imgbb = require('imgbb-uploader')



benny.on('group-participants-update', async (anu) => {
		try {
			console.log(anu)
			const group = await benny.groupMetadata(anu.jid)
			if (anu.action == 'add') {
				const group = await benny.groupMetadata(anu.jid)
	if (!welcome.includes(anu.jid)) return
				num = anu.participants[0]
				pushname = benny.contacts[num].notify || benny.contacts[num].vname
				global.txtwl
				txtwl = `Hai @${num.split('@')[0]}\nWelcome to ${group.subject}\nSemoga betah~~`
				try {
					ppimg = await benny.getProfilePicture(num)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `${txtwl}`
				buff = await getBaper(ppimg)
				datae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi, ''))
					fs.writeFileSync('janckuk.jpeg', datae, 'base64')
					var imgbb = require('imgbb-uploader')
					data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", 'janckuk.jpeg')
			buffu = await getBaper(`https://api-self.herokuapp.com/docs/canvaswel?name=${pushname}&img_url=${data.display_url}&gcname=${group.subject}&jumlahmem=${group.participants.length}&apikey=${apikey}`)
				benny.sendMessage(group.id, buffu, MessageType.image, {contextInfo: {mentionedJid: [num]}, caption: txtwl, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `*Welcome*`, "fileLength": "36", "pageCount": 0, "fileName": `_*Welcome*_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
				} else if (anu.action == 'remove') {
					if (!welcome.includes(anu.jid)) return
					const group = await benny.groupMetadata(anu.jid)
				num = anu.participants[0]
				pushname = benny.contacts[num].notify || benny.contacts[num].vname
				try {
					ppimg = await benny.getProfilePicture(num)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				
				teks = `Selamat tinggal @${num.split('@')[0]}`
				let buff = await getBaper(ppimg)
				datae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi, ''))
					fs.writeFileSync('janckuk.jpeg', datae, 'base64')
					var imgbb = require('imgbb-uploader')
					data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", 'janckuk.jpeg')
				buffu = await getBaper(`https://api-self.herokuapp.com/docs/canvasbye?name=${pushname}&img_url=${data.display_url}&gcname=${group.subject}&jumlahmem=${group.participants.length}&apikey=${apikey}`)
				benny.sendMessage(group.id, buffu, MessageType.image, {contextInfo: {mentionedJid: [num]}, caption: teks})
				}
} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
		})
