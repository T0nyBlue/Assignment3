/**
 * @swagger
 * /musics:
 *   get:
 *     tags:
 *       - Musics List
 *     summary: Get Musics List
 *     description: Returns musics list
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *          description: Musics List
 *          content:
 *            application/json:
 *              schema:
 *                type: array
 *                items:
 *                  type: object
 *                  properties:
 *                      id:
 *                          type: string
 *                          example: 8bbd1506-e790-4fad-901d-59dfe2159a86
 *                      SongName:
 *                          type: string
 *                          example: Wake Me Up
 *                      Author:
 *                          type: string
 *                          example: Avicii
 *                      Singer:
 *                          type: string
 *                          example: Avicii
 *       500:
 *         description: Server Error
 * 

 *   post:
 *     tags:
 *       - Musics List
 *     summary: Add Music To Musics List
 *     description: Add a new music to musics list
 *     requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          SongName:
 *                              type: string
 *                              example: Wake Me Up
 *                          Author:
 *                              type: string
 *                              example: Avicii
 *                          Singer:
 *                              type: string
 *                              example: Avicii
 *     responses:
 *       200:
 *         description: Successfully added
 *       500:
 *         description: Server error
 * 
 * /musics/{musicId}:
 *   get:
 *     tags:
 *       - Music
 *     summary: Get Music in Musics List
 *     description: Returns music
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: musicId
 *         in: path
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *          description: Music
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                properties:
 *                    id:
 *                        type: string
 *                        example: 8bbd1506-e790-4fad-901d-59dfe2159a86
 *                    SongName:
 *                        type: string
 *                        example: Wake Me Up
 *                    Author:
 *                        type: string
 *                        example: Avicii
 *                    Singer:
 *                        type: string
 *                        example: Avicii
 *       500:
 *         description: Server Error
 * 
 *   patch:
 *     tags:
 *       - Music
 *     summary: Update Music In Musics List
 *     description: Add a new music to musics list
 *     parameters:
 *       - name: musicId
 *         description: ID of music
 *         in: path
 *         required: true
 *     requestBody:
 *          required: true
 *          content: 
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          SongName:
 *                              type: string
 *                              example: Wake Me Up
 *                          Author:
 *                              type: string
 *                              example: Avicii
 *                          Singer:
 *                              type: string
 *                              example: Avicii
 *     responses:
 *       200:
 *         description: Successfully updated
 *       500:
 *         description: Server error
 * 
 *   delete:
 *     tags:
 *       - Music
 *     summary: Delete Music From Musics List
 *     description: Deletes music
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: musicId
 *         description: ID of music
 *         in: path
 *         required: true
 *     responses:
 *       200:
 *         description: Successfully deleted
 *       500:
 *         description: Server error
 */