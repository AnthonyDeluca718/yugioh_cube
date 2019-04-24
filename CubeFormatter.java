import java.awt.image.BufferedImage;
import javax.imageio.ImageIO;
import java.io.File;
import java.awt.Graphics;
import java.io.FileOutputStream;
import java.util.ArrayList;
import java.awt.Color;

public class CubeFormatter
{
	public static void main(String[] args)
	{
		try
		{
			File directory = new File("pillow/set-1-output");
			ArrayList<File> allImages = new ArrayList<File>();
			File fileList[] = directory.listFiles();
			for(int k = 0; k < fileList.length; ++k)
				if(fileList[k].isDirectory())
					for(int j = 0; j < fileList[k].listFiles().length; ++j)
					{
						if(!fileList[k].listFiles()[j].getName().substring(0, 1).equals("."))
							allImages.add(fileList[k].listFiles()[j]);
					}
				else
				{
					if(!fileList[k].getName().substring(0, 1).equals("."))
						allImages.add(fileList[k]);
				}

			int pageCounter = 0;
			int positionOnPage = -1;
			FileOutputStream pageStream = new FileOutputStream("printables/blankfile.png");
			BufferedImage page = new BufferedImage(1275, 1650, BufferedImage.TYPE_INT_RGB);
			Graphics pageGraphics = page.getGraphics();
			while(allImages.size() > 0)
			{
				BufferedImage card = ImageIO.read(allImages.remove(0));
				positionOnPage = (positionOnPage + 1) % 9;
				if(positionOnPage == 0)
				{
					pageStream = new FileOutputStream("printables/page" + pageCounter + ".png");
					pageGraphics.setColor(new Color(255, 255, 255));
					pageGraphics.fillRect(0, 0, 1275, 1650);
				}
				pageGraphics.setColor(new Color(0, 0, 0));
				int x = 106 + (positionOnPage % 3) * 353;
				int y = 71 + (positionOnPage / 3) * 501;
				pageGraphics.fillRect(x - 1, y - 1, 355, 503);
				pageGraphics.drawImage(card, (int) (x + 177.0 - 250.5 * card.getWidth() / card.getHeight()), y, (int) (x + 177.0 + 250.5 * card.getWidth() / card.getHeight()), y + 501, 0, 0, card.getWidth(), card.getHeight(), null);
				if(positionOnPage == 8)
				{
					ImageIO.write(page, "png", pageStream);
					pageStream.flush();
					pageStream.close();
					++pageCounter;
				}
			}
			ImageIO.write(page, "png", pageStream);
			pageStream.flush();
			pageStream.close();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
}

/*page width: 1275
page height: 1650
"card" width: 355
"card" height: 503*/